import React from 'react';

class ProjectView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <p>Viewing {this.props.project.name}</p>
        )
    }
}