import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="fixed flex flex-row justify-between items-center py-6 px-12 bg-white text-black drop-shadow-md w-full">
      <p className="font-bold text-lg">Nada.dev</p>
      <div className="flex gap-4 font-semibold">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-blue"
        >
          Home
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-blue"
        >
          About
        </Link>
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-blue"
        >
          Projects
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-blue"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
