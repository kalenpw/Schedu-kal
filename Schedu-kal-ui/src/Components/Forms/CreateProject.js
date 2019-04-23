import React from 'react';
import DatePicker from "react-datepicker";
import styled from "styled-components";
import ProjectApi from "Api/projects.js";
import { ThemeContext } from "Utils/theme-context.js";
import ThemedInput from "Components/Forms/ThemedInput.js";

const ColoredBox = styled.div`
    background-color: ${props => props.theme.formBackground} !important;
`;

class DateInput extends React.Component {
    handleClick = (event) => {
    }

    render() {
        let isDark = (this.context.theme.name === "dark");
        let buttonTheme = isDark ? 'is-light' : 'is-dark';
        let buttonClasses = buttonTheme + " button is-outlined";
        return (
            <p
                className={buttonClasses}
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
                        <div className="control">
                            <ThemedInput
                                inputClasses="input is-primary" 
                                handleChange={this.handleTitleChange}
                                placeholder="Title"
                                handleKeyUp={null}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <ThemedInput
                                inputClasses="input is-primary" 
                                handleChange={this.handleCategoryChange}
                                placeholder="Category"
                                handleKeyUp={null}
                            />
                        </div>
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
DateInput.contextType = ThemeContext;

export default CreateProject;