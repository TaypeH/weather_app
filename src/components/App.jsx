import React from "react";
import GlobalStyles from "../assets/jss/global.styles";
import ActionBar from "./ActionBar/ActionBar";
import Layout from "./Layout/Layout";
import WidgetsSection from "./WidgetsSection/WidgetsSection";
import OpenWeatherProvider from "../context/openWeather/OpenWeatherProvider";
import ThemeProvider from "../context/theme/AppThemeProvider";
import AlertProvider from "../context/alert/AlertProvider";
import Alert from "./Alert/Alert";
import i18nWrap from "../i18n/i18nWrap";

function App() {
    return (
        <AlertProvider>
            <OpenWeatherProvider>
                <GlobalStyles />
                <ThemeProvider>
                    <Layout>
                        <Alert />
                        <ActionBar />
                        <WidgetsSection />
                    </Layout>
                </ThemeProvider>
            </OpenWeatherProvider>
        </AlertProvider>
    );
}

export default i18nWrap(App);
