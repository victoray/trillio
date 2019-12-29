import React from "react";
import SideBar from "./SideBar";
import Gallery from "./Gallery";

const Content = ()=>{
    return (
        <div className="content">
            <SideBar/>
            <main className={"hotel-view"}>
                <Gallery/>
            </main>
        </div>
    )
};

export default Content;