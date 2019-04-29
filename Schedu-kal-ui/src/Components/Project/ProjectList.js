import React from 'react';
import ProjectPreview from "Components/Project/ProjectPreview.js";
import ProjectApi from "Api/projects.js";
import { getProjects, updateProjectOrder } from "Utils/Redux/Actions/project-actions.js";
import { connect } from 'react-redux';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
        }
    }

    componentWillMount() {
        this.props.dispatch(getProjects());
    }

    updateProjectDateDue(id) {
        console.log("Updating project", id);
    }

    handleDragStart = (event, projectId) => {
        event.dataTransfer.setData('projectId', projectId);
    }

    handleDragEnd = (event) => {
        // console.log("Drag end");
    }

    handleDragOver = (event, project) => {
        event.preventDefault();
        // console.log(event.dataTransfer.getData('projectId'));
        // console.log(project);
    }

    handleDrop = (event, droppedId, status) => {
        console.log(status);
        const projectId = Number(event.dataTransfer.getData('projectId'));
        const projectIndexes = this.props.projects.map((project) => {
            return project.id;
        });
        const movedIndex = projectIndexes.indexOf(projectId);
        const droppedIndex = projectIndexes.indexOf(Number(droppedId));
        const movedProject = this.props.projects[movedIndex];
        const droppedProject = this.props.projects[droppedIndex];
        this.props.dispatch(updateProjectOrder(movedProject.id, movedProject.order, droppedProject.order));
        console.log(movedProject);
        console.log(droppedProject);
    }

    generateProjects() {
        let projectEles = this.props.projects.map((project) => {
            return (
                <div key={project.id}
                    className="column is-half-tablet is-one-quarter-desktop"
                    onDragOver={(event) => this.handleDragOver(event, project)}
                    onDrop={(event) => this.handleDrop(event, project.id, "complete")}
                >
                    <ProjectPreview
                        updateProjectDateDue={this.updateProjectDateDue}
                        project={project}
                        handleDragStart={this.handleDragStart}
                        handleDragEnd={this.handleDragEnd}
                    />
                </div>
            )
        })
        return projectEles;
    }

    render() {
        if (!this.props.projects) {
            return <React.Fragment />
        }
        return (
            <React.Fragment>
                {this.generateProjects()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        isLoading: state.projects.isLoading,
        error: state.projects.error,
    }
}

export default connect(mapStateToProps)(ProjectList);