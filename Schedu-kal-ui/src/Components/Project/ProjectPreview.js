import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectApi from "../../Api/projects.js";
import ProjectDate from "./ProjectDate.js";
import DatePicker from "react-datepicker";
import ThemedInput from "./Forms/ThemedInput.js";
import { getIconFromCategory } from "../../Utils/project-utils.js";
import { localDateFromYMD } from "../../Utils/date-utils.js";
import { ThemeContext } from "../../Utils/theme-context.js";
import "react-datepicker/dist/react-datepicker.css";

const CardWrapper = styled.div`
    background-color: ${props => props.theme.cardBackground}
    border-radius: 5px;
    color: #ddd;
    display: flex;
    flex-direction: column;
    height: 100%;    
    .card-header-title{
        color: ${props => props.theme.fontColor}
    }
    .card-footer{
        margin-top: auto;
        color: ${props => props.theme.fontColor}
    }

    li{
        color: ${props => props.theme.fontColor}
    }
`;

const ProjectCategoryIcon = styled.span`
    padding-right: 10px;
    cursor: pointer;
`;

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            showDate: false,
            isEditting: false
        }
    }

    generateTasks() {
        const tasks = this.props.project.tasks;
        const maxPreviewAmount = 5;
        const tasksEle = tasks.map((task) => {
            return (
                <li key={task.id}>
                    {task.description}
                </li>
            )
        });
        return tasksEle.slice(0, maxPreviewAmount);
    }

    handleDateChange = (event) => {
        this.props.project.dateDue = event;
        ProjectApi.updateProjectDateDue(this.props.project.id, event.getTime())
            .then(response => console.log(response))
            .catch(error => console.log(error));
        this.forceUpdate();
    }

    handleKeyUp = (event) => {
        if (event.key === "Enter") {
            ProjectApi.updateName(this.props.project.id, this.props.project.name)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }
    }

    handleNameChange = (event) => {
        this.props.project.name = event.target.value;
        this.forceUpdate();
    }

    updateCategory = (event) => {
        event.preventDefault();
        console.log(console.log(this.props.project.category));
    }

    editTitle = (event) => {
        const isEditting = this.state.isEditting;
        if (isEditting) {

        }
        else {
            this.setState({ isEditting: !this.state.isEditting });
        }
    }

    generateTitleDisplay() {
        const isEditting = this.state.isEditting;
        const project = this.props.project;
        const baseClasses = "input is-primary is-small is-size-";
        const allClasses = isEditting ? baseClasses : 'is-static ' + baseClasses;
        return (
            <React.Fragment>
                <ThemedInput
                    inputClasses="input is-primary is-small"
                    placeholder="placeholder"
                    value={project.name}
                    handleChange={this.handleNameChange}
                    handleKeyUp={this.handleKeyUp}
                />
            </React.Fragment>
        )
    }

    render() {
        const project = this.props.project;
        const startDate = localDateFromYMD(project.dateDue);
        const categoryIcon = getIconFromCategory(project.category);
        return (
            <CardWrapper theme={this.context.theme} className="card">
                <header className="card-header">
                    <div className="card-header-title">
                        <ProjectCategoryIcon
                            onClick={this.updateCategory}
                        >
                            <i className={categoryIcon}></i>
                        </ProjectCategoryIcon>
                        <span
                            onClick={this.editTitle}
                        >
                            {this.generateTitleDisplay()}
                        </span>
                    </div>
                    <DatePicker
                        customInput={<ProjectDate date={project.dateDue} />}
                        selected={startDate}
                        onChange={this.handleDateChange}
                        popperPlacement="right-start"
                    />

                </header>
                <div className="card-content">
                    <ul>
                        {this.generateTasks()}
                    </ul>
                </div>
                <footer className="card-footer">
                    <Link className="card-footer-item" to={"/projects/" + project.id}>
                        Details
                    </Link>
                </footer>
            </CardWrapper>
        )
    }
}

ProjectPreview.contextType = ThemeContext;

export default ProjectPreview;