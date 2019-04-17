import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectApi from "../../Api/projects.js";
import ProjectDate from "./ProjectDate.js";
import DatePicker from "react-datepicker";
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
`;

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            showDate: false,
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

    render() {
        const project = this.props.project;
        const startDate = localDateFromYMD(project.dateDue);
        return (
            <CardWrapper theme={this.context.theme} className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        <ProjectCategoryIcon>
                            <i className="fas fa-school"></i>
                        </ProjectCategoryIcon>
                        {project.name}
                    </p>
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