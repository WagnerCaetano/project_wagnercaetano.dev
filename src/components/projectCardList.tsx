'use client';

import React, { FunctionComponent } from 'react';
import ProjectCard from './projectCard';
import { ProjectListPackage } from '@/constants/types';

type ProjectListProps = {
  data: ProjectListPackage[];
};

const ProjectPostList: FunctionComponent<ProjectListProps> = ({ data }) => {
  const [currentSliceEnd, setCurrentSliceEnd] = React.useState(6);

  const nextPage = () => {
    setCurrentSliceEnd(currentSliceEnd + 3);
  };

  return (
    <>
      <div className="mx-auto mt-12 grid grid-cols-1 gap-6">
        {data.slice(0, currentSliceEnd).map((project) => (
          <ProjectCard key={project.projectRepository.name} project={project} />
        ))}
      </div>
      {currentSliceEnd < data.length && (
        <div className="flex flex-row place-content-center p-4">
          <button className="px-4 py-2 rounded bg-backgroundSecundary text-text hover:text-primary hover:bg-secondary hover-delay" onClick={nextPage}>
            Load more projects
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectPostList;
