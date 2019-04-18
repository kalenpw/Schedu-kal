import React from 'react';
import { ThemeContext } from "../Utils/theme-context";

class ThemeToggler extends React.Component {
    generateButton = (theme, toggleTheme) => {
        const fontAwesomeIcon = (theme.name === "dark") ? 'far fa-sun' : 'far fa-moon';
        const classes = this.props.classes;
        return (
            <a
                className={classes}
                onClick={toggleTheme}
            >
                <i className={fontAwesomeIcon}></i>
            </a>
        )
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    this.generateButton(theme, toggleTheme)
                )}
            </ThemeContext.Consumer>
        );

    }
}

export default ThemeToggler;