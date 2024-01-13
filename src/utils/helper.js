import weatherIconMapping from "./mappings/weather-icons.mapping";

export const resolveWeatherIconClassName = (iconId) => {
    const prefix = "wi wi-";
    const code = iconId;
    const weatherIconMappingObj = weatherIconMapping[code];

    if (!weatherIconMappingObj) {
        return "wi wi-na";
    }

    let { icon } = weatherIconMapping[code];

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = `day-${icon}`;
    }

    // Finally tack on the prefix.
    return prefix + icon;
};

export const groupForecastByDay = (timeFrames) => {
    const daysMap = timeFrames.reduce((days, frame) => {
        const date = new Date(frame.dt_txt);
        const day = date.toLocaleDateString();

        if (!days.has(day)) days.set(day, []);

        days.get(day).push({
            time: date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            temp: frame.main.temp,
            iconId: frame.weather[0].id,
            descriptionWeather: frame.weather[0].description,
        });

        return days;
    }, new Map());

    const days = [...daysMap.entries()].map((entry) => ({
        date: entry[0],
        timeFrames: entry[1],
    }));

    return days;
};

export default {
    resolveWeatherIconClassName,
    groupForecastByDay,
};
