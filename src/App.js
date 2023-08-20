import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Aboutme from "./AboutMe";
import Project from "./Projects";
import { projects } from "./data"
import Contactpage from "./Contactpage"


const App = () =>{
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/AboutMe" element={<Aboutme />}/>
        <Route path="/Projects" element={<Project data={projects}/>}/>
        <Route path="/Contactpage" element={<Contactpage />}/>
      </Routes>
    </Router>
  );
}

export default App;

