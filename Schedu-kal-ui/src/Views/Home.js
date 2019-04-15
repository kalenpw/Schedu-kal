import React from 'react';
import ProjectList from "../Components/Project/ProjectList.js";
import NewProject from "../Components/Project/NewProject.js";

class Home extends React.Component {
    render() {
        return (
            <div className='hero-head'>
                <h1 className="title">Projects</h1>
                <div className="columns">
                    <NewProject className="column" />
                    <ProjectList></ProjectList>
                </div>
            </div>
        )
    }
}

export default Home;