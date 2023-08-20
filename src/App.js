import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Aboutme from "./components/AboutMe";
import Project from "./components/Projects";
import { projects } from "./data"
import Contactpage from "./components/Contactpage"


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

