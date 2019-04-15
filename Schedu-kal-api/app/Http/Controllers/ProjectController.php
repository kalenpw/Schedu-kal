<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class ProjectController extends Controller
{
    public function createProject(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'category' => 'required',
            'dateDue'=> 'required',
        ]);
        $validated['dateDue'] = Carbon::createFromTimestampUTC($request->dateDue / 1000);
        return \App\Project::create($validated);
    }

    //
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
