import React from "react";
// @ts-ignore
import sprite from "../statics/img/sprite.svg";

const Overview = ()=> {
    return (
        <div className="overview">
            <div className="overview__heading">
                Hotel 555
            </div>

            <div className="overview__stars">
                <svg className="overview__icon-star">
                    <use xlinkHref={`${sprite}#icon-star`}/>
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref={`${sprite}#icon-star`}/>
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref={`${sprite}#icon-star`}/>
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref={`${sprite}#icon-star`}/>
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref={`${sprite}#icon-star`}/>
                </svg>
            </div>

            <div className="overview__location">
                <svg className="overview__icon-location">
                    <use xlinkHref={`${sprite}#icon-locaation-pin`}/>
                </svg>
                <button className="btn-inline">
                    Albufeira, Portugal
                </button>

            </div>

            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>

        </div>
    )
};

export default Overview;