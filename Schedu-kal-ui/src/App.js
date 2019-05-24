import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext, themes } from "Utils/theme-context.js";
import MainContent from "Components/MainContent.js";
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from 'Utils/Redux/Reducers/root.js';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
    constructor(props) {
        super(props);

        const theme = localStorage.getItem("theme");
        if (theme === "light") {
            this.state = {
                theme: themes.light,
                toggleTheme: this.toggleTheme,
            };
        }
        else {
            this.state = {
                theme: themes.dark,
                toggleTheme: this.toggleTheme,
            };
        }
    }

    toggleTheme = (isColorUpdate) => {
        if(isColorUpdate){
            this.setState({theme: themes[this.state.theme.name]})
        }
        else{
            let newTheme = null;
            if(this.state.theme.name === "light"){
                newTheme = themes.dark;
            }
            else if(this.state.theme.name === "dark"){
                newTheme = themes.custom;
            }
            else{
                newTheme = themes.light;
            }
            this.setState({theme: newTheme});
        }
        // this.setState(state => ({
        //     theme:
        //         state.theme === themes.dark
        //             ? themes.light
        //             : themes.dark,
        // }), () => {
        //     localStorage.setItem("theme", this.state.theme.name);
        // });
    };

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <ThemeContext.Provider value={this.state}>
                        <MainContent />
                    </ThemeContext.Provider>
                </Router>
            </Provider>
        );
    }
}

App.contextType = ThemeContext;

export default App;
