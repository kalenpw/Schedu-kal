import React from 'react';
import { Link } from "react-router-dom";
import ThemeToggler from "Components/ThemeToggler.js";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <ThemeToggler classes="navbar-item" />
                </div>
            </nav>
        )
    }
}

export default Navbar;