import React, { useContext } from "react";
import OpenWeatherContext from "../../../context/openWeather/OpenWeatherContext";
import { LANGUAGES } from "../../../utils/const";
import { LanguageSelectorStyled } from "./LanguageSelector.styled";

export default () => {
    const { changeLanguage, currentLanguage } = useContext(OpenWeatherContext);

    const handleChange = (selected) => {
        changeLanguage(selected);
    };

    return (
        <LanguageSelectorStyled>
            <select value={currentLanguage} onChange={(e) => handleChange(e.target.value)}>
                {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                ))}
            </select>
        </LanguageSelectorStyled>
    );
};
