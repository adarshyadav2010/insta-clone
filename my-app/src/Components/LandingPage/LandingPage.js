import React from "react";
import {Link} from "react-router-dom";
import "./Landing.css";
import LandingPageImage from "../images/LandingPageImage.png";
import LandingText from "./LandingText";

const LandingPage = () => {
      return (
            <div id="container">
                        <img src={LandingPageImage} alt="InstaClone Lens" id="LandingPageImage" />
                        <Link to="/PostView"><button id="loginButton"> Enter </button> </Link>
                        <LandingText />
            </div>
      )
}

export default LandingPage;