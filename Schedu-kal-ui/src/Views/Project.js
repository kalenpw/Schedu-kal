import React from 'react';

import TaskList from "../Components/Project/TaskList";

import ProjectApi from "../Api/projects";
import TaskApi from "../Api/tasks";

import { deepCopyList } from "../Utils/object-utils";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
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
                this.setState({ project: response }, () => {
                    this.resetTaskEdits();
                    console.log(this.state.project);
                });
            })

    }

    componentDidMount() {
        if (this.state.project) {
            this.resetTaskEdits();
        }
    }

    deleteTask = (id) => {
        const taskEdits = this.state.taskEdits;
        const newTasks = taskEdits.filter((task) => {
            return task.id !== id;
        });
        this.setState({ taskEdits: newTasks });
    }

    addTask = (task) => {
        const taskEdits = this.state.taskEdits;
        taskEdits.push(task);
        this.setState({ taskEdits: taskEdits });
    }

    editTask = (edittedTask) => {
        const taskId = edittedTask.id;
        const edittedTasks = this.state.edittedTasks;
        if (this.taskInList(taskId, edittedTasks)) {
            const updatedTaks = edittedTasks.map((task) => {
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
    }

    taskInList = (id, list) => {
        console.log(list);
        const matchingId = list.slice().filter((task) => {
            console.log(task);
            return id === task.id;
        });
        return matchingId.length > 0;
    }
    resetTaskEdits = () => {
        const tasks = this.state.project.tasks.slice();
        const taskEdits = JSON.parse(JSON.stringify(tasks));
        this.setState({ taskEdits: taskEdits });
    }


    toggleEdit = () => {
        const isEditting = this.state.isEditting;

        if (isEditting) {
            this.saveEdits();
        }
        this.setState({ isEditting: !this.state.isEditting });
    }


    cancelChanges = () => {
        this.resetTaskEdits();
        this.setState({ isEditting: false });
    }


    render() {
        if (!this.state.project) {
            return <div></div>
        }
        const name = this.state.project.name;
        // const taskEdits = this.state.taskEdits;
        const tasks = deepCopyList(this.state.project.tasks);
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
