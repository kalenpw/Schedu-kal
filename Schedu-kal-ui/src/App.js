import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./Views/Home.js";
import Project from "./Views/Project";

function Error(props) {
    return (
        <h1>does not exist</h1>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
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
