import React, { useContext, useEffect } from "react";
import OpenWeatherContext from "../../context/openWeather/OpenWeatherContext";
import WeatherWidget from "./WeatherWidget/WeatherWidget";
import ForecastWidget from "./ForecastWidget/ForecastWidget";
import Loader from "../Loader/Loader";

const WidgetsSection = () => {
    const { loading, fetchData, isForecast, widgetData } = useContext(OpenWeatherContext);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const widget = isForecast ? <ForecastWidget forecast={widgetData} /> : <WeatherWidget weather={widgetData} />;

    return (
        <>
            {loading ? <Loader /> : null}
            {widget}
        </>
    );
};

export default WidgetsSection;
