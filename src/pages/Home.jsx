import React from "react";
import logo from "../../src/images/logos/Logo_Panamericana_ACM-W_Blanco_Simbolo.png";

function Home(){
  return (
    
    <div className="h-56 grid grid-cols-2 place-items-center gap-4">
      
      <div className="content-center align-middle items-center  ">
      <br></br>
      <div className="card rounded-lg hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg px-5 py-12  ml-20 text-center" >
      <h3 className="font-bold ">ACM-W Panamericana</h3>
        <h2 className="font-medium ">¿Quienes somos?</h2>
        <h1 className="font-normal">ACM-W es una asociación con la visión de motivar a mujeres </h1>
        <p className="font-light text-justify">
        ACM-W se centra en influenciar y apoyar la participación de mujeres en las area tecnologicas, brindando diferentes tipo de programas especilizados a cualquier interes con respecto a las tecnologias.
        En adición ACM-W se encarga de dar servicios a todos nuestros integrantes que trabajan en nuestra comunidad promoviendo contribuciones de mujeres en las ciencias.
        </p>
      </div>
      </div>
      <div className="items-center " >
      <br></br>
        <img className="w-80 h-65 rounded-lg  bg-acmw-purple" src={logo} alt="logo"  />
      </div>
      <div className="flex flex-col bg-acmw-purple rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-64 items-center">
      </div>
    </div>
  );
}

export default Home;
