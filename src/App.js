import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Images from "./components/Image/Image";
import ProfilePic from "./components/ProfilePic/ProfilePic";

function App() {
  return (
    <Router>
      <Navbar />
      <Images />
      <ProfilePic />
    </Router>
  );
}

export default App;
