import React, { Component } from "react";

import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import useSticky from "./components/useSticky";
import Navbar from "./components/navbar";
import Snowfall from 'react-snowfall';
import "./App.css";

function App() {
  const { isSticky, element } = useSticky();

  return (
    <div className="App">
    <Snowfall />
      <Navbar sticky={isSticky} />
      <TitlesSection element={element} />
      <AboutSection />
      <SkillSection />
    </div>
  );

}

export default App;
