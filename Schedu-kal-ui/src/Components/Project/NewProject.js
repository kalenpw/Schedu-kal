import React from 'react';
import styled from 'styled-components';
import CreateProject from "Components/Forms/CreateProject.js";
import { ThemeContext } from "Utils/theme-context.js";
import ThemedCard from "Components/UI/ThemedCard.js";

const ThemedIcon = styled.i`
    color: ${props => props.theme.fontColor}
`

class NewProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true
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
        const isDark = this.context.theme.name === "dark";
        const iconClass = isDark ? 'fas fa-plus-circle has-text-grey-lighter' : 'fas fa-plus-circle has-text-grey-darker';
        return (
            <React.Fragment>
                <div className="column"
                    onClick={this.createProject}
                >
                    <ThemedCard className="card">
                        <header className="card-header">
                            <div className="card-header-title">
                                New Project
                            </div>
                        </header>
                        <div className="card-content section has-text-centered is-size-1">
                            <ThemedIcon className={iconClass}/>
                        </div>
                    </ThemedCard>

                </div>
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
NewProject.contextType = ThemeContext;
export default NewProject;

