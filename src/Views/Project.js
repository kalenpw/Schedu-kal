import React from 'react';

import TaskList from "../Components/Project/TaskList";

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
            isEditting: false,
        }
    }

    editTask = (id, description) => {
        const project = this.state.project;
        const tasks = project.tasks;
        project.tasks = tasks.filter((task) => {
            if(task.id === id){
                task.description = description;
            }
            return true;
        });
        this.setState({ project: project });
        // this.setState({isEditting: false});
    }

    deleteTask = (id) => {
        const project = this.state.project;
        const tasks = project.tasks;
        project.tasks = tasks.filter((task) => {
            return task.id !== id;
        });
        this.setState({ project: project })
    }

    toggleEdit = () => {
        this.setState({isEditting: !this.state.isEditting});
    }

    addTask = (task) => {
        const project = this.state.project;
        project.tasks.push(task);
        this.setState({ project: project })
    }

    render() {
        const name = this.state.project.name;
        const tasks = this.state.project.tasks;
        const isEditting = this.state.isEditting;
        const iconClass = isEditting ? 'far fa-save' : 'far fa-edit';
        return (
            <div>
                <h1 className="title">{name}
                    <button className="button is-primary is-pulled-right"
                        onClick={this.toggleEdit} 
                    >
                        <i className={iconClass}></i>
                    </button>
                </h1>
                <TaskList tasks={tasks}
                    addTask={this.addTask}
                    deleteTask={this.deleteTask}
                    editTask={this.editTask}
                    isEditting={this.state.isEditting}
                />
            </div>
        )
    }
}

export default Project;
