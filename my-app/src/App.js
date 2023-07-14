import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Form from "./Components/PostView/Form";
import PostView from "./Components/PostView/PostView";

function App() {
      return (<>
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="PostView" element={<PostView />} />
                        <Route path="Form" element={<Form/>} />
                  </Routes>
            </BrowserRouter>
            </>
      );
}

export default App; 
