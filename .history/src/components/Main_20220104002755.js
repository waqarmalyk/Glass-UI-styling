import React from "react";
import Image from "../images/avatar.jpeg";
import "./Main.css";

const Main = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="dashboard">
            <div className="user">
              <img src={Image} alt="Avatar" />
              <h3>Ahmed Waqar</h3>
            </div>
          </div>
          <div className="links">
            <div className="link">
              <img src="./images/library.png" alt="" />
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
