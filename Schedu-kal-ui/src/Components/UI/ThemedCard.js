import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from "Utils/theme-context.js";

const CardWrapper = styled.div`
    background-color: ${props => props.theme.primaryVariant}
    border-radius: 5px;
    color: #ddd;
    display: flex;
    flex-direction: column;
    height: 100%;    
    * {
        color: ${props => props.theme.fontColor} !important;
    }
    .card-header-title{
    }
    .card-footer{
        margin-top: auto;
        color: ${props => props.theme.fontColor} !important;
    }
    .card-footer a {
        color: ${props => props.theme.fontColor};
    }
    li{
        color: ${props => props.theme.fontColor}
    }
`;

class ThemedCard extends React.Component{
    render(){
        return (
            <CardWrapper
                theme={this.context.theme}
                className="card"
            >
                {this.props.children}
            </CardWrapper>
        )
    }
}

ThemedCard.contextType = ThemeContext;

export default ThemedCard;