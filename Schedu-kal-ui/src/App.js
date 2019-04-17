import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { ThemeContext, themes } from "./Utils/theme-context.js";
import MainContent from "./Components/MainContent.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        return (
            <Router>
                <ThemeContext.Provider value={this.state}>
                    <MainContent/>
                </ThemeContext.Provider>
            </Router>
        );
    }
}

App.contextType = ThemeContext;

export default App;
