import React from "react";
import "./Project.css";
import gmail from "../assets/Gmail-Emblem.png";
import todo from "../assets/checklist-clipart-to-do-18.png";
import restranaunt from "../assets/restranaunt.jfif";
import Header from "../Header";

const Project = (prop) => {
  return (
    <>
      <Header show={prop.show !== undefined ? prop.show : true} />
      <section className="projects">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="collections">
          <div className="collection1">
            <a
              href="https://github.com/aswanth2612/gmail-frontend"
              target="_blank"
            >
              <img src={gmail} alt="gmailicon" />
            </a>
            <h5 className="card-title head">Gmail Clone</h5>
            <p className="card-text cont">
              Technologies used: HTML CSS React js node js express MongoDB
            </p>
            <p className="card-text cont">
              Using gmail clone you can send mail,delete mail, you can mark
              important mail as starred,initially you have to create account and
              login to the mail
            </p>
          </div>
          <div className="collection2">
            <a href="https://github.com/aswanth2612/todo-backend.git" target="_blank">
              <img src={todo} alt="todoicon" />
            </a>
            <h5 className="card-title head">Todo App</h5>
            <p className="card-text cont">
              Technologies used: HTML CSS React js node js express MongoDB
            </p>
            <p className="card-text cont">
              Using Todo app you can create,read,update and delete a task, (CRUD)
              operation.
            </p>
          </div>
          <div className="collection3">
            <a href="https://github.com/aswanth2612" target="_blank">
              <img src={restranaunt} alt="restranaunticon" />
            </a>
            <h5 className="card-title head">Restranaunt Booking</h5>
            <p className="card-text cont">
              Technologies used:HTML CSS React js node js express MongoDB
            </p>
            <p className="card-text cont">
              Using this Restranaunt Booking app you can reserve you table in 
              Restranaunt by Online.
            </p>
          </div>
          <div className="collection4">
            <a href="https://github.com/aswanth2612" target="_blank">
              <img src={gmail} alt="gmailicon" />
            </a>
            <h5 className="card-title head">Gmail Clone</h5>
            <p className="card-text cont">
              Technologies used: CSS React js node js express MongoDB
            </p>
            <p className="card-text cont">
              Using gmail clone you can send mail,delete mail, you can mark
              important mail as starred,initially you have to create account and
              login to the mail
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
