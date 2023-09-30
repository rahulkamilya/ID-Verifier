import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto p-5 flex justify-between md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
          // Added cursor-pointer class here
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">VeriIDy</span>
          </a>
          <nav className="hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white cursor-pointer">Home</a>
            <a className="mr-5 hover:text-white cursor-pointer">Team</a>
            <a className="mr-5 hover:text-white cursor-pointer">About</a>
          </nav>
          <button
            className="hidden md:block bg-[#245FFF] my-1 text-white font-semibold px-4 py-2 rounded-3xl hover:bg-[#0736B3] hover:text-white cursor-pointer"
          // Added cursor-pointer class here
          >
            Button
          </button>
          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="md:hidden block flex flex-col bg-gray-900 text-white px-4 py-2">
          <nav className=" flex flex-col items-center text-base">
            <a className="text-xl py-1 font-semibold cursor-pointer">Home</a>
            <a className="text-xl py-1 font-semibold cursor-pointer">Team</a>
            <a className="text-xl py-1 font-semibold cursor-pointer">About</a>
          </nav>
          <button
            className="bg-[#245FFF] my-1 text-white w-full font-semibold px-4 py-2 rounded-3xl hover:bg-[#0736B3] hover:text-white cursor-pointer"
          // Added cursor-pointer class here
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
