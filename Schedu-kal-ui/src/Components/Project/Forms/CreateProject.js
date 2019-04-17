import React from 'react';
import ProjectApi from "../../../Api/projects.js";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { ThemeContext } from "../../../Utils/theme-context.js";

const ColoredBox = styled.div`
    background-color: ${props => props.theme.background} !important;
`;

class DateInput extends React.Component {
    handleClick = (event) => {
    }

    render() {
        return (
            <p
                className="button is-light is-outlined"
                onClick={this.props.onClick}>
                {this.props.value}
            </p>
        )
    }
}

class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            title: '',
            category: '',
        }

    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
    }

    handleDateChange = (event) => {
        this.setState({ selectedDate: event })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        ProjectApi.createProject(this.state.title, this.state.category, this.state.selectedDate.getTime())
            .then(response => {
                const newProjectId = response.id;
                window.location.href = "/projects/" + newProjectId;
            });
    }

    render() {
        return (
            <ColoredBox theme={this.context.theme} className="box">
                <form>
                    <h2 className="title">New Project</h2>
                    <div className="field">
                        <p className="control">
                            <input className="input" type="text" placeholder="Title"
                                onChange={(event) => this.handleTitleChange(event)}
                                value={this.state.title}
                            />
                        </p>
                    </div>

                    <div className="field">
                        <p className="control">
                            <input className="input" type="text" placeholder="Category"
                                onChange={(event) => this.handleCategoryChange(event)}
                                value={this.state.category}
                            />
                        </p>
                    </div>

                    <div className="field">
                        <div className="control">
                            <DatePicker
                                withPortal
                                customInput={<DateInput />}
                                selected={this.state.selectedDate}
                                onChange={this.handleDateChange} />
                        </div>
                    </div>

                    <div className="field">
                        <p className="control">
                            <button className="button is-primary"
                                onClick={(event) => this.handleSubmit(event)}
                            >Create</button>
                        </p>
                    </div>
                </form>
            </ColoredBox>
        )
    }
}

CreateProject.contextType = ThemeContext;

export default CreateProject;