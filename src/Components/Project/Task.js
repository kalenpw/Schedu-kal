import React from 'react';
import styled from 'styled-components';

const Delete = styled.span`
    margin-right: 5px;
`;

const EditWrapper = styled.li`
    display: inline-flex;
`

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        this.props.deleteTask(this.props.id);
    }

    handleEditTask = (event) => {
        const eventType = event.type;
        const keyUp = "keyup";
        const blur = "blur";
        if (eventType === keyUp) {
            if (event.key === "Enter" && event.target.value.trim()) {
                this.props.editTask(this.props.id, event.target.value);
            }
        }
        else if (eventType === blur) {
            this.props.editTask(this.props.id, event.target.value);
        }
    }

    handleChange = (event) => {
        this.props.task.description = event.target.value;
        this.forceUpdate();
    }

    generateTask() {
        const isEditting = this.props.isEditting;
        if (isEditting) {
            return (
                <EditWrapper className="field">
                    <Delete className="delete is-large"
                        onClick={(event) => this.handleClick(event)}
                    />
                    <div className="control">
                        <input className="input is-primary"
                            onChange={(event) => this.handleChange(event)}
                            value={this.props.task.description}
                            onBlur={(event) => this.handleEditTask(event)}
                            onKeyUp={(event) => this.handleEditTask(event)}
                        />
                    </div>
                </EditWrapper>
            )
        }
        else {
            return (
                <p className="">
                    {this.props.task.description}
                </p>
            )
        }
    }

    render() {
        const isEditting = this.props.isEditting;
        return (
            <div>
                {this.generateTask()}
            </div>
        )
    }
}

export default Task;


{/* <EditWrapper className="field">
                </EditWrapper> */}