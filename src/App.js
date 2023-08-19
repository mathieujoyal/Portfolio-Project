import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Aboutme from "./AboutMe";
import Project from "./Projects";
import Contactpage from "./Contactpage"


const App = () =>{
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;

