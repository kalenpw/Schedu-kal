import React from 'react';
import ProjectList from "../Components/Project/ProjectList.js";
import NewProject from "../Components/Project/NewProject.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='hero-head'>
                <h1 className="title">Projects</h1>
                <div className="columns">
                    <ProjectList></ProjectList>
                    <NewProject />
                </div>
            </div>
        )
    }
}

export default Home;