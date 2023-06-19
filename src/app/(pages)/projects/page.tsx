import "./../../globals.css";
import NotionService from "@/services/notion-service";
import { BlogPost } from "../../../../@types/schema";
import BlogCard from "@/components/blogCard";
import NavComponent from "@/components/navComponent";

const fetchNotionData = async (): Promise<BlogPost[]> => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return posts;
};

async function Projects() {
  const posts = await fetchNotionData();

  return (
    <>
      <NavComponent shadow={true} />
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center text-text">
            <h1 className="text-center text-xl font-extrabold md:text-4xl">NotionBlog</h1>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts?.map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
