import React from "react";
import 'flowbite';
import logo from "../../src/images/logos/Logo_Panamericana-ACM-W_Color_Horizontal_Light.png";

function Home(){
  return (
    
    <div className="h-70 grid grid-cols-2 place-items-center gap-4">
      
      <div className="content-center align-middle items-center  ">
      <br></br>
      <div className="card rounded-xl hover:-translate-y-1 hover:scale-110 duration-300 px-5 py-12  ml-20 text-center shadow-2xl bg-slate-100 h-100" >
      <h3 className="font-bold text-xl">ACM-W Panamericana</h3>
        <h2 className="font-medium text-lg">¿Quienes somos?</h2>
        <h1 className="font-normal text-lg">ACM-W es una asociación con la visión de motivar a mujeres </h1>
        <p className="font-light text-justify text-lg">
        ACM-W se centra en influenciar y apoyar la participación de mujeres en las area tecnologicas, brindando diferentes tipo de programas especilizados a cualquier interes con respecto a las tecnologias.
        En adición ACM-W se encarga de dar servicios a todos nuestros integrantes que trabajan en nuestra comunidad promoviendo contribuciones de mujeres en las ciencias.
        </p>
      </div>
      </div>
      <div className="items-center " >
      <br></br>
        <img className="rounded-lg  bg-acmw-purple hover:-translate-y-1 hover:scale-110 duration-300 max-w-sm" src={logo} alt="logo"  />
      </div>
      <div className="flex flex-col bg-acmw-purple rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-64 items-center">
      </div>





     {/* Apartado para misión y visión */}
     <script src="../path/to/flowbite/dist/flowbite.js"></script>
     <br></br>
      <div className="">
        <div className="rounded overflow-hidden shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300 max-w-2xl max-h-100 bg-slate-100">
        <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2 ">Misión</div>
        <p className="text-gray-700 text-justify font-normal text-lg">
          Nuestra misión como organización es promover el movimiento femenino y el empoderamiento de la mujer en todas la areas tecnologicas y más especifivcamente la participación de estas mismas en ingenierias.
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mujeres</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tecnologías</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Feminismo</span>
        </div>
        </div>
      </div>

      <div>
        <div className="rounded overflow-hidden shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300 max-w-2xl bg-slate-100">
          
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Visión</div>
        <p className="text-gray-700 text-lg text-justify font-normal">
          Nuesta visión es cambiar el estigma social que se tiene de la mujer en estas areas de la tecnología.
        </p>
        
        </div>
        
        <div className="px-6 pt-4 pb-2 bg-slate-100">
        <p className="text-justify text-lg font-normal py-2">Para más información ingrese a nuestro apartados de misión/visión:</p>
          <a className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300 " href="/">Ver más</a>
        </div>
        </div>
      </div>


      {/* Apartado para proyectos */}

      <div >
<div class="max-w-2xl mx-auto">

	<div id="default-carousel" class="relative" data-carousel="static">
        
        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                
                <img  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" src={logo} alt="..."/>
            </div>
            
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img  src={logo} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
            
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img  src={logo} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"  alt="..." />
            </div>
        </div>
       
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
        
        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div>

	<p class="mt-5">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
		more
		by going to the official <a class="text-blue-600 hover:underline"
			href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
	</p>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>


      


















      </div>


    </div>

    
  );
}

export default Home;
