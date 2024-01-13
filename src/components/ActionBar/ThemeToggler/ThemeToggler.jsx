import React, { useContext } from "react";
import Switch from "react-switch";
import ThemeContext from "../../../context/theme/ThemeContext";
import ThemeIcon from "./ThemeIcon";

export default () => {
    const { toggleTheme, darkMode } = useContext(ThemeContext);

    return (
        <Switch
            onChange={toggleTheme}
            checked={darkMode}
            onColor="#68756f"
            offColor="#225d98"
            onHandleColor="#25303B"
            offHandleColor="#F5F5F5"
            checkedIcon={<ThemeIcon icon="wi-moon-waxing-crescent-4" size="1.4" />}
            uncheckedIcon={<ThemeIcon icon="wi-day-sunny" />}
        />
    );
};
