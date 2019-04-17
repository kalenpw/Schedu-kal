import React from 'react';

import "./Forms/CreateProject.js";
import CreateProject from './Forms/CreateProject.js';

class NewProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    createProject = () => {
        document.title = "New Project";
        this.setState({ isModalVisible: true });
    }

    closeModal = () => {
        document.title = "Schedu-kal";
        this.setState({ isModalVisible: false });
    }

    render() {
        return (
            <React.Fragment>
                <button 
                    className="button is-primary is-outlined is-fullwidth"
                    onClick={this.createProject}
                >
                    New Project
                </button>
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

