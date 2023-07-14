import React from "react";
import options from "../images/more_icon.png";
import heart from "../images/heart.png";
import share from "../images/share.png";

const ChildContainer = (props) => {
      const currentDate = new Date().toLocaleDateString();
      return(
            <div>
                  <nav id="cardHeader">
                        <img src={options} alt="options" id="optionImage" />
                        <img  id="mainImage" src={props.src} alt="mainImage" />
                        <p id="name"><b>{props.name}</b></p>
                        <p id="location">{props.location}</p>
                  </nav>

                  <div>
                        <img src={heart} alt="Likes" id="heartLike"/>
                        <img src={share} alt="Share" id="share" />
                        <p id="caption"><b>{props.description}</b></p>
                        <p id="date"><b>{currentDate}</b></p>
                        <p id="likesWord">{props.likes} likes</p>
                  </div>
            </div>
      )
}

export default ChildContainer;