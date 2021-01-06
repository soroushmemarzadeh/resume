import React, { Component,useState } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

function TitlesSection({ element }) {
  const [color, setcolor] = useState("white");

  const changeColor = () => {
    setcolor(color === "white" ? "yellow" : "white");
  }


  return (
    <div ref={element} id="title">
      <Fullpage className="first">
        <h1
          className="title"
          style={{
            color: color
          }}
          onMouseOver={changeColor}
          onMouseLeave={() => {
            changeColor();
          }}
        >
          {data.title}
        </h1>
        <div>
          <h2>{data.subtitle}</h2>
        </div>
        <div className="icons-wrapper">
          {Object.keys(data.links).map(key => {
            return (
              <div className="icon">
                <SocialIcon url={data.links[key]} />
              </div>
            );
          })}
        </div>
      </Fullpage>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={0}
      >
        <DownIcon
          icon={data.icons.down}
          onClick={() => console.log("im working")}
        />
      </Link>
      <Element name="about" className="element" />
    </div>
  );

}

export default TitlesSection;
