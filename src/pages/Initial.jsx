import React, { useEffect, useState } from "react";
import memberGroups from "../db/get-members-2024.json";
import WomanImg from "../images/woman.png";
import LogoImg from "../images/logos/logo.png";
import { COLORS } from "../constants/strings";

function Initial() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedMember, setSelectedMember] = useState({
    name: "",
    image: "Yoalli-Rodriguez.jpg",
    position: "",
    year: "",
    about: "",
  });

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    document.getElementById("member-modal").showModal();
  };

  useEffect(() => {
    const img = require("../images/icons/woman.png");
    let tempArray = [];

    memberGroups
      .filter((group) => group.category === "ACTIVE_MEMBERS")
      .map((group) =>
        group.members.forEach((member) => {
          let imgx;
          try {
            imgx = require(`../images/members/${member.image}`);
          } catch (e) {
            imgx = img;
          }
          tempArray = [...tempArray, imgx];
        })
      );

    setImages(tempArray);
    setIsOpen(true);
  }, []);

  const InstagramSvg = ({ color }) => {
    return (
      <svg
        className="w-full h-full"
        viewBox="0 0 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
            fill={color}
          ></path>
        </g>
      </svg>
    );
  };

  return (
    <div className="w-full h-full flex flex-col bg-wit-blue">
      <section
        id="general-description"
        className="bg-wit-blue text-white relative flex flex-col"
      >
        {/* Title */}
        <div className="z-10 text-xl p-5 flex items-center h-[24vh] xs:h-[20vh]">
          <p className="text-6xl w-2/3">
            ¡Hola!
            {/* <br />
            Queremos presentarnos contigo :D. */}
          </p>
        </div>

        {/* Description */}
        <div className="z-10 text-lg xs:text-xl p-5">
          <p className="text-left">
            Nosotras somos una comunidad de mujeres en ingeniería.
          </p>
          <br />
          <p className="text-left">
            Buscamos herramientas que nos beneficie a nivel profesional y
            personal, a manera de pláticas, talleres, eventos, proyectos. De
            igual modo, queremos impulsar a las mujeres dentro de áreas de STEM.
          </p>
        </div>

        {/* Woman */}
        <div className="absolute top-0 w-full z-0 flex pr-3 justify-end">
          <img
            alt=""
            className={`w-1/3 ${`transform transition-all duration-700 ease-in-out opacity-0 ${
              isOpen ? "opacity-100 translate-y-0" : "-translate-y-full"
            }`}`}
            src={WomanImg}
          />
        </div>

        {/* Logo */}
        <div className="w-full z-0 flex">
          <img
            alt=""
            className="w-full h-full object-cover scale-90"
            src={LogoImg}
          />
        </div>
      </section>
      <section
        id="social-media"
        className="bg-wit-blue text-white flex justify-around items-center py-5 mx-3"
      >
        <p className="whitespace-nowrap text-sm mr-2 xs:text-base">
          Síguenos en Instagram
        </p>
        <div className="w-fit flex space-x-1 items-center underline rounded-xl py-2 px-3 bg-white shadow-lg shadow-wit-green">
          <div className="h-5 mr-1">
            <InstagramSvg color={COLORS.blue} />
          </div>
          <a
            className="text-wit-blue font-bold"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/wit_women/"
          >
            wit_women
          </a>
        </div>
      </section>
      <section id="about-us" className="relative p-3 w-full bg-wit-light">
        <h1 className="my-5 mb-9 text-4xl text-black">¡Conócenos!</h1>
        {memberGroups
          .filter((group) => group.category === "ACTIVE_MEMBERS")
          .map((group, i) => {
            return (
              <div
                className="w-full grid grid-cols-3 gap-3"
                key={`members-group-${i}`}
              >
                {group.members.map((member, index) => {
                  return (
                    <div
                      className="bg-wit-green text-white cursor-pointer rounded-lg flex flex-col items-center py-3 hover:shadow-xl hover:scale-90 transition-all duration-300 p-1 overflow-hidden"
                      onClick={() => handleSelectMember(member)}
                      key={`members-${i}-${index}-`}
                    >
                      <div class="flex w-[4.5rem] h-[4.5rem] xs:w-24 xs:h-24 shrink-0 grow-0 items-center justify-center rounded-full overflow-hidden">
                        <img
                          alt="profile"
                          src={images[index]}
                          className="w-full h-full object-cover origin-top"
                        />
                      </div>
                      <h1 className="mt-2 mx-1">{member.name}</h1>
                    </div>
                  );
                })}
              </div>
            );
          })}

        {/* modal */}
        {selectedMember && (
          <dialog id="member-modal" className="modal">
            <div className="modal-box flex flex-col bg-transparent shadow-none">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost bg-wit-green hover:bg-wit-blue z-10 text-white absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <div className="overflow-hidden relative rounded-2xl shadow-xl">
                <img
                  alt="profile"
                  src={
                    selectedMember.image === ""
                      ? require("../images/icons/woman.png")
                      : require(`../images/members/${selectedMember.image}`)
                  }
                  className="object-cover w-full h-full"
                />

                <div className="w-full h-[20vh] absolute bottom-0 bg-gradient-to-t from-black"></div>
                <div className="absolute z-20 bottom-0 p-3">
                  <h1 className="text-white text-left text-3xl">
                    {selectedMember.name}
                  </h1>
                  <div className="border-2 border-wit-green rounded-full w-[90%] my-3"></div>
                  <p className="text-white text-left w-4/5 self-start text-xl">
                    {selectedMember.about}
                  </p>
                </div>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button></button>
            </form>
          </dialog>
        )}
      </section>
      <section id="register-form" className="w-full mt-5 mb-24">
        <div className="w-full h-full">
          <a
            target="_blank"
            href="https://forms.gle/KZLokB3PcQhYjCbt8"
            rel="noreferrer"
            className="font-semibold tracking-wide inline-block text-lg px-6 py-4 leading-none border-4 border-wit-green rounded-full bg-wit-green text-white hover:border-transparent hover:bg-white hover:text-wit-blue hover:shadow-2xl mt-4 lg:mt-0 transition-all duration-300"
          >
            Registrarme
          </a>
        </div>
      </section>
    </div>
  );
}

export default Initial;
