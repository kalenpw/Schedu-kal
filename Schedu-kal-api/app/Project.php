<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $guarded = [];

    public function getTasks()
    {
        return \App\Task::where('project_id', $this->id)->get();
    }
}
