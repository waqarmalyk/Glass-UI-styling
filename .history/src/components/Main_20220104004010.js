import React from "react";
import "./Main.css";
import Card from "./Card";
import Avatar from "../images/avatar.jpeg";
import Library from "../images/library.png";

const Main = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="dashboard">
            <div className="user">
              <img className="img" src={Avatar} alt="Avatar" />
              <h3>Ahmed Waqar</h3>
            </div>
            <div className="links">
              <div className="link">
                <img src={Library} alt="" />
                <h2> About </h2>
              </div>
              <div className="link">
                <img src={Library} alt="" />
                <h2> Projects </h2>
              </div>
              <div className="link">
                <img src={Library} alt="" />
                <h2> Contact </h2>
              </div>
            </div>
            <div className="pro">
              <h2>Software Engineer | Frontend Developer</h2>
            </div>
          </div>
          <Card />
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
};

export default Main;
