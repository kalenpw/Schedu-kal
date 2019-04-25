import React from 'react';
import ProjectPreview from "Components/Project/ProjectPreview.js";
import ProjectApi from "Api/projects.js";
import { getProjects } from "Utils/Redux/Actions/project-actions.js";
import { GET_PROJECTS_URL } from "Api/urls.js";
import { connect } from 'react-redux';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
        }
    }

    componentWillMount() {
        this.props.dispatch(getProjects(GET_PROJECTS_URL));
        ProjectApi.getProjects()
            .then(response => {
                this.setState({ projects: response });
            });
    }

    updateProjectDateDue(id) {
        console.log("Updating project", id);
    }

    handleDragStart = (event, projectId) =>{
        event.dataTransfer.setData('projectId', projectId);
    }

    handleDragEnd = (event) =>{
        // console.log("Drag end");
    }

    handleDragOver = (event, project) => {
        event.preventDefault();
        // console.log(event.dataTransfer.getData('projectId'));
        // console.log(project);
    }

    handleDrop = (event, droppedId, status) =>{
        console.log(status);
        const projectId = Number(event.dataTransfer.getData('projectId'));
        const projectIndexes = this.state.projects.map((project) => {
            return project.id;
        });
        const movedIndex = projectIndexes.indexOf(projectId);
        const droppedIndex = projectIndexes.indexOf(Number(droppedId));
        const movedProject = this.state.projects[movedIndex];
        const droppedProject = this.state.projects[droppedIndex];

        const projects = this.state.projects;
        projects[movedIndex] = droppedProject;
        projects[droppedIndex] = movedProject;

        this.setState({projects: projects});
    }

    generateProjects() {
        let projectEles = this.props.projects.map((project) => {
        // let projectEles = this.state.projects.map((project) => {
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
        if (!this.state.projects) {
            return <React.Fragment/>
        }
        return (
            <React.Fragment>
                {this.generateProjects()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.projects.projects,
        isLoading: state.projects.isLoading,
        error: state.projects.error,
    }
}

// export default ProjectList;
export default connect(mapStateToProps)(ProjectList);