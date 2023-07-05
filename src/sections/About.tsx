import React from 'react'
import aboutMe from "../assets/aboutMe.jpg";


function About() {
  return (
    <section
      id="About"
      className="flex flex-row w-2/3 gap-12 py-24 items-center "
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
          JavaScript, React, Next, Tailwind, and SCSS. I excel in designing and
          maintaining responsive websites that offer a smooth user experience.
          My expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
      <div className="w-1/2">
        <img className="rounded-xl" src={aboutMe} alt="/" />
      </div>
    </section>
  );
}

export default About