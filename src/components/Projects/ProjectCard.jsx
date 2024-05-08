import React, { useState } from "react";
import { useEffect } from "react";

function ProjectCard(props) {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    const modal = document.getElementById(`project-modal-${props.project.id}`);
    modal?.classList.toggle("opacity-0");
    modal?.classList.toggle("pointer-events-none");
    setShow(!show);
  };

  useEffect(() => {
    const overlay = document.getElementById(
      `project-modal-overlay-${props.project.id}`
    );
    overlay?.addEventListener("click", toggleModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, props.project.id]);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-64 items-center">
      <img
        src={require(`../../images/icons/${props.project.image}`)}
        alt=""
        className="h-20 w-20 m-6"
      />
      <h2 className="text-center px-2 pb-5">{props.project.name}</h2>

      <button
        onClick={toggleModal}
        className="bg-wit-blue text-wit-blue w-full h-10 rounded-none text-center hover:bg-wit-blue hover:text-white transition-all duration-500"
      >
        Saber mas
      </button>

      {show && (
        <div
          id={`project-modal-${props.project.id}`}
          className="fixed w-full h-full top-0 left-0 flex items-center justify-center"
        >
          <div
            id={`project-modal-overlay-${props.project.id}`}
            className="absolute w-full h-full bg-gray-900 opacity-50"
          />
          <div className="modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 px-6">
              <section className="hero container max-w-screen-lg mx-auto p-3">
                <img
                  className="mx-auto h-72 rounded-xl"
                  src={require(`../../images/covers/${props.project.image}`)}
                  alt=""
                />
              </section>

              <div className="text-3xl text-center w-full h-full">
                <h1>{props.project.name}</h1>
              </div>

              <div className="text-md text-gray-600 text-center w-full h-full">
                <h2>{props.project.room}</h2>
              </div>

              <div className="text-md text-gray-600 text-center w-full h-full">
                <h2>{props.project.hours}</h2>
              </div>

              <div className="text-md text-justify p-3">
                {props.project.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
