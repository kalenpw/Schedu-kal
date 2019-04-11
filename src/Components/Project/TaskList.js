import React from 'react';

import Task from "./Task.js";
import NewTask from "./NewTask";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    generateTasks() {
        let tasks = this.props.tasks.map((task) => {
            return (
                <Task task={task}
                    deleteTask={this.props.deleteItem}
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
                ></NewTask>
            </ul>
        )
    }
}

export default TaskList;