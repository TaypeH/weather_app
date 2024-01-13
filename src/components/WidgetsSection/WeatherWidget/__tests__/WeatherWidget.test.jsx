import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import WeatherWidget from "../WeatherWidget";
import dummyWeatherData from "./dummyWeatherData.json";

describe("Weather Widget", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<WeatherWidget weather={dummyWeatherData} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("Location name text is rendered in upper case ", () => {
        const wrapper = mount(<WeatherWidget weather={dummyWeatherData} />);

        expect(wrapper.find("h4")).toHaveText(dummyWeatherData.cityName.toUpperCase());
    });
});
