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
                    dateDue: new Date('2019-04-15'),
                    tasks: [
                        {
                            dueDate: new Date(),
                            description: 'React Router',
                            id: 1,
                        },
                        {
                            dueDate: new Date(),
                            description: 'React native',
                            id: 2
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Get a job",
                    dateDue: new Date('2019-04-13'),
                    tasks: [
                        {
                            description: 'Apply places',
                            id: 1,
                        },
                        {
                            description: 'Accept offer',
                            id: 2
                        },
                    ]
                }
            ]
        }
    }

    generateProjects() {
        let projectEles = this.state.projects.map((project) => {
            return (
                <div key={project.id} className="column">
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