import React, { useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Container } from "../../components/Grid";
import "./style.css";
import ProfileCard from "../../components/ProfileCard";
import API from "../../utils/API";
var stockUser = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
// <p>{user.email}</p>
//<code>{JSON.stringify(user, null, 2)}</code>

let gigResult;


const Profile = () => {
    const { loading, user } = useAuth0();
    var userImage;
    

    // useeffect for component did mount
    useEffect(() => {
        // get all gigs and match with email
        API.getGigs()
            .then(res => {
                gigResult = res.filter(gig => gig.email === user.email )
                console.log(gigResult);
            })
    })



    if (loading || !user) {
        return <div className="profileError">
            <h3 className="errorMessage">Profile Error 404 User Not Found</h3>
            <a className="backButton btn" href="/">Go Back to Home</a>
        </div>;

    } else {
        // declaring if user has image or not
        if (user.picture) {
            userImage = user.picture
        } else {
            userImage = stockUser
        }
        // returning page
        return (
            <Container>

                <div className="profileHead">
                    <img className="userImage" src={userImage} alt="Profile picture" />

                    <h2 className="userName">Welcome {user.name}</h2>
                </div>
                {/* not using row and col since react isnt liking it */}
                <div className="cardSection">
                    <div className="titleDiv">
                        <h2 className="title">Your currently scheduled Gigs</h2>
                    </div>
                    <div className="cardContainer">
                        {/* {gigResult.map(res => (
                            <ProfileCard
                                gigName="Santa Gig"
                                number={res.phoneNum}
                                bookDate={res.dateBooked}
                                fromTime={res.startTime}
                                toTime={res.endTime}
                            />
                        ))} */}
                    </div>

                </div>




            </Container>
        );
    }


};

export default Profile;