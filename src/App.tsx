// import { useState, useRef, useEffect } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
// import gsap from "gsap";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  // const container = useRef();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Profile />

        <Skills />

        <Projects />

        <Experience />

        <Contact /> */}
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
