<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/projects', 'ProjectController@getProjects');
Route::post('/projects/create', 'ProjectController@createProject');
Route::get('/projects/{id}', 'ProjectController@getProjectById');

Route::post('/tasks/updateDescription', 'TaskController@updateTaskDescription');

Route::get('/projects/dummyData', function () {
    \App\Project::query()->delete();
    $project1 = new \App\Project();
    $project1->name = "Learn react";
    $project1->category = "PERSONAL";
    $project1->dateDue = date('Y-m-d');
    $project1->save();

    $project2 = new \App\Project();
    $project2->name = "Graduate College";
    $project2->category = "School";
    $project2->dateDue = date('Y-m-d');
    $project2->save();

    $task = new \App\Task();
    $task->dateDue = date('Y-m-d');
    $task->description = "Atttend all classes";
    $task->project_id = "2";
    $task->save();

    $task2 = new \App\Task();
    $task2->dateDue = date('Y-m-d');
    $task2->description = "Finish Monopoly";
    $task2->project_id = "2";
    $task2->save();

    $task3 = new \app\task();
    $task3->datedue = date('y-m-d');
    $task3->description = "take finals";
    $task3->project_id = "2";
    $task3->save();

    $task4 = new \app\task();
    $task4->datedue = date('y-m-d');
    $task4->description = "Learn redux";
    $task4->project_id = "1";
    $task4->save();

    $task5 = new \app\task();
    $task5->datedue = date('y-m-d');
    $task5->description = "Learn native";
    $task5->project_id = "1";
    $task5->save();
});

Route::get("/test", function () {
    return "ok";
})->middleware('cors');
