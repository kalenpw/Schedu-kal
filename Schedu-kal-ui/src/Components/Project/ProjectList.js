import React from 'react';
import ProjectPreview from "./ProjectPreview.js";
import ProjectApi from "../../Api/projects.js";

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
        }

    }

    componentWillMount() {
        ProjectApi.getProjects()
            .then(response => {
                this.setState({ projects: response });
            });
    }

    updateProjectDateDue(id) {
        console.log("Updating project", id);
    }

    generateProjects() {
        let projectEles = this.state.projects.map((project) => {
            return (
                <div key={project.id} className="column is-half-tablet is-one-quarter-desktop">
                    <ProjectPreview
                        updateProjectDateDue={this.updateProjectDateDue}
                        project={project}
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

export default ProjectList;