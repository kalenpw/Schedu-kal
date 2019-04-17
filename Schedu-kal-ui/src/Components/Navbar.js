import React from 'react';
import ThemeToggler from "./ThemeToggler.js";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <span className="navbar-item">
                        <ThemeToggler />
                    </span>
                </div>
            </nav>
        )
    }
}

export default Navbar;