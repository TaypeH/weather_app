import styled from "styled-components";
import React from "react";

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.4rem;
`;

const ThemeIcon = ({ icon, size = "1.2" }) => {
    return (
        <IconWrapper>
            <span className={`wi ${icon}`} style={{ fontSize: `${size}rem` }} />
        </IconWrapper>
    );
};

export default ThemeIcon;
