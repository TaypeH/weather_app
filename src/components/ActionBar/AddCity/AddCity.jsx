import React, { useContext, useState } from "react";
import AlertContext from "../../../context/alert/AlertContext";
import CitiesContext from "../../../context/cities/CitiesContext";
import OpenWeatherContext from "../../../context/openWeather/OpenWeatherContext";
import { AddCityStyled } from "./AddCity.styled";

export default () => {
    const [cityy, setCity] = useState("");
    const { addCity, cities } = useContext(CitiesContext);
    const { show: alertShow } = useContext(AlertContext);
    const { changeCity } = useContext(OpenWeatherContext);

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await changeCity(cityy);

        if (result.isSuccess) {
            const isExist = cities.some((c) => c.toLowerCase() === result.city.toLocaleLowerCase());

            if (!isExist) {
                addCity(result.city);
            }
        } else {
            alertShow(result.message, result.status);
        }

        setCity("");
    };

    return (
        <AddCityStyled>
            <form onSubmit={handleSubmit}>
                <input value={cityy} onChange={handleChange} />
            </form>
        </AddCityStyled>
    );
};
