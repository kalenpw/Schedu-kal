import React from 'react';
import styled from 'styled-components';
import { } from 'bulma-checkradio';

const Delete = styled.span`
    margin-right: 5px;
`;

const EditWrapper = styled.li`
    display: inline-flex;
`

class Task extends React.Component {
    handleClick = (event) => {
        this.props.deleteTask(this.props.task.id);
    }

    handleChange = (event) => {
        this.props.task.description = event.target.value;
        this.props.editTask(this.props.task);
    }

    handleCompleteTaskClick = () => {
        this.props.completeTask(this.props.task);
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
                            defaultValue={this.props.task.description}
                        />
                    </div>
                </EditWrapper>
            )
        }
        else {
            const isCompleted = this.props.task.completed;
            const completedClass = isCompleted ? "checked" : "";
            const strikeThrough = {
                textDecoration: (isCompleted ? 'line-through' : '')
            };
            return (
                <div className="field"
                    onClick={(event) => this.handleCompleteTaskClick(event)} 
                >
                    <input className="is-checkradio" type="checkbox" checked={completedClass} 
                        onChange={() => this.handleCompleteTaskClick()} 
                    />
                    <label style={strikeThrough}>{this.props.task.description}</label>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.generateTask()}
            </div>
        )
    }
}

export default Task;
