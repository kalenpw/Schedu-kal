import React from 'react';
import Project from '../../Views/Project';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {getDaysDifference, formatDate} from "../../Utils/date-utils";

const CardWrapper = styled.div`
    background-color: #222;
    border-radius: 5px;
`

const CardTitle = styled.p`
    color: #ddd;
`
const CardContent = styled.div`
    color: #ddd;
`
const DateDue = styled.span`
    padding-right: 2px;
    padding-top: 2px;
    color: #777;
    font-size: .9rem;
`

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    generateTasks() {
        const tasks = this.props.project.tasks;
        const maxPreviewAmount = 5;
        console.log(tasks);
        const tasksEle = tasks.map((task) => {
            return (
                <li key={task.id}>
                    {task.description}
                </li>
            )
        });
        return tasksEle.slice(0, maxPreviewAmount);
    }

    getRemainingDateInfo() {
        const project = this.props.project;
        const dateDue = project.dateDue;
        let formattedDate;
        let daysRemaining;
        if (dateDue) {
            let today = new Date();
            formattedDate = formatDate(dateDue);
            daysRemaining = getDaysDifference(dateDue, today);
        }
        return {
            formattedDate: formattedDate,
            daysRemaining: daysRemaining
        }
    }

    render() {
        const project = this.props.project;
        const dateInfo = this.getRemainingDateInfo();
        return (
            <Link to={"/projects/" + project.id}>
                <CardWrapper className="card">
                    <header className="card-header">
                        <CardTitle className="card-header-title">
                            {project.name}
                        </CardTitle>
                        <DateDue>
                            {dateInfo.formattedDate}
                            <br />
                            {dateInfo.daysRemaining}
                        </DateDue>
                    </header>
                    <CardContent className="card-content">
                        <ul>
                            {this.generateTasks()}
                        </ul>
                    </CardContent>
                </CardWrapper>
            </Link>
        )
    }
}

export default ProjectPreview;