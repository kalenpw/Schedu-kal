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

    handleChange = (event) => {
        this.props.task.description = event.target.value;
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