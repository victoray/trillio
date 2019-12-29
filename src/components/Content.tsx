import React from "react";
import SideBar from "./SideBar";
import Gallery from "./Gallery";
import Overview from "./Overview";

const Content = ()=>{
    return (
        <div className="content">
            <SideBar/>
            <main className={"hotel-view"}>
                <Gallery/>
                <Overview/>
            </main>
        </div>
    )
};

export default Content;