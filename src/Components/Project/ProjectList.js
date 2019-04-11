import React from 'react';
import { Link } from "react-router-dom";

import ProjectPreview from "./ProjectPreview.js";

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    name: "Learn react",
                    tasks: [
                        'React Router',
                        'React native'
                    ]
                },
                {
                    id: 2,
                    name: "Get a job",
                    tasks: [
                        'Apply places',
                        'Accept offer'
                    ]
                }
            ]
        }
    }

    generateProjects() {
        let projectEles = this.state.projects.map((project) => {
            return (
                <div className="column">
                    <ProjectPreview project={project}></ProjectPreview>
                </div>
            )
        })
        return projectEles;
    }

    render() {
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