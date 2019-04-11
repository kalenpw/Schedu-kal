import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./Components/Home.js";
import Project from "./Components/Project/Project";

import Test from "./Test";

function Error(props) {
    console.log("hmmJK:");
    return (
        <h1>does not exist</h1>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <Link to="/">Home</Link>
                <div className="section hero is-dark is-fullheight">
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
            </Router>
        );
    }
}

export default App;
