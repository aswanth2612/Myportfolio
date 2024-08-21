import React from "react";
import "./Profile.css";
import githubIcon from "../assets/github-dark.svg";
import linkedinIcon from "../assets/linkedin-dark.svg";
import CV from "../assets/CV.pdf";
import img from "../assets/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg";
import Header from "../Header";

const Profile = (prop) => {
  return (
    <>
      <Header show={prop.show !== undefined ? prop.show : true} />
      <section className="profile">
        <div className="image">
          <img src={img} alt="profileimg"></img>
        </div>
        <div className="intro">
          <h1>Aswanth</h1>
          <h2> MERN Stack Developer</h2>
          <div>
            <span>
              <a href="https://github.com/aswanth2612" target="_blank">
                <img src={githubIcon} alt="Github icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/aswanth-s2612"
                target="_blank"
              >
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
            </span>
          </div>
          <p className="para">
            With a passion for developing modern MERN Stack web application
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Profile;
