import React from 'react';

import TaskList from "./TaskList";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                id: 1,
                name: "Learn react",
                tasks: [
                    {
                        id: 1,
                        description: 'React Router',
                    },
                    {
                        id: 2,
                        description: 'React native',
                    }
                ]
            },
        }
    }

    generateTasks() {
        let tasks = this.state.project.tasks.map((task) => {
            return <li>{task}</li>
        })
        return tasks;
    }

    deleteTask = (id) => {
        const project = this.state.project;
        const tasks = project.tasks;
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        this.setState({ project: project })
    }

    addTask = (task) => {
        const project = this.state.project;
        const tasks = project.tasks;
        tasks.push(task);
        this.setState({ project: project })
    }

    render() {
        const name = this.state.project.name;
        const tasks = this.state.project.tasks;
        return (
            <div>
                <h1 className="title">{name}</h1>
                <TaskList tasks={tasks}
                    addTask={this.addTask}
                    deleteTask={this.deleteTask} 
                />
            </div>
        )
    }
}

export default Project;
