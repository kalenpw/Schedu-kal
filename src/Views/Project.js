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
            taskEdits: [

            ],
            isEditting: true,
        };
    }

    componentDidMount() {
        this.resetTaskEdits();
    }

    resetTaskEdits = () => {
        const tasks = this.state.project.tasks.slice();
        const taskEdits = JSON.parse(JSON.stringify(tasks));
        this.setState({ taskEdits: taskEdits });
    }

    taskInList = (id) => {
        const tasks = this.state.taskEdits;
        const matchingId = tasks.filter((task) => {
            return id === task.id;
        });
        return matchingId.length > 0;
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
        const isEditting = this.state.isEditting;

        if (isEditting) {
            this.saveEdits();
        }
        this.setState({ isEditting: !this.state.isEditting });
    }

    addTask = (task) => {
        const taskEdits = this.state.taskEdits;
        taskEdits.push(task);
        this.setState({taskEdits: taskEdits});
    }

    cancelChanges = () => {
        this.resetTaskEdits();
        this.setState({ isEditting: false });
    }

    saveEdits = () => {
        const project = this.state.project;
        project.tasks = this.state.taskEdits;
        this.setState({project: project});
        this.setState({ isEditting: false });
    }

    render() {
        const name = this.state.project.name;
        const taskEdits = this.state.taskEdits;
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
                    {
                        isEditting &&
                        <button className="button is-danger is-pulled-right"
                            onClick={this.cancelChanges}
                        >
                            <i className="fas fa-window-close"></i>
                        </button>
                    }
                </h1>
                <TaskList tasks={taskEdits}
                    addTask={this.addTask}
                    deleteTask={this.deleteTask}
                    isEditting={this.state.isEditting}
                />
            </div>
        )
    }
}

export default Project;
