import "./../../globals.css";
import NotionService from "@/services/notion.service";
import { BlogPost } from "../../../constants/types";
import BlogPostList from "@/components/blogCardList";

const fetchNotionData = async (): Promise<BlogPost[]> => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return posts;
};

async function Blog() {
  const posts = await fetchNotionData();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl pt-24 px-4">
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="text-center text-2xl font-extrabold md:text-4xl font-mulish text-primary">Blog</p>
          <p className="text-center text-lg md:text-xl font-lora text-text">
            Some interesting topics I study, my knowledge and tutorials.
          </p>
        </div>

        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}

export default Blog;
