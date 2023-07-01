import React from "react";
import NavBar from "./components/NavBar";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import picture from "./assets/picture.jpg";
import html from "./assets/html.6e7b1b463015c056aeb9a624c8dc2876.svg"
import css from "./assets/css3.9cecabbf6ce67609c48bc4f280a11002.svg"
import js from "./assets/javascript.de4c2594613e34b15666206bbede7327.svg"
import react from "./assets/react.afac9c43724070bf6674f2692b7356a9.svg";
import nextjs from "./assets/nextjs-icon.svg";
import tailwind from "./assets/tailwind.79614a5f61617ba49a0891494521226b.svg";
import OneSkill from "./components/OneSkill";


function App() {
  return (
    <div className="flex flex-col items-center text-black">
      <NavBar />
      <section className="flex flex-col justify-center gap-16 w-3/4 py-8 ">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-col w-1/2 gap-8">
            <p className="font-bold text-6xl">Front-End Developer</p>
            <p>
              Hi, I'm Nada Nagoudi. A passionate Front-end Developer based in
              Algiers, Algeria. 📍
            </p>
            <div className="flex flex-row items-center gap-4 transition delay-150">
              <a href="https://www.linkedin.com/in/nada-nagoudi/">
                <BsLinkedin className="w-8 h-8 hover:text-blue" />
              </a>
              <a href="https://github.com/nagoudinada/">
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
    </div>
  );
}

export default App;
