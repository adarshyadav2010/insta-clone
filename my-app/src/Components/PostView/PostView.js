import React from "react";
import ChildContainer from "./childContainer";
import "./postView.css";
import SiteHeader from "./siteHeader";
import Hayabusa from "../images/Hayabusa.jpg"
import zx10r from "../images/zx10rr.jpg"
import smile  from "../images/smile.jpg"
import cbr1000rr from "../images/cbr1000rr.jpg"



const PostView = () => {
      return (
            <div id="postContainer">
                  <div id="logoNav"><SiteHeader /></div>
                  <div id="childContainer"  ><ChildContainer src={smile} name="Pandu" likes="1050" location="India" description="Description 2"/></div>
                  <div id="childContainer2" ><ChildContainer src={Hayabusa} name="Pradeep" likes="1010" location="India" description="Description 2"  /></div>
                  <div id="childContainer3" ><ChildContainer src={zx10r} name="Sandeep" likes="1500" location="India" description="Description 3"/></div>
                  <div id="childContainer4" ><ChildContainer src={cbr1000rr} name="Mukesh" likes="1900" location="India" description="Description 4"/></div>
            </div>
      )
}

export default PostView;