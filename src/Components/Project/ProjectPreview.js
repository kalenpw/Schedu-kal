import React from 'react';
import Project from '../../Views/Project';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: #222;
`

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const project = this.props.project;
        return (
            <Link to={"/projects/" + project.id}>
                <CardWrapper className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {project.name}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                        </div>
                    </div>
                </CardWrapper>
            </Link>
        )
    }
}

export default ProjectPreview;