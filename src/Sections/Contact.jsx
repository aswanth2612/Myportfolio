import React from "react";
import "./Contact.css";
import gmail from "../assets/gmail-svgrepo-com.svg";
import github from "../assets/github-svgrepo-com.svg";
import linkedin from "../assets/linkedin-icon-logo-svgrepo-com.svg";
import instagram from "../assets/instagram-1-svgrepo-com.svg";
import Header from "../Header";

const Contact = (prop) => {
  return (
    <>
      <Header show={prop.show !== undefined ? prop.show : true} />
      <section className="contact">
        <div className="start">
          <h1>Contact</h1>
        </div>
        <div className="social">
          <div className="address">
            <h3>Address</h3>
            <p>Perumbakkam,</p>
            <p>Chennai-600100</p>
            <p>India</p>
            <div className="information1">
              <h4>For any queries,</h4>
              <img src={gmail} alt="gmailicon" />
              aswanthmmg@gmail.com
            </div>
          </div>
          <div className="box">
            <h3>Social</h3>
            <h4>Connect me through,</h4>
            <div className="box1">
              <div className="information2">
                <a href="https://github.com/aswanth2612">
                  <img src={github} alt="Github" />
                </a>
              </div>
              <div className="information3">
                <a
                  href="https://www.linkedin.com/in/aswanth-s2612"
                  target="_blank"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
              <div className="information4">
                <a
                  href="https://www.instagram.com/asw4nth_____?igsh=MW5ibnFwcXRhdW5mdQ=="
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
