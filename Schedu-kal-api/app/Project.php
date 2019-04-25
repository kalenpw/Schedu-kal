<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //

    protected $guarded = [];

    public function getTasks()
    {
        $tasks = \App\Task::where('project_id', $this->id)->get();
        $this->setAttribute('tasks', $tasks);
        return $this->tasks;
    }
}
