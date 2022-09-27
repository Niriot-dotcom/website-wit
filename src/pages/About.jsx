import React from "react";

function About() {
  return (<div>

    <div>About</div> 
    border img

        <p>UP ACW-M es un capítulo estudiantil conformado por mujeres estudiantes de la Universidad 
          Panamericana campus Bonaterra Aguascalientes.</p> 
          
        <p>Vision: Fomentar un espacio para impulsar a las mujeres en el area de STEM, 
          aportando herramientas, un espacio de aprendizaje, crecimiento y desarrollo. </p>

        <p>Misión: celebrar, difundir, apoyar y promover la participación de las mujeres 
          en el area de las ciencias e ingenieria en computación. </p>
        
        <p>ACM-W es un proyecto que apoya, celebra y aboga internacionalmente por 
          la participación de las mujeres en el area de ciencias, computación e 
          ingeniería, al brindar una amplia gama de programas y servicios a los 
          miembros de ACM y trabajando en la comunidad en general para proponer las 
          contribuciones de las mujeres en STEM.
        </p>

        <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

    
  </div>
  );

}

export default About;
