import React from 'react'

function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center p-8 px-12 bg-white text-black drop-shadow-md">
      <p className="font-bold text-lg">Nada.dev</p>
      <div className="flex gap-4 transition delay-150 font-semibold">
        <a href="#Home" className=" hover:text-blue">
          Home
        </a>
        <a href="#About" className=" hover:text-blue">
          About
        </a>
        <a href="#Projects" className=" hover:text-blue">
          Projects
        </a>
        <a href="#Contact" className=" hover:text-blue">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar