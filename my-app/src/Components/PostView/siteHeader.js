import React from "react";
import instaLogo from "../images/icon.png";
import cameraLogo from "../images/camera.png";
import { Link } from "react-router-dom";

const SiteHeader = () => {
      return(
            <nav id="navBar">
                  <section><img src={instaLogo} alt="Logo" id="logo" />
                  <section id="instaClone">InstaClone</section> </section>
                                   
                  <Link to="/Form"><img src={cameraLogo} alt="camLogo" id="camLogo" /> </Link>
            </nav>
      )
}

export default SiteHeader;