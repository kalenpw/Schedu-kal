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
}
