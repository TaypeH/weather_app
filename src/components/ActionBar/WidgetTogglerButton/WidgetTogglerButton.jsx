import React, { useContext } from "react";
import OpenWeatherContext from "../../../context/openWeather/OpenWeatherContext";
import { WidgetTogglerButtonStyled } from "./WidgetTogglerButton.styled";

export default () => {
    const { toggleWidget } = useContext(OpenWeatherContext);

    return <WidgetTogglerButtonStyled onClick={toggleWidget}>Toggle Widget</WidgetTogglerButtonStyled>;
};
