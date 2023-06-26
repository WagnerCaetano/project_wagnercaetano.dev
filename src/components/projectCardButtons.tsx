"use client";
import { ProjectListPackage } from "@/constants/types";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

type ProjectCardButtonsProps = {
  project: ProjectListPackage;
};

const ProjectCardButtons: FunctionComponent<ProjectCardButtonsProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative text-primary">
        <button
          onClick={toggleDropdown}
          className="flex items-left justify-center text-xl font-lora font-normal focus:outline-none lg:hidden"
        >
          See more
        </button>
        <div
          className={`absolute w-48 gap-4 z-10 top-10 flex-col right-0 bg-backgroundSecundary py-2 px-4 rounded shadow ${
            isOpen ? "flex" : "hidden"
          } lg:hidden text-primary`}
        >
          {(project.projectPost?.github_url || project.projectRepository.url) && (
            <Link
              href={project.projectPost?.github_url ? project.projectPost?.github_url : project.projectRepository.url}
              className="text-text"
            >
              Github
            </Link>
          )}
          {project.projectPost?.vercel_url && (
            <Link href={project.projectPost.vercel_url} className="text-text">
              Vercel
            </Link>
          )}
          {project.projectPost?.slug && (
            <Link href={`/post/project/${project.projectPost.slug}`} className="text-text">
              Visit project page
            </Link>
          )}
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-4 items-center">
        {(project.projectPost?.github_url || project.projectRepository.url) && (
          <Link
            href={project.projectPost?.github_url ? project.projectPost?.github_url : project.projectRepository.url}
            className="text-text hover:text-primary hover-delay"
          >
            Github
          </Link>
        )}
        {project.projectPost?.vercel_url && (
          <Link href={project.projectPost.vercel_url} className="text-text hover:text-primary hover-delay">
            Vercel
          </Link>
        )}
        {project.projectPost?.slug && (
          <Link
            href={`/post/project/${project.projectPost.slug}`}
            className="rounded border border-primary px-2 py-3 text-center text-primary hover:font-bold hover-delay"
          >
            Visit project page
          </Link>
        )}
      </div>
    </>
  );
};

export default ProjectCardButtons;
