import React from "react";
import SideBar from "./SideBar";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";

const CTA = ()=> {
    return (
        <div className="cta">
            <h2 className="cta__book-now">
                Good news we have 4 rooms for your selected dates!
            </h2>

            <button className="btn">
                <span className={"btn__visible"}>Book Now</span>
                <span className={"btn__invisible"}>only 4 rooms left</span>
            </button>
        </div>
    )
};


const Content = ()=>{
    return (
        <div className="content">
            <SideBar/>
            <main className={"hotel-view"}>
                <Gallery/>
                <Overview/>
                <Detail/>
                <CTA/>
            </main>
        </div>
    )
};

export default Content;