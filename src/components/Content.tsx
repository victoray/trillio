import React from "react";
import SideBar from "./SideBar";

const Content = ()=>{
    return (
        <div className="content">
            <SideBar/>
            <main className={"hotel-view"}>
                Hotel View
            </main>
        </div>
    )
};

export default Content;