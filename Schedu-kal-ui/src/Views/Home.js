import React from 'react';
import ProjectList from "Components/Project/ProjectList.js";
import NewProject from "Components/Project/NewProject.js";
import ThemedText from "Components/UI/ThemedText.js";

class Home extends React.Component {
    componentWillMount() {
        document.title = "Schedu-kal";
    }

    render() {
        return (
            <div className='hero-head'>
                <h1 className="title">Projects</h1>
                <div className="columns is-multiline">
                    <NewProject/>
                    <ProjectList></ProjectList>
                </div>
            </div>
        )
    }
}

export default Home;