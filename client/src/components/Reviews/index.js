import React from "react";
import "./style.css";

function Reviews(props) {
    return (
<<<<<<< HEAD
        <div className="div">
=======
        <div className="divs">
>>>>>>> 5b8b05093293c32b0a345df68f1bf49e06251dda
            <h2>{props.name}    <i class="fas fa-star" id={"star"}></i><i class="fas fa-star" id={"star"}></i><i class="fas fa-star" id={"star"}></i><i class="fas fa-star" id={"star"}></i><i class="fas fa-star" id={"star"}></i></h2>
            <p>{props.review}</p>
            <p>{props.date}</p>
            <h5>Type of gig: {props.typeOfGig}</h5>
        </div>
    );
}

export default Reviews;