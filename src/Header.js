import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import "./Header.css";
import {Link} from "react-router-dom";


function Header() {

    const [inputSearch,setInputSearch]=useState("");

    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png" />
            </Link>
            </div>
            <div className="header__input">
                <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} type="text"  placeholder="Search" />
                <Link to ={`/search/${inputSearch}`}>
                         <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://avatars1.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4" />
            </div>
            
        </div>
    )
}

export default Header 