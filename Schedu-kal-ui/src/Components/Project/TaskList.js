import React from 'react';
import styled from 'styled-components';
import Task from "Components/Project/Task.js";
import ThemedInput from "Components/Forms/ThemedInput.js";

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

    handleKeyUp = (event, ref) => {
        if (event.key === "Enter" && event.target.value.trim()) {
            const task = {
                projectId: this.props.projectId,
                isNew: true,
                description: event.target.value.trim(),
                id: Math.random(),
            }
            this.props.addTask(task);
            ref.current.value = "";
        }
    }

    render() {
        const isEditting = this.props.isEditting;
        // console.log(this.props.tasks);
        return (
            <TasksList>
                {this.generateTasks()}
                {
                    isEditting &&
                    <ThemedInput
                        inputClasses="input is-primary"
                        icon="fas fa-envelope"
                        placeholder="New task"
                        handleKeyUp={this.handleKeyUp}
                    />                    
                }
            </TasksList>
        )
    }
}

export default TaskList;