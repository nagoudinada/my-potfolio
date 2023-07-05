import React from 'react'
import { BsGithub } from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";
import project1 from "../assets/car-rental.webp";

function Projects() {
  return (
    <section
      id="Projects"
      className="flex w-full  py-24 justify-center bg-bgColor"
    >
      <div className=" flex flex-col w-2/3 gap-12">
        <div className="flex flex-col gap-2 font-semibold">
          <p className="text-blue">PROJECTS</p>
          <p className="text-2xl">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row bg-white gap-8 p-4 justify-between items-center shadow-lg shadow-gray-200 rounded-2xl">
            <div className="w-1/2 overflow-hidden">
              <a className="" href="/">
                <div
                  className="rounded-2xl border-2 border-gray-50 h-64 bg-cover bg-top bg-no-repeat ease-in-out duration-[10000ms] hover:bg-bottom"
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/nagoudinada"
                  className="hover:text-blue"
                >
                  <div className="flex flex-row items-center gap-2">
                    <p>Code</p>
                    <BsGithub className="w-8 h-8" />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                  className="hover:text-blue"
                >
                  <div className="flex flex-row items-center gap-2">
                    <p>Live Demo</p>
                    <MdScreenShare className="w-8 h-8" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects