import React from "react";
import NavBar from "./components/NavBar";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";
import picture from "./assets/picture.jpg";
import html from "./assets/html.6e7b1b463015c056aeb9a624c8dc2876.svg";
import css from "./assets/css3.9cecabbf6ce67609c48bc4f280a11002.svg";
import js from "./assets/javascript.de4c2594613e34b15666206bbede7327.svg";
import react from "./assets/react.afac9c43724070bf6674f2692b7356a9.svg";
import nextjs from "./assets/nextjs-icon.svg";
import tailwind from "./assets/tailwind.79614a5f61617ba49a0891494521226b.svg";
import OneSkill from "./components/OneSkill";
import aboutMe from "./assets/aboutMe.jpg";
import project1 from "./assets/car-rental.webp";

function App() {
  return (
    <div className="flex flex-col items-center text-black">
      <NavBar />
      <section
        id="Home"
        className="flex flex-col justify-center gap-16 w-3/4 py-28"
      >
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-col w-1/2 gap-8">
            <p className="font-bold text-6xl">Front-End Developer</p>
            <p>
              Hi, I'm Nada Nagoudi. A passionate Front-end Developer based in
              Algiers, Algeria. 📍
            </p>
            <div className="flex flex-row items-center gap-4 transition delay-150">
              <a
                href="https://www.linkedin.com/in/nada-nagoudi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="w-8 h-8 hover:text-blue" />
              </a>
              <a
                href="https://github.com/nagoudinada/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="w-8 h-8 hover:text-blue" />
              </a>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src={picture}
              alt="/"
              className="w-1/2 rounded-full border border-black"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <p className="font-semibold">Tech Stack |</p>
          <div className="flex flex-row gap-4">
            <OneSkill src={html} />
            <OneSkill src={css} />
            <OneSkill src={js} />
            <OneSkill src={react} />
            <OneSkill src={nextjs} />
            <OneSkill src={tailwind} />
          </div>
        </div>
      </section>
      <section
        id="About"
        className="flex flex-row w-3/4 gap-12 py-24 items-center "
      >
        <div className="w-1/2 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-blue">ABOUT ME</p>
            <p className="font-bold text-2xl">
              A dedicated Front-end Developer based in Algiers, Algeria 📍
            </p>
          </div>

          <p className="text-sm">
            As a Freshly computer science graduate and a Junior Front-End
            Developer, I possess an impressive arsenal of skills in HTML, CSS,
            JavaScript, React, Next, Tailwind, and SCSS. I excel in designing
            and maintaining responsive websites that offer a smooth user
            experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
        <div className="w-1/2 ">
          <img className="rounded-xl" src={aboutMe} alt="/" />
        </div>
      </section>
      <section id="Projects" className="flex flex-col w-3/4 gap-12 py-24">
        <div className="flex flex-col gap-2 font-semibold">
          <p className="text-blue">PROJECTS</p>
          <p className="text-2xl">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-8 p-4 justify-between items-center shadow-lg shadow-gray-200 rounded-2xl">
            <div className="w-1/2 overflow-hidden">
              <a className="" href="/">
                <div
                  className="rounded-2xl h-64 bg-cover bg-top bg-no-repeat "
                  style={{ backgroundImage: `url(${project1})` }}
                ></div>
              </a>
            </div>

            <div className="flex flex-col items-center gap-4 w-1/2 h-fit">
              <p className="font-bold text-lg">NADA ECOMMERCE 🛒</p>
              <p className="text-gray-600 text-center w-2/3">
                With a focus on simplicity and clean design, this store
                prioritize user experience, making it easy for customers to find
                and purchase the products they need.
              </p>
              <div className="flex flex-row gap-4 items-center font-semibold">
                <p className="p-2 rounded-md shadow-md">React</p>
                <p className="p-2 rounded-md shadow-md">Tailwind CSS</p>
              </div>
              <div className="flex flex-row gap-12 items-center font-semibold pt-8">
                <a href="/" className="hover:text-blue">
                  <div className="flex flex-row items-center gap-2">
                    <p>Code</p>
                    <BsGithub className="w-8 h-8" />
                  </div>
                </a>
                <a href="/" className="hover:text-blue">
                  <div className="flex flex-row items-center gap-2">
                    <p>Live Demo</p>
                    <MdScreenShare className="w-8 h-8" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
