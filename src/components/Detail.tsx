import React from "react";
import user1 from "../statics/img/user-1.jpg";
import user2 from "../statics/img/user-2.jpg";
import user3 from "../statics/img/user-3.jpg";
import user5 from "../statics/img/user-5.jpg";
import user6 from "../statics/img/user-6.jpg";

interface Review {
    review: string;
    image: string;
    user: string;
    date: string;
    rating: number;
}
const Review =({review, image, user, date, rating}: Review)=> {
    return (
        <figure className="review">
            <blockquote className="review__text">
                {review}
            </blockquote>
            <figcaption className={"review__user"}>
                <img src={image} alt="" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">{user}</p>
                    <p className="review__user-date">{date}</p>
                </div>
                <div className="review__rating">{rating}</div>
            </figcaption>
        </figure>
    )
};

const Detail = ()=> {
    return (
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe.
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.

                </p>

                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>

                <ul className="list">
                    <li className="list__item">Close to the Beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">free airport shuttle</li>
                    <li className="list__item">free wifi ina all rooms</li>
                    <li className="list__item">air conditioning and heating</li>
                    <li className="list__item">pets allowed</li>
                    <li className="list__item">we speak all languages</li>
                    <li className="list__item">Perfect for families</li>
                </ul>

                <div className="recommend">
                    <p className="recommend__count">
                        Lucy and 3 others recommends this hotel
                    </p>
                    <div className="recommend__friends">
                        <img src={user1} alt="" className="recommend__photo"/>
                        <img src={user3} alt="" className="recommend__photo"/>
                        <img src={user5} alt="" className="recommend__photo"/>
                        <img src={user6} alt="" className="recommend__photo"/>
                    </div>

                </div>
            </div>

            <div className="user-reviews">
                <Review review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."}
                        image={user2} user={"John Doe"} date={"Dec 31, 2019"} rating={8.9}/>
                <Review review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."}
                        image={user6} user={"Marie Doe"} date={"Jan 1, 2019"} rating={7.9}/>

                        <button className={"btn-inline"}>Show all <span>&rarr;</span></button>
            </div>


        </div>

    )
};

export default Detail;