import React from 'react';
import styled, { css } from 'styled-components';

const Delete = styled.span`
    margin-top: 2px;
    margin-right: 5px;
`;

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        return (
            <div>
                <p className="">
                    <Delete className="delete"
                        onClick={() => this.deleteItem(this.props.item.id)}
                    >
                    </Delete>

                    {this.props.item.task}
                </p>
            </div>
        )
    }
}

export default TodoItem;