import { useState, useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
