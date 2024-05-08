import React, { useState } from "react";
import memberGroups from "../db/get-members-2024.json";

function Initial() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState({
    name: "Yoalli Rodríguez",
    position: "Co-tesorera, y lider del equipo de eventos",
    year: "2024",
    about:
      "Le gusta salir a correr y/o caminar, Marvel y conocer nuevos lugares para comer diferentes",
  });

  const handleSelectMember = (member) => {
    setOpenModal(true);
  };

  return (
    <div className="w-full p-6">
      <section id="general-description" className="h-[70vh]">
        <p>
          ¡Hola! Queremos presentarnos contigo :D.
          <br />
          Nosotras somos una comunidad de mujeres en ingeniería.
          <br />
          Buscamos herramientas que nos beneficie a nivel profesional y
          personal, a manera de pláticas, talleres, eventos, proyectos. De igual
          modo, queremos fomentar las mujeres dentro de áreas de STEM.
        </p>
      </section>
      <section id="social-media">
        <p>Síguenos en Instagram</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/wit_women/"
        >
          @wit_women
        </a>
      </section>
      <section id="about-us" className="relative">
        <h1>Conócenos</h1>
        {memberGroups
          .filter((group) => group.category === "ACTIVE_MEMBERS")
          .map((group, index) => {
            return (
              <div className="w-full h-[80vh] grid grid-cols-3 gap-3">
                {group.members.map((member) => {
                  return (
                    <div
                      className="border border-blue-300 cursor-pointer"
                      // onClick={handleSelectMember(member)}
                    >
                      <h1>{member.name}</h1>
                      <img
                        alt="profile-picture"
                        src={member.name.replace(" ", "-")}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

        {/* modal */}
        {/* <div className="z-10 absolute bg-black opacity-80 top-0 w-full h-full">
          <img alt="profile-picture" />
          <h1 className="text-white">{selectedMember.name}</h1>
          <p className="text-white">{selectedMember.about}</p>
        </div> */}
      </section>
      <section id="register-form"></section>
    </div>
  );
}

export default Initial;
