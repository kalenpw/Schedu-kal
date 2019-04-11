import React from 'react';

import Task from "./Task.js";
import NewTask from "./NewTask";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    generateTasks() {
        let tasks = this.props.tasks.map((task) => {
            return (
                <Task id={task.id} task={task}
                    deleteTask={this.props.deleteTask}
                ></Task>
            )
        });
        return tasks;
    }

    render() {
        return (
            <ul>
                {this.generateTasks()}
                <NewTask
                    addTask={this.props.addTask}
                ></NewTask>
            </ul>
        )
    }
}

export default TaskList;