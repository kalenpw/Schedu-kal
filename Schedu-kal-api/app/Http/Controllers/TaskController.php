<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
