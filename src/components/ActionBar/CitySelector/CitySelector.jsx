import React, { useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useTheme } from "styled-components";
import CitiesContext from "../../../context/cities/CitiesContext";
import OpenWeatherContext from "../../../context/openWeather/OpenWeatherContext";
import { CitySelectorStyled } from "./CitySelector.styled";
import AlertContext from "../../../context/alert/AlertContext";

export default () => {
    const openWeatherContext = useContext(OpenWeatherContext);
    const { changeCity } = openWeatherContext;
    let { currentCity } = openWeatherContext;
    const { cities, addCity } = useContext(CitiesContext);
    const { show: alertShow } = useContext(AlertContext);

    const createOption = (label) => ({
        label,
        value: label,
    });

    const isLoading = false;

    const handleChange = (selectedCityOption, actionMetadata) => {
        switch (actionMetadata.action) {
            case "remove-value":
            case "deselect-option":
            case "clear":
                currentCity = "";
                break;

            default:
                changeCity(selectedCityOption.value);

                break;
        }
    };

    const handleCreate = async (inputCityOption) => {
        const result = await changeCity(inputCityOption);

        if (result.isSuccess) {
            const isExist = cities.some((c) => c.toLowerCase() === result.city.toLocaleLowerCase());

            if (!isExist) {
                addCity(result.city);
            }
        } else {
            alertShow(result.message, result.status);
        }
    };

    const citiesOptions = cities.map((city) => createOption(city));

    const globalTheme = useTheme();

    const citySelectorCustomStyles = {
        option: (provided, state) => ({
            ...provided,
            // borderBottom: "2px dotted green",
            // color: state.isSelected ? "yellow" : "black",
            // backgroundColor: state.isSelected ? "green" : "white",
            // color: "red",
        }),
        control: (provided) => ({
            ...provided,
            // marginTop: "5%",
            // color: "red",
        }),
    };

    return (
        <CitySelectorStyled>
            <CreatableSelect
                // theme={(theme) => {
                //     console.log(globalTheme);
                //     console.log(theme);

                //     return theme;
                // }}
                // classNamePrefix="city-selector"
                // isDisabled={isLoading}
                // isLoading={isLoading}
                styles={citySelectorCustomStyles}
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={citiesOptions}
                value={createOption(currentCity)}
            />
        </CitySelectorStyled>
    );
};
