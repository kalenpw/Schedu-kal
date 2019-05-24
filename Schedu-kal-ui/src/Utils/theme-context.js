import React from 'react';

export const themes = {
    light: {
        name: "light",
        primaryColor: '#fff',
        primaryVariant: '#eee',
        heroClass: "is-white",
        cardBackground: '#eee',
        fontColor: '#222',
        formBackground: '#fff',
        inputBackground: '#fff',
    },
    dark: {
        name: "dark",
        primaryColor: '#333',
        primaryVariant: '#222',
        heroClass: 'is-dark',
        cardBackground: '#222',
        fontColor: '#ddd',
        formBackground: '#222',
        inputBackground: '#2f2f2f',
    },
    custom: {
        name: "custom",
        primaryColor: localStorage.getItem('primaryColor'),
        primaryVariant: calculateVariant(localStorage.getItem('primaryColor')),
        cardBackground: localStorage.getItem('primaryColor'),
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