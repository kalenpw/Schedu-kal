import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from "../../../Utils/theme-context.js";

const Input = styled.input`
    background-color: ${props => props.theme.formBackground}
    color: ${props => props.theme.fontColor}
    &::placeholder {
        color: rgba(150, 150, 150, .8);
    }
`

class ThemedInput extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    handleKeyUp = (event) => {
        this.props.handleKeyUp(event);
    }

    render() {
        const inputClasses = this.props.inputClasses;
        const placeholder = this.props.placeholder;
        const icon = this.props.icon;
        const controlClasses = (icon) ? "control has-icons-left" : "control";
        return (
            <div className="field">
                <div className={controlClasses}>
                    <Input
                        theme={this.context.theme}
                        className={inputClasses}
                        placeholder={placeholder}
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        ref={this.ref}
                        onKeyUp={(event) => this.handleKeyUp(event)}
                    />
                    {
                        icon &&
                        <span className="icon is-left">
                            <i className={icon}></i>
                        </span>
                    }
                </div>
            </div>
        )
    }
}
ThemedInput.contextType = ThemeContext;

export default ThemedInput;