"use client";

import React from "react";
import BlogCard from "./blogCard";

export default function BlogPostList({ posts }) {
  const [currentSliceEnd, setCurrentSliceEnd] = React.useState(6);

  const nextPage = () => {
    setCurrentSliceEnd(currentSliceEnd + 3);
  };

  return (
    <>
      <div className="mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.slice(0, currentSliceEnd).map((post) => (
          <BlogCard key={post.id + '_' + post.slug} post={post} />
        ))}
      </div>
      {currentSliceEnd < posts.length && <button onClick={nextPage}>Load more posts</button>}
    </>
  );
}
