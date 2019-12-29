import React from "react";
import sprite from "../statics/img/sprite.svg";
import logo from "../statics/img/logo.png";
import userImage from "../statics/img/user-1.jpg";

const Header = ()=> {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo"/>

            <form action="" className="search">
                <input type="text" className="search__input" placeholder={"Search Hotels"}/>

                <button className="search__button">
                    <svg className={"search__icon"}>
                        <use xlinkHref={`${sprite}#icon-magnifying-glass`}/>
                    </svg>
                </button>
            </form>
            <nav className="nav">
                <div className="nav__icon-box">
                    <svg className={"nav__icon"}>
                        <use xlinkHref={`${sprite}#icon-bookmark`}/>
                    </svg>
                    <span className="nav__notification">7</span>
                </div>
                <div className="nav__icon-box">
                    <svg className={"nav__icon"}>
                        <use xlinkHref={`${sprite}#icon-chat`}/>
                    </svg>
                    <span className="nav__notification">7</span>
                </div>
                <div className="nav__user">
                    <img src={userImage} alt="" className="nav__user-photo"/>
                    <span className="nav__user-name">John Doe</span>
                </div>
            </nav>
        </div>
    )
};

export default Header;