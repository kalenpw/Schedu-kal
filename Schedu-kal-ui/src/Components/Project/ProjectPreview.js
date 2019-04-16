import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectApi from "../../Api/projects.js";
import ProjectDate from "./ProjectDate.js";
import DatePicker from "react-datepicker";
import { localDateFromYMD } from "../../Utils/date-utils.js";
import "react-datepicker/dist/react-datepicker.css";

const CardWrapper = styled.div`
    background-color: #222;
    border-radius: 5px;
    color: #ddd;
    display: flex;
    flex-direction: column;
    height: 100%;    
    .card-header-title{
        color: #ddd;
    }
    .card-footer{
        margin-top: auto;
    }
`

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
            <CardWrapper className="card">
                <header className="card-header">
                    <p className="card-header-title">
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

export default ProjectPreview;