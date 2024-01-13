import { SHOW_LOADER, HIDE_LOADER, FETCH_DATA } from "../../utils/const";

const handlers = {
    [SHOW_LOADER]: (state) => ({
        ...state,
        loading: true,
    }),
    [HIDE_LOADER]: (state) => ({
        ...state,
        loading: false,
    }),
    [FETCH_DATA]: (state, { payload }) => ({
        ...state,
        currentCity: payload.cityName,
        currentLanguage: payload.currentLanguage,
        isForecast: payload.isForecast,
        widgetData: payload,
        loading: false,
    }),
    DEFAULT: (state) => state,
};

const openWeatherReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
};

export default openWeatherReducer;
