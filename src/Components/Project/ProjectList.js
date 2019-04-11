import React from 'react';
import { Link } from "react-router-dom";

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
                <React.Fragment key={project.id}>
                    <li>
                        <Link
                            to={"/projects/" + project.id}
                        >
                            {project.name}
                        </Link>
                    </li>
                </React.Fragment>
            )
        })
        return projectEles;
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                {this.generateProjects()}
            </div>
        )
    }
}

export default ProjectList;