import React from 'react';

export const themes = {
    light: {
        name: "light",
        heroClass: "is-white",
        cardBackground: '#eee',
        fontColor: '#222',
    },
    dark: {
        name: "dark",
        heroClass: 'is-dark',
        cardBackground: '#222',
        fontColor: '#ddd',
    }
};
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});