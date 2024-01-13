import React from "react";
import CitiesProvider from "../../context/cities/CitiesProvider";
import { ActionBarStyled } from "./ActionBar.styled";
import CitySelector from "./CitySelector/CitySelector";
import TopBar from "./TopBar";
import WidgetTogglerButton from "./WidgetTogglerButton/WidgetTogglerButton";

const ActionBar = () => {
    return (
        <ActionBarStyled className="action-bar">
            <CitiesProvider>
                <TopBar />
                <CitySelector />
                <WidgetTogglerButton />
            </CitiesProvider>
        </ActionBarStyled>
    );
};

export default ActionBar;
