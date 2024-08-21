import React from "react";
import Profile from "./Sections/Profile";
import Skill from "./Sections/Skill";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";

const Section = () => {
  return (
    <>
      <Profile show={false} />
      <Skill show={false} />
      <Project show={false} />
      <Contact show={false} />
    </>
  );
};

export default Section;
