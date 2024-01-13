import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import ThemeContext from "./ThemeContext";
import { LS } from "../../utils/const";

const AppThemeProvider = ({ children }) => {
    const initDarkMode = JSON.parse(localStorage.getItem(LS.DARK_MODE)) || false;
    const [darkMode, setDarkMode] = useState(initDarkMode);

    const theme = darkMode ? darkTheme : lightTheme;

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem(LS.DARK_MODE, !darkMode);
    };

    return (
        <ThemeContext.Provider
            value={{
                toggleTheme,
                darkMode,
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default AppThemeProvider;
