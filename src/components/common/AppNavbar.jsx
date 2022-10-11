import React from "react";
import imgLogoAcmw from "../../images/logos/Logo_Panamericana-ACM-W_Color_Horizontal.png";

function AppNavbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-acmw-pink p-6 rounded-b-3xl">
      <div className="flex items-center flex-shrink-0">
        <img
          className="fill-current h-24 w-full mr-2"
          src={imgLogoAcmw}
          alt="logo"
        />
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <a
            href="/home"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-acmw-purple hover:text-white mr-16 transition-all duration-300"
          >
            Inicio
          </a>
          <a
            href="/members"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-acmw-purple hover:text-white mr-16 transition-all duration-300"
          >
            Miembros
          </a>
          <a
            href="/projects"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-acmw-purple hover:text-white mr-16 transition-all duration-300"
          >
            Proyectos
          </a>
          <a
            href="/events"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-acmw-purple hover:text-white mr-16 transition-all duration-300"
          >
            Eventos
          </a>
          <a
            href="/contact"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-acmw-purple hover:text-white mr-16 transition-all duration-300"
          >
            Contacto
          </a>
        </div>
        <div>
          <a
            href="/register"
            className="inline-block text-lg px-6 py-4 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-acmw-purple hover:bg-white mt-4 lg:mt-0 transition-all duration-300"
          >
            Registrarme
          </a>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
