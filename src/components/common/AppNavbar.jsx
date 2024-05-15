import React from "react";
import imgLogo from "../../images/logos/logo.png";

function AppNavbar() {
  return (
    <nav className="hidden md:flex items-center justify-between flex-wrap bg-wit-blue p-6 rounded-b-3xl">
      <div className="flex items-center flex-shrink-0 w-1/6">
        <img className="h-24 w-full object-cover" src={imgLogo} alt="logo" />
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:underline hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <a
            href="/"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-16 transition-all duration-300"
          >
            Inicio
          </a>
          <a
            href="/members"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-16 transition-all duration-300"
          >
            Miembros
          </a>
          <a
            href="/projects"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-16 transition-all duration-300"
          >
            Proyectos
          </a>
          <a
            href="/events"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-16 transition-all duration-300"
          >
            Eventos
          </a>
          <a
            href="/contact"
            className="font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-16 transition-all duration-300"
          >
            Contacto
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://forms.gle/1YnunymZhUTWQkUb9"
            rel="noreferrer"
            className="font-semibold tracking-wide inline-block text-lg px-6 py-4 leading-none border-4 rounded-full text-white border-white hover:border-transparent hover:bg-white hover:text-wit-blue hover:shadow-2xl mt-4 lg:mt-0 transition-all duration-300"
          >
            Registrarme
          </a>
        </div>
      </div>

      {/* MOBILE */}
      {/* <div className="text-wit-blue md:hidden h-32">HOLIS</div> */}
    </nav>
  );
}

export default AppNavbar;
