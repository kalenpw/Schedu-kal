import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProjectDate from "./ProjectDate.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CardWrapper = styled.div`
    background-color: #222;
    border-radius: 5px;
    color: #ddd;
    
    .card-header-title{
        color: #ddd;
    }
`
const DateDue = styled.span`
    padding-right: 5px;
    padding-top: 2px;
    color: #777;
    font-size: .9rem;
    cursor: pointer;
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
        this.forceUpdate();
    }

    render() {
        const project = this.props.project;
        return (
            <CardWrapper className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {project.name}
                    </p>
                    <DatePicker
                        customInput={<ProjectDate date={project.dateDue} />}
                        selected={this.state.startDate}
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