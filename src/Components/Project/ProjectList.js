import React from 'react';

import ProjectPreview from "./ProjectPreview.js";

import ProjectApi from "../../Api/projects";

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
                console.log(response);
                this.setState({projects: response});
            });
    }

    updateProjectDateDue(id) {
        console.log("Updating project", id);
    }

    generateProjects() {
        let projectEles = this.state.projects.map((project) => {
            return (
                <div key={project.id} className="column">
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
        if(!this.state.projects){
            return <div></div>
        }
        return (
            <div>
                <h1 className="title">Projects</h1>
                <div className="columns">
                    {this.generateProjects()}
                </div>
            </div>
        )
    }
}

export default ProjectList;