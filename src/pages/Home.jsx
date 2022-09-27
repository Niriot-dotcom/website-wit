import React from "react";
import logo from "../../src/Images/Logo_ACMW.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="h-56 grid grid-cols-3 gap-4 content-around ...">
      <div>
      <img
        className="object-none object-center bg-yellow-300 w-90 h-90 ..."
        src={logo}
      ></img>
      </div>
      <div>
        <h3>ACM-W Panamericana</h3>
        <h2>¿Quienes somos?</h2>
        <h1>ACM-W es una asosiación con la visión de motivar a mujeres </h1>
      </div>

      {/* <style>
  .img_logo {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  </style>  */}
    </div>
  );
}

export default Home;
