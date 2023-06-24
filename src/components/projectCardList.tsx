"use client";

import React from "react";
import ProjectCard from "./projectCard";

export default function ProjectPostList({ posts }) {
  const [currentSliceEnd, setCurrentSliceEnd] = React.useState(6);

  const nextPage = () => {
    setCurrentSliceEnd(currentSliceEnd + 3);
  };

  return (
    <>
      <div className="mx-auto mt-12 grid grid-cols-1 gap-6">
        {posts.slice(0, currentSliceEnd).map((post) => (
          <ProjectCard key={post.id} post={post} />
        ))}
      </div>
      {currentSliceEnd < posts.length && <button onClick={nextPage}>Load more projects</button>}
    </>
  );
}
