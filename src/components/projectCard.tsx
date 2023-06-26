import { ProjectListPackage } from "../constants/types";
import dayjs from "dayjs";
import Link from "next/link";
import { FunctionComponent } from "react";
import "./../app/globals.css";
import { colorTagMap } from "@/constants/color";
import { FaStar } from "react-icons/fa";

import Image from "next/image";
import GithubPlacerholder from "./../assets/github_placeholder.jpg";
import ProjectCardButtons from "./projectCardButtons";

type ProjectCardProps = {
  project: ProjectListPackage;
};

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const handleCover = () => {
    return project.projectPost?.cover ? project.projectPost.cover : GithubPlacerholder;
  };

  const handleTitle = () => {
    const repoNameList = project.projectRepository.name.split("_");
    return project.projectPost?.title && project.projectPost?.type
      ? `${project.projectPost.type} - ${project.projectPost.title}`
      : `${repoNameList[0]} - ${repoNameList[1].split("-").join(" ")}`;
  };

  const handleDescription = () => {
    return project.projectPost?.description ? project.projectPost.description : project.projectRepository.description;
  };

  return (
    <div className="oveflow-hidden max-w-6xl flex flex-col lg:flex-row rounded-xl shadow-lg bg-backgroundSecundary">
      <div className="flex-shrink-0">
        <Image className="object-cover h-64 w-96" src={handleCover()} width={384 * 2} height={256 * 2} alt={"cover"} />
      </div>
      <div className="flex min-h-[200px] w-full flex-col lg:justify-between px-4 pb-6 pt-2 text-text">
        <div className="flex-1">
          <span className="mt-2 block">
            <p className="text-xl font-medium ">{handleTitle()}</p>
          </span>
          <span className="mt-2 block">
            <p className="text-xs ">{handleDescription()}</p>
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4 justify-end lg:justify-normal">
            {project.projectPost?.tags.map((tag) => (
              <span key={tag.id} className={`${colorTagMap[tag.name]} font-bold rounded-lg bg-white px-2 py-1 text-xs`}>
                {tag.name}
              </span>
            ))}
            <div className="flex flex-row items-center gap-2">
              <p>{project.projectRepository?.stars ? project.projectRepository?.stars : 0}</p>
              <FaStar className="text-primary" width="32px" />
            </div>
          </div>
          <ProjectCardButtons project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

