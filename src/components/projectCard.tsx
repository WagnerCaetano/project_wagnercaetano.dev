import { ProjectListPackage } from '../constants/types';
import dayjs from 'dayjs';
import { FunctionComponent } from 'react';
import './../app/globals.css';
import { FaStar } from 'react-icons/fa';

import Image from 'next/image';
import GithubPlacerholder from './../assets/github_placeholder.jpg';
import ProjectCardButtons from './projectCardButtons';
import DinamicColoredTag from './dinamicColoredTag';
import { generateShimmerToBase64, generateShimmer } from '@/services/shimmerHelper.service';

type ProjectCardProps = {
  project: ProjectListPackage;
};

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const handleCover = () => {
    return project.projectPost?.cover ? `https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/${project.projectPost.id}.png` : GithubPlacerholder;
  };

  const handleTitle = () => {
    const repoNameList = project.projectRepository.name.split('_');
    if (project.projectPost?.title && project.projectPost?.type) {
      return `${project.projectPost.type} - ${project.projectPost.title}`;
    } else if (repoNameList.length > 1) {
      return repoNameList.map((repoName) => repoName.charAt(0).toUpperCase() + repoName.slice(1)).join(' ');
    }
    return repoNameList[0];
  };

  const handleDescription = () => {
    return project.projectPost?.description ? project.projectPost.description : project.projectRepository.description;
  };

  const handleTopics = () => {
    return project.projectRepository.topics;
  };

  return (
    <div className="oveflow-hidden max-w-6xl flex flex-col lg:flex-row rounded-xl shadow-lg bg-backgroundSecundary">
      <div className="flex-shrink-0">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(384 * 2, 256 * 2))}`}
          className="object-cover h-64 w-96 transition-all duration-250 ease-in-out"
          src={handleCover()}
          width={384 * 2}
          height={256 * 2}
          alt={'Project Card Cover'}
        />
      </div>
      <div className="flex min-h-[200px] w-full flex-col lg:justify-between px-4 pb-6 pt-2 text-text">
        <div className="flex-1">
          <p className="mt-2 text-xl font-medium ">{handleTitle()}</p>
          <p className="mt-2 text-xs">{handleDescription()}</p>
          <p className="mt-2 text-xs border-primary border-1 p-2 w-fit rounded">{handleTopics()}</p>
        </div>
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-1 lg:gap-4 justify-end lg:justify-normal">
            <div className="mt-2 block space-x-1 lg:space-x-3">
              {project.projectPost?.tags.map((tag) => (
                <DinamicColoredTag key={tag.id} tagColored={tag} />
              ))}
            </div>
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

