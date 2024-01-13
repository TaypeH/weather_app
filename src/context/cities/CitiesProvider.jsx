import React, { useReducer } from "react";
import { CITIES, ADD_CITY, LS } from "../../utils/const";
import CitiesContext from "./CitiesContext";
import citiesReducer from "./citiesReducer";

const CitiesProvider = ({ children }) => {
    const initCities = [...(JSON.parse(localStorage.getItem(LS.CITIES)) || CITIES)];
    const [cities, dispatch] = useReducer(citiesReducer, initCities);

    const addCity = (city) => {
        city = city[0].toUpperCase() + city.slice(1);
        localStorage.setItem(LS.CITIES, JSON.stringify([city, ...cities]));

        dispatch({
            type: ADD_CITY,
            payload: city,
        });
    };

    return (
        <CitiesContext.Provider
            value={{
                cities,
                addCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

export default CitiesProvider;
