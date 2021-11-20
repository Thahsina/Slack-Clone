import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutlined";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged in user */}
                <Avatar className="header__avatar" alt="Thahsina" src =""/>
                < AccessTimeIcon/>
                {/* Time Icon */}
            </div>
            <div className="header__search">
                {/* search icon */}
                
                <input placeholder="Search channels"/>
                <SearchIcon/>
                {/* input */}
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header;
