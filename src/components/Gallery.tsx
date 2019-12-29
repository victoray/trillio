import React from "react";
import hotel1 from "../statics/img/hotel-1.jpg";
import hotel2 from "../statics/img/hotel-2.jpg";
import hotel3 from "../statics/img/hotel-3.jpg";

interface Image {
    image: string
}
const Image =({image}: Image)=> {
    return (
        <figure className={"gallery__item"}>
            <img src={image} alt="" className="gallery__photo"/>
        </figure>)
};

const Gallery = ()=> {
    return (
        <div className="gallery">
            <Image image={hotel1}/>
            <Image image={hotel2}/>
            <Image image={hotel3}/>
        </div>
    )
};

export default Gallery;