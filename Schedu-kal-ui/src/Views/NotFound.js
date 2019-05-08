import React from 'react';

import ThemedButton from "Components/Forms/ThemedButton.js";

function NotFound() {
    return (
        <div className="has-text-centered">
            <h1 className="title">404</h1>
            <h2 className="title">Not found</h2>
            <ThemedButton
                buttonText={"Home"} 
                handleClick={() => window.location = "/"}
            />
        </div>
    );
}

export default NotFound;