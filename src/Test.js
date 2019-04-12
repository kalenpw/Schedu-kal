import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class ExampleCustomInput extends React.Component {
    render() {
        return (
            <button
                className="example-custom-input"
                onClick={this.props.onClick}>
                value
            </button>
        )
    }

}

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null
        }
    }

    handleChange = () => {
        console.log("Changed");
    }

    render() {
        return (
            <React.Fragment>
                <DatePicker
                    customInput={<ExampleCustomInput />}
                    selected={this.state.startDate}
                    onChange={this.handleChange} />
            </React.Fragment>
        )

    }
}

export default Test;