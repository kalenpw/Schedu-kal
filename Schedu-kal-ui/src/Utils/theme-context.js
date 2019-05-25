import React from 'react';

export const themes = {
    light: {
        name: "light",
        primaryColor: '#fff',
        primaryVariant: '#eee',
        fontColor: '#222',
    },
    dark: {
        name: "dark",
        primaryColor: '#333',
        primaryVariant: '#222',
        fontColor: '#ddd',
    },
    custom: {
        name: "custom",
        primaryColor: localStorage.getItem('primaryColor'),
        primaryVariant: calculateVariant(localStorage.getItem('primaryColor')),
        fontColor: 'red',
    }
};

function calculateVariant(primaryColor){
    console.log(primaryColor[0]);
    if(primaryColor[0] === "#"){
        const decimalColor = parseInt("0x" + primaryColor.substring(1));
        console.log(decimalColor);
        const accent = decimalColor - 275;
        const hexAccent = accent.toString(16);
        return "#" + hexAccent; 
    }
    return primaryColor;
}

export function changePrimaryColor(primaryColor){
    themes.custom.primaryColor = primaryColor;
    themes.custom.primaryVariant = calculateVariant(primaryColor);
}

export function changeAccentColor(primaryColor){
    themes.custom.fontColor = primaryColor;
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});