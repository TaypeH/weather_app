import i18next from "i18next";
import { LANGUAGES } from "../utils/const";

const enTranslations = require("../utils/locales/en/translations.json");
const frTranslations = require("../utils/locales/fr/translations.json");
const deTranslations = require("../utils/locales/de/translations.json");
const itTranslations = require("../utils/locales/it/translations.json");
const esTranslations = require("../utils/locales/es/translations.json");

function init({ language }) {
    i18next.init({
        fallbackLng: language,
        lng: language,
        resources: {
            en: {
                translations: enTranslations,
            },
            fr: {
                translations: frTranslations,
            },
            de: {
                translations: deTranslations,
            },
            it: {
                translations: itTranslations,
            },
            es: {
                translations: esTranslations,
            },
        },
        ns: ["translations"],
        defaultNS: "translations",
        returnObjects: true,
        debug: process.env.NODE_ENV === "development",
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        react: {
            wait: true,
        },
    });

    i18next.languages = LANGUAGES;

    return i18next;
}

export default init;
