import React from 'react';
import {  Route, Switch } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import { ThemeContext } from "../Utils/theme-context.js";

import Home from "../Views/Home.js";
import Project from "../Views/Project";

function Error(props) {
    return (
        <h1>does not exist</h1>
    )
}

class AppRoot extends React.Component {
    render() {
        const themeClasses = this.context.theme.heroClass + " hero is-fullheight";
        return (
            <div className={themeClasses}>
                <div className="hero-head">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <ThemeToggler />

                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </nav>
                    <div className="section">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Home}
                            />
                            <Route
                                path="/projects/:id"
                                component={Project}
                            />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

AppRoot.contextType = ThemeContext;

export default AppRoot;

