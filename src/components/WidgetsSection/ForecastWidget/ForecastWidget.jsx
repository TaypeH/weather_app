import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ForecastWidgetStyled } from "./ForecastWidget.styled";
import { resolveWeatherIconClassName } from "../../../utils/helper";

const ForecastWidget = ({ forecast: { cityName, forecastPerDay } }) => {
    const { t } = useTranslation();

    return (
        <ForecastWidgetStyled className="weather-forecast">
            <header className="weather-forecast__header">
                <h5>{t("forecastFor")}</h5>
                <h4>{cityName}</h4>
            </header>

            <div className="weather-forecast__days">
                {forecastPerDay.map(({ date, timeFrames }) => {
                    return (
                        <div key={date} className="weather-forecast__day">
                            <div className="weather-forecast__day-date">{date}</div>

                            <div className="weather-forecast__day-timeframes">
                                {timeFrames.map((frame) => (
                                    <div key={frame.time} className="weather-forecast__day-timeframe">
                                        <div className="day-timeframe__time">{frame.time}</div>
                                        <div className="day-timeframe__temperature">
                                            <span>{frame.temp}</span>
                                        </div>
                                        <div className="day-timeframe__icon">
                                            <span className={`${resolveWeatherIconClassName(frame.iconId)}`} />
                                        </div>
                                        <div className="day-timeframe__description">{frame.descriptionWeather}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </ForecastWidgetStyled>
    );
};

ForecastWidget.defaultProps = {
    forecast: {
        cityName: "",
        forecastPerDay: [
            {
                date: "",
                timeFrames: [
                    {
                        time: "",
                        temp: 0,
                        iconId: 0,
                        descriptionWeather: "",
                    },
                ],
            },
        ],
    },
};

ForecastWidget.propTypes = {
    forecast: PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        forecastPerDay: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string.isRequired,
                timeFrames: PropTypes.arrayOf(
                    PropTypes.shape({
                        time: PropTypes.string.isRequired,
                        temp: PropTypes.number.isRequired,
                        iconId: PropTypes.number.isRequired,
                        descriptionWeather: PropTypes.string.isRequired,
                    })
                ).isRequired,
            })
        ).isRequired,
    }),
};

export default ForecastWidget;
