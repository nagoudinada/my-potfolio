import React from "react";
import NavBar from "./components/NavBar";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdScreenShare, MdEmail } from "react-icons/md";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="flex flex-col items-center text-black">
      <NavBar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <footer className="flex bg-black w-full py-10 text-white justify-center">
        <div className="flex flex-row w-2/3 justify-between">
          <p>Copyright © 2023. All rights are reserved</p>
          <div className="flex flex-row items-center gap-4 ">
            <a
              href="https://www.linkedin.com/in/nada-nagoudi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="w-6 h-6 transition duration-300 hover:scale-125" />
            </a>
            <a
              href="https://github.com/nagoudinada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-6 h-6 transition duration-300 hover:scale-125" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
