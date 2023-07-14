import React, {useState} from "react";
import SiteHeader from "./siteHeader";
import "./Form.css";
import FileInput from "./ImageBrowse";

const Form = () => {
      const [author, SetAuthor] = useState("");
      const [location, SetLocation] = useState("");
      const [description, SetDescription] = useState("");

      return(
            <>
            <SiteHeader id="formHeader"/>
            <div id="justForBorder">
                  <div id="formContainer">
                  <FileInput /> <br/>
                  <input type="text" placeholder="Author" value={author} onChange={(e) => SetAuthor(e.target.value)} id="input2" />
                  <input type="text" placeholder="Location" id="input3" value={location} onChange={(e) => SetLocation(e.target.value)} /> <br/>
                  <input type="text" placeholder="Description" id="input4" value={description} onChange={(e) => SetDescription(e.target.value)}/>
                  <button id="postButton"> Post </button>
            </div>
            </div>
            </>
      )
}

export default Form;