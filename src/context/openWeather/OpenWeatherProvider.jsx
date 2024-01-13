import Axios from "axios";
import React, { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { groupForecastByDay } from "../../utils/helper";
import {
    FETCH_DATA,
    SHOW_LOADER,
    HIDE_LOADER,
    ALERT_WARNING,
    ERROR_MESSAGES,
    LS,
    DEFAULT_CITY,
    DEFAULT_LANG,
} from "../../utils/const";
import OpenWeatherContext from "./OpenWeatherContext";
import OpenWeatherReducer from "./openWeatherReducer";

const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const appId = process.env.REACT_APP_WEATHER_APP_ID;

const OpenWeatherProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [state, dispatch] = useReducer(OpenWeatherReducer, {
        loading: true,
        isForecast: JSON.parse(localStorage.getItem(LS.REQUEST_TYPE)) || false,
        currentCity: localStorage.getItem(LS.CITY) || DEFAULT_CITY,
        currentLanguage: localStorage.getItem(LS.LANG) || DEFAULT_LANG,
    });

    let requestedLanguage = state.currentLanguage;
    let requestedCity = state.currentCity;

    const weather = (res) => ({
        iconId: res.weather[0].id,
        cityName: res.name,
        temp: res.main.temp,
        tempMin: res.main.temp_min,
        tempMax: res.main.temp_max,
        icon: res.weather[0].icon,
        mainWeather: res.weather[0].main,
        descriptionWeather: res.weather[0].description,
        wind: res.wind,
    });

    const forecast = (res) => ({
        cityName: res.city.name,
        forecastPerDay: groupForecastByDay(res.list),
    });

    const showLoader = () => dispatch({ type: SHOW_LOADER });
    const hideLoader = () => dispatch({ type: HIDE_LOADER });

    const fetchDataFromApi = (processingData, requestType) => {
        const result = Axios.get(
            `${baseUrl}${requestType}?q=${requestedCity}&units=metric&appid=${appId}&lang=${requestedLanguage}`
        )
            .then((res) => res.data)
            .then((res) => {
                const data = processingData(res);

                dispatch({
                    type: FETCH_DATA,
                    payload: {
                        ...data,
                        isForecast: requestType === "forecast",
                        currentLanguage: requestedLanguage,
                    },
                });

                return {
                    isSuccess: true,
                    city: data.cityName,
                };
            })
            .catch((error) => {
                hideLoader();

                return {
                    isSuccess: false,
                    message: ERROR_MESSAGES[error.response.status],
                    city: requestedLanguage,
                    status: ALERT_WARNING,
                };
            });

        return result;
    };

    const fetchData = () => {
        showLoader();
        const processingData = state.isForecast ? forecast : weather;

        return fetchDataFromApi(processingData, processingData.name);
    };

    const toggleWidget = () => {
        showLoader();
        const processingData = !state.isForecast ? forecast : weather;

        localStorage.setItem(LS.REQUEST_TYPE, !state.isForecast);

        return fetchDataFromApi(processingData, processingData.name);
    };

    const changeLanguage = (lang) => {
        requestedLanguage = lang;
        fetchData();
        i18n.changeLanguage(lang);
        localStorage.setItem(LS.LANG, i18n.language);
    };

    const changeCity = async (city) => {
        requestedCity = city;

        const result = await fetchData();

        if (result.isSuccess) {
            localStorage.setItem(LS.CITY, result.city);
        }

        return fetchData();
    };

    return (
        <OpenWeatherContext.Provider
            value={{
                fetchData,
                toggleWidget,
                changeLanguage,
                changeCity,
                isForecast: state.isForecast,
                widgetData: state.widgetData,
                currentCity: state.currentCity,
                currentLanguage: state.currentLanguage,
                loading: state.loading,
            }}
        >
            {children}
        </OpenWeatherContext.Provider>
    );
};

export default OpenWeatherProvider;
