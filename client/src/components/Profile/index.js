import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Container, Col, Row } from "../../components/Grid";
import "./style.css";
var stockUser = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
// <p>{user.email}</p>
//<code>{JSON.stringify(user, null, 2)}</code>

const Profile = () => {
    const { loading, user } = useAuth0();
    // declaring if user has image or not
    var userImage;




    if (loading || !user) {
        return <div className="profileError">
            <h3 className="errorMessage">Profile Error 404 User Not Found</h3>
            <a className="backButton btn" href="/">Go Back to Home</a>
        </div>;

    } else {
        if (user.picture) {
            userImage = user.picture
        } else {
            userImage = stockUser
        }
        return (
            <Container>

                <div className="profileHead">
                    <img className="userImage" src={userImage} alt="Profile picture" />

                    <h2 className="userName">Welcome {user.name}</h2>
                </div>




            </Container>
        );
    }


};

export default Profile;