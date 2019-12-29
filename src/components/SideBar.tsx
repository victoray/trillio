import React, {useState} from "react";
// @ts-ignore
import sprite from "../statics/img/sprite.svg";
// @ts-ignore
import userImage from "../statics/img/user-1.jpg";

const SideBar = ()=> {
    const [current, setCurrent] = useState(1);

    return (
        <div className="sidebar">
            <ul className="side-nav">
                <li className={"side-nav__item " + ((current === 1) && "side-nav__item--active")}
                    onClick={()=>setCurrent(1)}>
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${sprite}#icon-home`}/>
                        </svg>
                        <span>Hotel</span>
                    </a>

                </li>
                <li className={"side-nav__item "  + ((current === 2) && "side-nav__item--active")}
                    onClick={()=>setCurrent(2)}>
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${sprite}#icon-aircraft-take-off`}/>
                        </svg>
                        <span>Flight</span>
                    </a>

                </li>
                <li className={"side-nav__item "  + ((current === 3) && "side-nav__item--active")}
                    onClick={()=>setCurrent(3)}>
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${sprite}#icon-key`}/>
                        </svg>
                        <span>Car Rentals</span>
                    </a>
                </li>
                <li className={"side-nav__item "  + ((current === 4) && "side-nav__item--active")}
                onClick={()=>setCurrent(4)}>
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${sprite}#icon-map`}/>
                        </svg>
                        <span>Tours</span>
                    </a>
                </li>
            </ul>

            <div className="legal">
                &copy; Copyright 2020
            </div>
        </div>
    );
};

export default SideBar;