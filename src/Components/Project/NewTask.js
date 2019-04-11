import React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
    background-color: #444;
    color: #ddd;
    border: 2px solid red;
    &::placeholder {
        color: rgba(150, 150, 150, .8);
    }
`

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskText = React.createRef();
    }

    handleKeyUp = (event) => {
        if (event.key == "Enter") {
            const task = {
                task: event.target.value,
                id: Math.random(),
            }
            this.props.addItem(task);
            this.newTaskText.current.value = '';
        }
    }

    render() {
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <Input
                        className="input is-primary"
                        placeholder="New task"
                        ref={this.newTaskText}
                        onKeyUp={(event) => this.handleKeyUp(event)}
                    />
                    <span className="icon is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default NewTask;