import React from 'react';

export const themes = {
    light: {
        name: "light",
        heroClass: "is-white",
        cardBackground: '#eee',
        fontColor: '#222',
        formBackground: '#fff',
        inputBackground: '#fff',
    },
    dark: {
        name: "dark",
        heroClass: 'is-dark',
        cardBackground: '#222',
        fontColor: '#ddd',
        formBackground: '#222',
        inputBackground: '#2f2f2f',
    }
};
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});