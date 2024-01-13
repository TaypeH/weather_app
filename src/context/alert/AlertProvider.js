import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../../utils/const";
import AlertContext from "./AlertContext";
import alertReducer from "./alertReducer";

const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, { visible: false });

    const show = (message, status = "success") => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                message,
                status,
            },
        });
    };

    const hide = () => dispatch({ type: HIDE_ALERT });

    return (
        <AlertContext.Provider
            value={{
                show,
                hide,
                alert: state,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;
