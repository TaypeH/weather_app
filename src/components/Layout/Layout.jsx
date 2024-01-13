import React from "react";

import { LayoutStyled } from "./Layout.styled";

export default ({ children }) => {
    return (
        <LayoutStyled>
            <div className="page">
                <div className="container-fluid">{children}</div>
            </div>
        </LayoutStyled>
    );
};
