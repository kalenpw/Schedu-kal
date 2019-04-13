<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
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
