import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from "Utils/theme-context.js";

const Hero = styled.div`
    background-color: ${props => props.theme.primaryColor} !important;
    
`;

class ThemedHero extends React.Component{
    render(){
        return(
            <Hero theme={this.context.theme} className="hero is-fullheight">
                {this.props.children}
            </Hero>
        )
    }
}

ThemedHero.contextType = ThemeContext;

export default ThemedHero;