<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProjectController extends Controller
{
    public function updateOrder(Request $request)
    {
        // update table
        // set order = order - 1
        // where order >= ? and order <= ?;

        // update table
        // set order = ?
        // where song = ?
        $validated = $request->validate([
            'id' => 'required',
            'orderTo' => 'required',
            'orderFrom' => 'required'
        ]);
        $toPosition = $request->orderTo;
        $fromPosition = $request->orderFrom;
        $move = ($toPosition > $fromPosition) ? 'down' : 'up';

        //set a dummy position so we can access it later
        DB::update('update projects set `order` = -1 where id = ?', [$request->id]);

        if ($move == 'down') {
            DB::update('update projects set `order` = `order` - 1 where `order` > ? and `order` <= ?', [$request->orderFrom, $request->orderTo]);
        } else {
            DB::update('update projects set `order` = `order` + 1 where `order` >= ? and `order` < ?', [$request->orderTo, $request->orderFrom]);
        }
        DB::update('update projects set `order` = ? where `order` = -1', [$request->orderTo]);

        return $this->getProjects();
    }

    public function updateName(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'name' => 'required',
        ]);
        $project = \App\Project::where('id', $request->id)->first();
        if ($project) {
            $project->name = $request->name;
            $project->save();
            return $project;
        }
        return "not found";
    }

    public function updateCategory(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'category' => 'required',
        ]);
        $project = \App\Project::where('id', $request->id)->first();
        if ($project) {
            $project->category = $request->category;
            $project->save();
            return $project;
        }
        return "not found";
    }

    public function updateDateDue(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'dateDue' => 'required',
        ]);
        $projectToUpdate = \App\Project::where('id', $request->id)->first();
        $dateDue = Carbon::createFromTimestampUTC(round($request->dateDue / 1000));
        $projectToUpdate->dateDue = $dateDue;
        $projectToUpdate->save();
        $projectToUpdate->getTasks();
        return $projectToUpdate;
    }

    public function createProject(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'category' => 'required',
            'dateDue'=> 'required',
        ]);
        $validated['dateDue'] = Carbon::createFromTimestamp(round($request->dateDue / 1000));
        $project = \App\Project::create($validated);
        $project->getTasks();
        return $project;
    }

    public function getProjects()
    {
        $projects = \App\Project::orderBy('order')->get();
        foreach ($projects as $project) {
            $project->getTasks();
        }
        return $projects;
    }

    public function getProjectById($id)
    {
        $project = \App\Project::where('id', $id)->first();
        $project->getTasks();
        return $project;
    }
}
