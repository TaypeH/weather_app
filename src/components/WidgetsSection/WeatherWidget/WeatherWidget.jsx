import React from "react";
import PropTypes from "prop-types";
import "../../../assets/css/weather-icons-wind.css";
import { WeatherWidgetStyled } from "./WeatherWidget.styled";
import { resolveWeatherIconClassName } from "../../../utils/helper";

const WeatherWidget = ({ weather }) => {
    return (
        <WeatherWidgetStyled>
            <header className="weather-header">
                <h5>Today`s weather in</h5>
                <h4>{weather.cityName.toUpperCase()}</h4>
            </header>

            <div className="weather-info">
                <div className="weather-info__temperature">
                    <span>{weather.temp}</span>
                </div>

                <div className="weather-info__icon">
                    <span className={`${resolveWeatherIconClassName(weather.iconId)}`} />
                </div>

                <div className="weather-info__description">
                    <span>{weather.descriptionWeather}</span>
                </div>

                <div className="weather-info__maxmin-temperature">
                    <span>{weather.tempMin}</span>
                    <span className="separator"> / </span>
                    <span>{weather.tempMax}</span>
                </div>
            </div>

            <div className="wind-info">
                <div className="wind-info__direction">
                    <span
                        className="wi wi-wind towards-0-deg"
                        style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                    />
                </div>
                <div className="wind-info__speed">
                    <span>
                        Wind speed:&nbsp;
                        {weather.wind.speed}
                        meter/sec
                    </span>
                </div>
            </div>
        </WeatherWidgetStyled>
    );
};

WeatherWidget.defaultProps = {
    weather: {
        cityName: "",
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        icon: "",
        mainWeather: "",
        descriptionWeather: "",
        wind: {
            speed: 0,
            deg: 0,
        },
    },
};

WeatherWidget.propTypes = {
    weather: PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        tempMin: PropTypes.number.isRequired,
        tempMax: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        mainWeather: PropTypes.string.isRequired,
        descriptionWeather: PropTypes.string.isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
            deg: PropTypes.number.isRequired,
        }).isRequired,
    }),
};

export default WeatherWidget;
