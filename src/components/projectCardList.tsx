'use client';

import React, { FunctionComponent, useEffect, useReducer, useState } from 'react';
import ProjectCard from './projectCard';
import { ProjectListPackage } from '@/constants/types';

type ProjectListProps = {
  data: ProjectListPackage[];
};

const ProjectPostList: FunctionComponent<ProjectListProps> = ({ data }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [topicListsUnique, setTopicListsUnique] = useState<string[]>([]);

  useEffect(() => {
    setTopicListsUnique(
      data
        .map((project) => project.projectRepository.topics)
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index),
    );
  }, []);

  const [currentSliceEnd, setCurrentSliceEnd] = React.useState(6);

  const nextPage = () => {
    setCurrentSliceEnd(currentSliceEnd + 3);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto max-w-4xl gap-x-4 gap-y-2 mt-2">
        {topicListsUnique.map((topic) => (
          <button
            onClick={() => (selectedTopic == topic ? setSelectedTopic('') : setSelectedTopic(topic))}
            key={topic}
            className={`px-4 rounded shadow-md hover:bg-opacity-70 hover:shadow-none ${
              selectedTopic == topic ? 'bg-secondary text-primary shadow-none' : 'bg-backgroundSecundary text-text'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
      <div className={`mx-auto ${currentSliceEnd < data.length && selectedTopic == '' ? 'mt-12' : 'my-12'} grid grid-cols-1 gap-6`}>
        {(selectedTopic != '' ? data.filter((project) => project.projectRepository.topics.includes(selectedTopic)) : data.slice(0, currentSliceEnd)).map((project) => (
          <ProjectCard key={project.projectRepository.name} project={project} />
        ))}
      </div>
      {currentSliceEnd < data.length && selectedTopic == '' && (
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
