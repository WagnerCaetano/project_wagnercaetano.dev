"use client";
import Link from "next/link";
import React from "react";

const FooterComponente = ({ shadow }) => {
  return (
    <footer className={`h-[388px] w-auto bg-backgroundSecundary ${shadow ? "shadow-md" : ""} `}>
      <div className="flex flex-row mx-auto pt-28 max-w-6xl min-w-4xl justify-between ">
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-mulish font-black text-primary">
            <p>Wagner</p>
            <p>Caetano</p>
          </div>
          <p className="text-sm text-darkerText">Software Developer</p>
        </div>
        <div className="flex flex-col gap-4 text-darkerText">
          <p className="text-xl">Skills</p>
          <p className="text-sm">Angular</p>
          <p className="text-sm">Javascript</p>
          <p className="text-sm">Java</p>
          <p className="text-sm">Git</p>
        </div>
        <div className="flex flex-col gap-4 text-darkerText">
          <p className="text-xl">Social Media</p>
          <p className="text-sm">Github</p>
          <p className="text-sm">Linkedin</p>
          <p className="text-sm">Instagram</p>
          <p className="text-sm">Vanhack</p>
        </div>
        <div className="flex flex-col gap-4 text-darkerText">
          <p className="text-xl">Portfolio</p>
          <p className="text-sm">Project 1</p>
          <p className="text-sm">Project 2</p>
          <p className="text-sm">Todos os projetos</p>
        </div>
        <div className="flex flex-col gap-4 text-darkerText">
          <p className="text-xl">Contact</p>
          <Link href={"https://wagnercaetano.dev"} className="text-sm">
            wagnercaetano.dev
          </Link>
          <Link href={"whatsapp.com"} className="text-sm">
            (19) 982252438
          </Link>
          <Link href={""} className="text-sm">
            wagnercaetano01@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponente;
