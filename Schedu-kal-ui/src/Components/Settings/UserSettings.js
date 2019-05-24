import React from 'react';
import ThemedInput from 'Components/Forms/ThemedInput.js';
import styled from 'styled-components';
import { themes, ThemeContext, changePrimaryColor, changeAccentColor } from "Utils/theme-context.js";

const ColoredBox = styled.div`
    background-color: ${props => props.theme.formBackground} !important;
`;

class UserSettings extends React.Component {

    handlePrimaryColorChange = (event) => {
        localStorage.setItem('primaryColor', event.target.value); 
        changePrimaryColor(event.target.value);
        this.context.toggleTheme(true);
    }

    handleAccentColorChange = (event) => {
        localStorage.setItem('accentColor', event.target.value); 
        changeAccentColor(event.target.value);
        console.log(this.context);
        this.context.toggleTheme(true);
    }

    render() {
        return (
            <ColoredBox theme={this.context.theme} className="box">
                <h1 className="title">Settings</h1>
                <h3 className="title label">Primary Color</h3>
                <ThemedInput
                    inputClasses="input is-primary"
                    placeholder="Primary color"
                    handleKeyUp={null}
                    handleChange={this.handlePrimaryColorChange}
                    value={localStorage.getItem('primaryColor')}
                />
                <h3 className="title label">Accent Color</h3>
                <ThemedInput
                    inputClasses="input is-primary"
                    placeholder="Primary color"
                    handleKeyUp={null}
                    handleChange={this.handleAccentColorChange}
                    value={localStorage.getItem('accentColor')}
                />
            </ColoredBox>
        )
    }
}

UserSettings.contextType = ThemeContext;

export default UserSettings;