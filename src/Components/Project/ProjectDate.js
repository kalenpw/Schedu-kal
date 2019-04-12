import React from 'react';

import { getDaysDifference, formatDate } from "../../Utils/date-utils";
import "react-datepicker/dist/react-datepicker.css";


class ProjectDate extends React.Component {
    constructor(props) {
        super(props);
    }

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
                <p onClick={this.props.onClick}
                    className="example-custom-input"
                >
                    {dateInfo.formattedDate}
                    <br/>
                    {dateInfo.daysRemaining}
                </p>
            </React.Fragment>
        )
    }
}

export default ProjectDate;