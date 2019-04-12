import React from 'react';

import Task from "./Task.js";
import NewTask from "./NewTask";

import styled from 'styled-components';

const TasksList = styled.ul`
    li{
        padding: 1px;   
    }
`

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    generateTasks() {
        let tasks = this.props.tasks.map((task) => {
            return (
                <Task id={task.id} task={task}
                    deleteTask={this.props.deleteTask}
                    isEditting={this.props.isEditting}
                    editTask={this.props.editTask}
                ></Task>
            )
        });
        return tasks;
    }

    render() {
        const isEditting = this.props.isEditting;
        return (
            <TasksList>
                {this.generateTasks()}
                {
                    isEditting &&
                    <NewTask
                        addTask={this.props.addTask}
                    ></NewTask>
                }
            </TasksList>
        )
    }
}

export default TaskList;