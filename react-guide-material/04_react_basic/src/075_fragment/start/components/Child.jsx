import React from "react";
import "./Child.css";

const Child = () => {
  return (
    <React.Fragment>
    <div className="component">
      <h3>Hello Component</h3>
    </div>
    <h3>Hello Fragment</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod in sequi corporis. Ea, quo inventore eveniet optio maiores vitae, doloremque voluptatum, mollitia nobis magni voluptatibus minima adipisci architecto asperiores!</p>
    </React.Fragment>
  );
};

export default Child;
