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
        $task = \App\Project::where('id', $request->id)->first();
        if ($task) {
            $task->name = $request->name;
            $task->save();
            return $task;
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
        // return $dateDue;
        // $formattedDate = $dateDue;
        // $formattedDate = $dateDue->format("Y-m-d");
        $projectToUpdate->dateDue = $dateDue;
        $projectToUpdate->save();
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
        return \App\Project::create($validated);
    }

    public function getProjects()
    {
        $projects = \App\Project::all();
        foreach ($projects as $project) {
            $project->setAttribute('tasks', $project->getTasks());
        }
        return $projects;
    }

    public function getProjectById($id)
    {
        $project = \App\Project::where('id', $id)->first();
        $project->setAttribute('tasks', $project->getTasks());
        return $project;
    }
}
