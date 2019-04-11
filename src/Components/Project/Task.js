import React from 'react';
import styled, { css } from 'styled-components';

const Delete = styled.span`
    margin-top: 2px;
    margin-right: 5px;
`;

class Task extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    handleClick = (event) => {
        this.props.deleteTask(this.props.id);
        // console.log(event);
    }

    render() {
        return (
            <div>
                <p className="">
                    <Delete className="delete"
                        onClick={(event) => this.handleClick(event)}
                    >
                    </Delete>
                    {this.props.task.description}
                </p>
            </div>
        )
    }
}

export default Task;