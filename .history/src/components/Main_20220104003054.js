import React from "react";
import Avatar from "../images/avatar.jpeg";
import Library from "../images/library.jpeg";
import "./Main.css";

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
              <h2> Skills </h2>
            </div>
          </div>
        </section>
      </main>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
};

export default Main;
