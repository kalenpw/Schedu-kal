import React from 'react';

import TaskList from "../Components/Project/TaskList";

import ProjectApi from "../Api/projects";
import TaskApi from "../Api/tasks";

import update from 'immutability-helper';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            projectId: 0,
            currentTasks: [

            ],
            edittedTasks: [

            ],
            newTasks: [

            ],
            deletedTasks: [

            ],
            isEditting: true,
        };
    }

    componentWillMount() {
        this.updateProjectFromDatabase();
    }

    updateProjectFromDatabase() {
        const id = this.props.match.params.id;
        ProjectApi.getProjectById(id)
            .then(response => {
                this.setState({ projectId: response.id });
                this.setState({ currentTasks: response.tasks });
                this.setState({ project: response });
            });
    }

    deleteTask = (id) => {
        if (this.taskInList(id, this.state.newTasks)) {
            const newTasks = this.state.newTasks;
            const updatedTasks = newTasks.filter((task) => {
                return id !== task.id;
            });
            this.setState({ newTasks: updatedTasks });
        }
        else {
            const deletedTasks = this.state.deletedTasks;
            const updatedTasks = update(deletedTasks, { $push: [id] });
            this.setState({ deletedTasks: updatedTasks });
        }

        const currentTasks = this.state.currentTasks;
        let updatedCurrentTasks = update(currentTasks, { $push: [] });
        updatedCurrentTasks = updatedCurrentTasks.filter((task) => {
            return task.id !== id;
        })
        this.setState({ currentTasks: updatedCurrentTasks });
        this.forceUpdate();
    }

    addTask = (task) => {
        const newTasks = this.state.newTasks;
        const updatedTasks = update(newTasks, { $push: [task] });
        const currentTasks = update(this.state.currentTasks, { $push: [task] });
        this.setState({ currentTasks: currentTasks });
        this.setState({ newTasks: updatedTasks });
    }

    editTask = (edittedTask) => {
        const taskId = edittedTask.id;
        const edittedTasks = this.state.edittedTasks;
        if (edittedTask.isNew) {
            const newTasks = this.state.newTasks;
            newTasks.map((task) => {
                if (taskId === task.id) {
                    task.description = edittedTask.description;
                }
                return task;
            });
        }
        else if (this.taskInList(taskId, edittedTasks)) {
            edittedTasks.map((task) => {
                if (taskId === task.id) {
                    task.description = edittedTask.description;
                }
                return task;
            });
        }
        else {
            edittedTasks.push(edittedTask);
            this.setState({ edittedTasks: edittedTasks });
        }
    }

    saveEdits = () => {
        const newTasks = this.state.newTasks;
        for (let i = 0; i < newTasks.length; i++) {
            const task = newTasks[i];
            TaskApi.createTask(task.projectId, task.description)
                .then(response => {
                    if (i === newTasks.length - 1) {
                        this.updateProjectFromDatabase();
                    }
                })
                .catch(error => console.log(error)
                );
        }

        const edittedTasks = this.state.edittedTasks;
        for (let i = 0; i < edittedTasks.length; i++) {
            const task = edittedTasks[i];
            TaskApi.updateTask(task.id, task.description)
                .then(response => {
                    if (i === edittedTasks.length - 1) {
                        this.updateProjectFromDatabase();
                    }
                })
                .catch(error => console.log(error));
        }

        const deletedTasks = this.state.deletedTasks;
        for (let i = 0; i < deletedTasks.length; i++) {
            const taskId = deletedTasks[i];
            TaskApi.deleteTask(taskId)
                .then(response => {
                    if (i === newTasks.length - 1) {
                        this.updateProjectFromDatabase();
                    }
                })
                .catch(error => console.log(error));
        }
    }

    taskInList = (id, list) => {
        const matchingId = list.slice().filter((task) => {
            return id === task.id;
        });
        return matchingId.length > 0;
    }

    toggleEdit = () => {
        const isEditting = this.state.isEditting;
        if (isEditting) {
            this.saveEdits();
        }
        this.setState({ isEditting: !this.state.isEditting });
        this.setState({ newTasks: [] });
        this.setState({ edittedTasks: [] });
        this.setState({ deletedTasks: [] });
        this.setState({ isEditting: !isEditting });
    }

    cancelChanges = () => {
        this.updateProjectFromDatabase();
        this.setState({ isEditting: false });
    }

    render() {
        if (!this.state.project) {
            return <div></div>
        }
        const name = this.state.project.name;
        const tasks = this.state.currentTasks;
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
                <TaskList tasks={tasks}
                    projectId={this.state.project.id}
                    addTask={this.addTask}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    isEditting={this.state.isEditting}
                />
            </div>
        )
    }
}

export default Project;
