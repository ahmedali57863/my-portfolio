import React from "react";

const NavBar = ({ scrollToSection, refs }) => {
  const { homeRef, aboutRef, educationRef, projectsRef, contactRef } = refs;
  const menuItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Education", ref: educationRef },
    { name: "Projects", ref: projectsRef },
  ];

  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center top-4">
      <nav className="flex items-center justify-between w-[90%] max-w-6xl px-8 py-4 border bg-fuchsia-400/70 backdrop-blur-md rounded-2xl border-white/10">
        <h1
          onClick={() => scrollToSection(homeRef)}
          className="text-2xl tracking-wide transition-colors cursor-pointer font-supernova hover:text-pink-200"
        >
          Ahmed<span className="text-yellow-300">.</span>
        </h1>

        <ul className="items-center hidden gap-6 text-sm md:flex">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => scrollToSection(item.ref)}
                className="px-4 py-2 transition-colors rounded-full hover:bg-pink-200/20 hover:text-pink-200"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection(contactRef)}
          className="px-4 py-2 text-sm font-medium text-black transition bg-white rounded-full hover:bg-fuchsia-300 hover:text-white"
        >
          Contact Me
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
