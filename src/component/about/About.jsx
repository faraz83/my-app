import React from "react";
import "./about.css";
import Aobut from "../../img/2.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Aobut} className="a-img" alt="" />
        </div>
      </div>

      <div className="a-right">
        <div className="a-title">About Me</div>
        <p className="a-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          repudiandae mollitia sunt magnam officiis error nemo facilis qui.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          eius facere veritatis possimus in provident minus culpa alias nihil
          deleniti quae voluptatem magni aperiam quo labore nesciunt
          exercitationem dolore neque inventore sint, molestiae nisi?
        </p>
        
      </div>
    </div>
  );
}

export default About;
