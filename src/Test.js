import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function About(){
    return <h1>about</h1>
}

function Index(){
    return <h1>index</h1>
}

function Test(){
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Route path="/" exact component={Index}/>
            <Route path="/about" component={About}/>
        </Router>
    )
}

export default Test;