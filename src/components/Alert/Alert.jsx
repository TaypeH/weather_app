import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { AlertStyled } from "./Alert.styled";

const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    if (!alert.visible) {
        return null;
    }

    return (
        <AlertStyled>
            <strong>Attention!</strong>
            {alert.message}
            <button onClick={hide} type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </AlertStyled>
    );
};

export default Alert;
