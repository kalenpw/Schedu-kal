import React from 'react';
import { ThemeContext } from "Utils/theme-context.js";

class ThemedButton extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const isDark = (this.context.theme.name === "dark");
        const buttonTheme = isDark ? 'is-light' : 'is-dark';
        const buttonText = this.props.buttonText;
        const classes = buttonTheme + " " + this.props.buttonClasses;
        return (
            <button 
                className={"button " + classes}
                onClick={this.props.handleClick}
            >
                {buttonText}
            </button>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;