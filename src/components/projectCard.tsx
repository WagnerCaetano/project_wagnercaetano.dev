import { ProjectListPackage } from "../constants/types";
import dayjs from "dayjs";
import Link from "next/link";
import { FunctionComponent } from "react";
import "./../app/globals.css";
import { colorTagMap } from "@/constants/color";
import { FaStar } from "react-icons/fa";

import Image from "next/image";
import GithubPlacerholder from "./../assets/github_placeholder.jpg";

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
    <div className="oveflow-hidden flex flex-row rounded-xl shadow-lg bg-backgroundSecundary">
      <div className="flex-shrink-0">
        <Image className="object-cover h-64 w-96" src={handleCover()} width={384 * 2} height={256 * 2} alt={"cover"} />
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 pb-6 pt-2 text-text">
        <div className="flex-1">
          <span className="mt-2 block">
            <p className="text-xl font-medium ">{handleTitle()}</p>
          </span>
          <span className="mt-2 block">
            <p className="text-xs ">{handleDescription()}</p>
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4 align-center">
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
          <div className="flex flex-row gap-4 items-center">
            {(project.projectPost?.github_url || project.projectRepository.url) && (
              <Link
                href={project.projectPost?.github_url ? project.projectPost?.github_url : project.projectRepository.url}
                className="text-text hover:text-primary hover-delay"
              >
                Check on Github
              </Link>
            )}
            {project.projectPost?.vercel_url && (
              <Link href={project.projectPost.vercel_url} className="text-text hover:text-primary hover-delay">
                Check on Vercel
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
