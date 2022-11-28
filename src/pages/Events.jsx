import React from "react";
import logo from "../../src/images/logos/evento_cloudYDevOps.JPG";

function Events() {
  return (  
    <div className="w-full p-6">

    <div className="grid grid-cols-1 place-items-center gap-4">
        <div className="flex flex-wrap justify-center">
            <img className="w-80 h-80" src={logo} alt="logo" 
            class="p-1 bg-white border rounded max-w-sm"/>
       </div>
    </div>



    <div className="w-full grid grid-cols-3 gap-4">

      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-purple-300">
              Eventos Recientes
          </div>


          <div class="p-10">
          <h5 class="text-acmw-purple text-xl font-medium mb-2">Nombre del Evento</h5>
            <p class="text-gray-700 text-base mb-4">
              Info de eventos{" "}
            </p>
          </div>

          <div class="py-3 px-6 border-t border-purple-300 text-gray-600 text-xs">
              hace 2 dias
            </div>
        </div>
        
      </div>

      <div class="flex justify-center">
          <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div class="py-3 px-6 border-b border-purple-300">
              Eventos Próximos
            </div>
            <div class="p-10">
            <h5 class="text-acmw-purple text-xl font-medium mb-2">Nombre del Evento</h5>
              <p class="text-gray-700 text-base mb-4">
              Info de evento
              </p>
            </div>
            <div class="py-3 px-6 border-t border-purple-300 text-gray-600 text-xs">
              en 5 dias
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div class="py-3 px-6 border-b border-purple-300">
            Eventos Próximos
            </div>
            <div class="p-10">
            <h5 class="text-acmw-purple text-xl font-medium mb-2">Nombre del Evento</h5>
              <p class="text-gray-700 text-base mb-4">
              Info de evento {" "}
              </p>
            </div>
            <div class="py-3 px-6 border-t border-purple-300 text-gray-600 text-xs">
              en 15 dias
            </div>
          </div>
        </div>
 
      </div>
 



  </div>

  );
  

}

export default Events;
