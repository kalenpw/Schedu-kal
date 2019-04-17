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
    generateTasks() {
        let tasks = this.props.tasks.map((task) => {
            return (
                <Task key={task.id} id={task.id} task={task}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                    isEditting={this.props.isEditting}
                    completeTask={this.props.completeTask}
                ></Task>
            )
        });
        return tasks;
    }

    render() {
        const isEditting = this.props.isEditting;
        // console.log(this.props.tasks);
        return (
            <TasksList>
                {this.generateTasks()}
                {
                    isEditting &&
                    <NewTask
                        projectId={this.props.projectId}
                        addTask={this.props.addTask}
                    ></NewTask>
                }
            </TasksList>
        )
    }
}

export default TaskList;