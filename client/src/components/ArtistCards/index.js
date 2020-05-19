import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./style.css";

let mainStyle = {
    color:"rgb(126, 126, 126)"
}
let savedStyle = {
    color:"rgb(240, 56, 56)"
}


export default function ArtistCards(props) {

    const [heartbtn, setheartbtn] = useState("far fa-heart");
    const [heartbtnColor, setheartbtnColor] = useState(mainStyle);
    function onButtonClick(e) {
        console.log("artist is clicked!");
        console.log(e);
        // send it to the local storage
        localStorage.setItem("gigger", e);
      }
    
    return (

    // will need to have a data thing so when a user clicks the heart button to save. it will store that data into the DB and
    // latter down the road when we get this all set up, a user can look at all the giggers that they hearted

    // also need to figure out how to keep the heart filled in when they do heart it. since react state always reloads
        <div className="artistCardCont">
            <div className="artistImgWrapper">
                <Link to="/gig-setup" onClick={() => {
                    onButtonClick(props.artistName);
                }}>
                    <img className="artistImg" src={props.artistImage} />

                </Link>
            </div>
            <div className="artistDescCont">
                <h4 className="artistName">{props.artistName}</h4>
                <p className="artistDesc">We will play hard rock at your next event!</p>
                <p className="rating"> <i className="fas fa-star"></i> {props.rating} ({props.reviewNum})</p>
            </div>
            <div className="priceAndHeartCont">
                <div className="favIt">
                    <button id="heartBtn" style={heartbtnColor} className={heartbtn} onClick={()=>{
                        setheartbtn("fas fa-heart");
                        setheartbtnColor(savedStyle)
                        }}>

                    </button>
                </div>
                <p className="startingPrice">Starting at <span className="price">${props.price}</span> an hour</p>
            </div>
        </div>

    )
}

