import React, { Fragment } from "react";
import "./skill.css";
import html from "../assets/html5-original.svg";
import css from "../assets/css3-plain.svg";
import bootstrap from "../assets/bootstrap-plain.svg";
import javascript from "../assets/javascript-original.svg";
import react from "../assets/react-original-wordmark.svg";
import redux from "../assets/redux-original.svg";
import git from "../assets/git-plain.svg";
import postman from "../assets/getpostman-icon.svg";
import nodejs from "../assets/nodejs-original-wordmark.svg";
import express from "../assets/express-original-wordmark.svg";
import mongodb from "../assets/mongodb-plain.svg";
import materialui from "../assets/materialui.png";
import Header from "../Header";

const Skill = (prop) => {
  console.log("SKILLS: "+prop.show)
  return (
    <>
      <Header show={prop.show !== undefined ? prop.show : true} />
      <div className="position-relative">
        <section className="skill position-relative">
          <div className="heading">
            <h1>Skills</h1>
          </div>
          <div className="icons">
            <div className="set1">
              <span>
                <img src={html} alt="htmlIcon" />
                <p>HTML</p>
              </span>
              <span>
                <img src={css} alt="cssIcon" />
                <p>CSS</p>
              </span>
              <span>
                <img src={bootstrap} alt="bootstrapIcon" />
                <p>Bootstrap</p>
              </span>
              <span>
                <img src={javascript} alt="javascriptIcon" />
                <p>JavaScript</p>
              </span>
            </div>
            <div className="set2">
              <span>
                <img src={react} alt="reactIcon" />
                <p>React Js</p>
              </span>
              <span>
                <img src={redux} alt="reduxIcon" />
                <p>Redux</p>
              </span>
              <span>
                <img src={git} alt="gitIcon" />
                <p>Git</p>
              </span>
              <span>
                <img src={materialui} alt="materialuiIcon" />
                <p>Material UI</p>
              </span>
            </div>
            <div className="set3">
              <span>
                <img src={postman} alt="postmanIcon" />
                <p>PostMan</p>
              </span>
              <span>
                <img src={nodejs} alt="nodejsIcon" />
                <p>Node JS</p>
              </span>
              <span>
                <img src={express} alt="expressIcon" />
                <p>Express Js</p>
              </span>
              <span>
                <img src={mongodb} alt="mongoDbIcon" />
                <p>Mongo DB</p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skill;
