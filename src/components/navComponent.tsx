"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavComponent = ({ shadow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`h-28 w-auto bg-backgroundSecundary ${shadow ? "shadow-md" : ""} py-4`}>
      <div className="flex flex-row mx-auto max-w-6xl min-w-4xl justify-between text-primary">
        <div className="text-3xl font-mulish font-black">
          <p>Wagner</p>
          <p>Caetano</p>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center text-4xl font-lora font-normal focus:outline-none lg:hidden"
          >
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-2" viewBox="0 0 20 20" fill="currentColor">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M2.75 4A1.75 1.75 0 014.5 2.25h11A1.75 1.75 0 0117.25 4v.74a1.75 1.75 0 01-.47 1.18l-6.18 6.18a1.75 1.75 0 01-2.36.08L2.72 7.68A1.75 1.75 0 012.25 6.5V4.26C2.25 4.1 2.34 4 2.47 4h.28zm1.98.25c0-.138.112-.25.25-.25h11c.138 0 .25.112.25.25v.74a.25.25 0 01-.25.25h-.74a.75.75 0 00-.53.22L8 13.36l-4.98-4.99a.75.75 0 00-.53-.22H2.25a.25.25 0 01-.25-.25v-.74zm0 3.5a.25.25 0 01.25-.25h11a.25.25 0 01.25.25v.74a.25.25 0 01-.25.25h-11a.25.25 0 01-.25-.25v-.74z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.75 6.75a.75.75 0 01.75-.75h9.5a.75.75 0 110 1.5h-9.5a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h9.5a.75.75 0 110 1.5h-9.5a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h9.5a.75.75 0 110 1.5h-9.5a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
          <div
            className={`absolute top-14 right-0 bg-backgroundSecundary py-2 px-4 rounded shadow-md ${
              isOpen ? "block" : "hidden"
            } lg:hidden`}
          >
            <Link href={"/"}>
              <p className="block mb-2">About</p>
            </Link>
            <Link href={"/"}>
              <p className="block mb-2">Portfolio</p>
            </Link>
            <Link href={"/"}>
              <p className="block mb-2">Skills</p>
            </Link>
            <Link href={"/"}>
              <p className="block mb-2">Contact</p>
            </Link>
            <Link href={"/"}>
              <p className="rounded border border-primary p-2 text-center">Download Resume</p>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-6 text-xl font-lora font-normal">
          <Link href={"/"}>
            <p>About</p>
          </Link>
          <Link href={"/"}>
            <p>Portfolio</p>
          </Link>
          <Link href={"/"}>
            <p>Skills</p>
          </Link>
          <Link href={"/"}>
            <p>Contact</p>
          </Link>
          <Link href={"/"}>
            <p className="rounded border border-primary p-2 text-center">Download Resume</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
