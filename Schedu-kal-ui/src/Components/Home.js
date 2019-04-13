import React from 'react';
import ProjectList from "./Project/ProjectList";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProjectList></ProjectList>
        )
    }
}

export default Home;