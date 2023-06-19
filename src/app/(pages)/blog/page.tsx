import "./../../globals.css";
import NotionService from "@/services/notion-service";
import { BlogPost } from "../../../../@types/schema";
import BlogCard from "@/components/blogCard";
import NavComponent from "@/components/navComponent";
import BlogPostList from "@/components/blogCardList";

const fetchNotionData = async (): Promise<BlogPost[]> => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return posts;
};

async function Blog() {
  // handle pagination for posts
  const posts = await fetchNotionData();

  return (
    <>
      <NavComponent shadow={true} />
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl pt-24">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-center text-xl font-extrabold md:text-4xl text-primary">Blog</p>
            <p className="text-center text-sm md:text-xl text-text">
              Some interesting topics I study, my knowledge and tutorials.
            </p>
          </div>

          <BlogPostList posts={posts} />
        </div>
      </div>
    </>
  );
}

export default Blog;
