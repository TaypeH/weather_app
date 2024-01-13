import React, { useEffect, useState } from "react";
import { I18nextProvider, withTranslation } from "react-i18next";
import { DEFAULT_LANG, LS } from "../utils/const";
import init from "./config";

const i18nWrap = (WrappedComponent) => {
    WrappedComponent = withTranslation()(WrappedComponent);

    return () => {
        const [i18nInstance, setI18nInstance] = useState(null);

        useEffect(() => {
            const settings = {
                language: localStorage.getItem(LS.LANG) || DEFAULT_LANG,
            };

            setI18nInstance(init(settings));

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        if (i18nInstance) {
            return (
                <I18nextProvider i18n={i18nInstance}>
                    <WrappedComponent />
                </I18nextProvider>
            );
        }

        return null;
    };
};

export default i18nWrap;
