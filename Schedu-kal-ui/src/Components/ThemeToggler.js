import React from 'react';
import { ThemeContext } from "Utils/theme-context";

class ThemeToggler extends React.Component {
    generateButton = (theme, toggleTheme) => {
        const fontAwesomeIcon = (theme.name === "dark") ? 'far fa-sun' : 'far fa-moon';
        const classes = this.props.classes;
        const styles = {
            background: "none",
            border: "none"
        }
        return (
            <a
                className={classes}
                onClick={toggleTheme}
                style={styles}
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