import "./../../globals.css";
import NotionService from "@/services/notion.service";
import { BlogPost } from "../../../constants/types";
import NavComponent from "@/components/navComponent";
import BlogPostList from "@/components/blogCardList";
import FooterComponent from "@/components/footerComponent";

const fetchNotionData = async (): Promise<BlogPost[]> => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return posts;
};

async function Blog() {
  const posts = await fetchNotionData();

  return (
    <>
      <NavComponent shadow={true} />
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl pt-24 px-4">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-center text-2xl font-extrabold md:text-4xl text-primary">Blog</p>
            <p className="text-center text-lg md:text-xl text-text">
              Some interesting topics I study, my knowledge and tutorials.
            </p>
          </div>

          <BlogPostList posts={posts} />
        </div>
      </div>
      <FooterComponent shadow={true} />
    </>
  );
}

export default Blog;
