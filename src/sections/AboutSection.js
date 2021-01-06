import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import './AboutSection.css'

function AboutSection ({ element }) {
 
    return (
      <Fullpage className="second" id="about">
        <h3>{data.sections[0].title}</h3>
        <div>
          {data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </div>
      </Fullpage>
    );
  
}

export default AboutSection;
