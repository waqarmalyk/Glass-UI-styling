import React from "react";
import "./Card.css";
import Library from "../images/library.png";

const Card = () => {
  return (
    <>
      <div className="skills">
        <div className="status">
          <h2>Core Competence</h2>
        </div>
        <div className="cards">
          <div className="card">
            <img src={Library} alt="" />
            <div className="card-info">
              <h2>HTML</h2>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">90%</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
