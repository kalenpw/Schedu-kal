<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class TaskController extends Controller
{
    //
    public function updateTaskDescription(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required',
            'description' => 'required'
        ]);
        $taskToUpdate = \App\Task::where('id', $request->id)->first();
        $taskToUpdate->description = $request->description;
        $taskToUpdate->save();
        return $taskToUpdate;
    }

    public function createTask(Request $request)
    {
        $validatedData = $request->validate([
            'project_id' => 'required',
            'description' =>'required',
        ]);

        $task = new \App\Task;
        $task->description = $request->description;
        $task->project_id = $request->project_id;
        $task->dateDue = Carbon::createFromTimestampUTC(0);
        $task->save();
        return $task;
    }

    public function deleteTask(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required'
        ]);
        $task = \App\Task::where('id', $request->id)->first();
        return "deleted";
    }
}
