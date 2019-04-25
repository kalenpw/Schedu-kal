<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class ProjectController extends Controller
{
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
        $projects = \App\Project::all();
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
