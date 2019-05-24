import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from "Utils/theme-context.js";

const Wrapper = styled.div`
    color: ${props => props.theme.fontColor};
`;

class ThemedText extends React.Component{
    render(){
        return (
            <Wrapper
                theme={this.context.theme}
                className={this.props.classes}         
            >
                {this.props.children}
            </Wrapper>
        )
    }
}

ThemedText.contextType = ThemeContext;

export default ThemedText;