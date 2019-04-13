import React from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            response: ''
        }
    }

    render(){
        axios.get('http://localhost:8000/api/projects')
            .then(response =>{
                console.log(response);
                // this.setState({response: response});
            })
            .catch(error =>{
                console.log(error);
            })
        return (
            <p>console</p>
        )
    }
}

export default Test;