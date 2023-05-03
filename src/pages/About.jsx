import React from "react";

function About() {
  return (
    <div className="h-56 grid grid-cols-2 place-items-center gap-4 content-center">
      <div class="flex justify-center h-full">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">
            <h5 class="text-acmw-purple text-xl font-medium mb-2">Misión</h5>
          </div>
          <div class="p-4">
            <p class="text-gray-700 text-base mb-4">
              Celebrar, difundir, apoyar y promover la participación de las
              mujeres en el area de las ciencias e ingenieria en computación.{" "}
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center h-full">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">
            <h5 class="text-acmw-purple text-xl font-medium mb-2">Visión</h5>
          </div>
          <div class="p-4">
            <p class="text-gray-700 text-base mb-4">
              Fomentar un espacio para impulsar a las mujeres en el area de
              STEM, aportando herramientas, un espacio de aprendizaje,
              crecimiento y desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
