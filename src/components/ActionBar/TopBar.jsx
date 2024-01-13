import React from "react";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import { TopBarStyled } from "./TopBar.styled";

const TopBar = () => {
    return (
        <TopBarStyled>
            <nav className="navbar navbar-expand">
                <div className="navbar-brand">Weather Widget</div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <ThemeToggler />
                        </li>
                        <li className="nav-item">
                            <LanguageSelector />
                        </li>
                    </ul>
                </div>
            </nav>
        </TopBarStyled>
    );
};

export default TopBar;
