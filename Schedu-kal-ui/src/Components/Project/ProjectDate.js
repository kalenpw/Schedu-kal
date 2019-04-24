import React from 'react';
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";
import { getDaysDifference, formatDate } from "Utils/date-utils.js";
import {ThemeContext} from "Utils/theme-context.js";

const DateDisplay = styled.p`
    padding-top: 5px;
    padding-right: 10px;
    cursor: pointer;
    font-size: .81rem;
    color: ${props => props.theme.fontColor}
`

class ProjectDate extends React.Component {
    getRemainingDateInfo(date) {
        const dateDue = date;
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
        const date = this.props.date;
        const dateInfo = this.getRemainingDateInfo(date);
        return (
            <React.Fragment>
                <DateDisplay onClick={this.props.onClick}
                    className="example-custom-input"
                    theme={this.context.theme}
                >
                    {dateInfo.formattedDate}
                    <br/>
                    {dateInfo.daysRemaining}
                </DateDisplay>
            </React.Fragment>
        )
    }
}
ProjectDate.contextType = ThemeContext;
export default ProjectDate;