import React from 'react';
import { ThemeContext } from "../Utils/theme-context";

class ThemeToggler extends React.Component {
    generateButton = (theme, toggleTheme) => {
        const fontAwesomeIcon = (theme.name === "dark") ? 'far fa-sun' : 'far fa-moon';
        return (
            <span
                className="is-primary is-outlined"
                onClick={toggleTheme}
            >
                <i className={fontAwesomeIcon}></i>
            </span>
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