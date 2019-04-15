import React from 'react';
import styled from 'styled-components';

import "./Forms/CreateProject.js";
import CreateProject from './Forms/CreateProject.js';

const CardWrapper = styled.div`
    background-color: #222;
    border-radius: 5px;
    color: #ddd;
    cursor: pointer;
    
    .card-header-title{
        color: #ddd;
    }
`

class NewProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    createProject = () => {
        console.log("Creating project");
        this.setState({ isModalVisible: true });
    }

    closeModal = () => {
        this.setState({ isModalVisible: false });
    }

    render() {
        return (
            <React.Fragment>
                <CardWrapper
                    className="card"
                    onClick={this.createProject}
                >
                    <header className="card-header">
                        <p className="card-header-title">
                            New Project
                        </p>
                    </header>
                    <div className="card-content has-text-centered is-size-1">
                        <i className="fas fa-plus"></i>
                    </div>
                </CardWrapper>
                {
                    this.state.isModalVisible &&
                    <div className="modal is-active">
                        <div className="modal-background"
                            onClick={this.closeModal}
                        ></div>
                        <div className="modal-content">
                            <CreateProject />
                        </div>
                        <button
                            className="modal-close is-large"
                            aria-label="close"
                            onClick={this.closeModal}
                        ></button>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default NewProject;

