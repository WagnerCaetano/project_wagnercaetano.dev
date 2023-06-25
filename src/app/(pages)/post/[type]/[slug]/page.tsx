import "./../../../../globals.css";
import NotionService from "@/services/notion.service";
import ReactMarkdown from "react-markdown";
import NavComponent from "@/components/navComponent";
import { BlogPostPage, ProjectPostPage } from "../../../../../constants/types";

const fetchNotionPostData = async (type: string, slug: string): Promise<BlogPostPage | ProjectPostPage> => {
  const notionService = new NotionService();

  const postWrapper =
    type == "blog" ? await notionService.getSingleBlogPost(slug) : await notionService.getSingleProjectPost(slug);

  return postWrapper;
};

async function PostPage({ params: { type, slug } }) {
  const { markdown, post } = await fetchNotionPostData(type, slug);

  return (
    <>
      <NavComponent shadow={true} />
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center">
            <article className="prose">
              <ReactMarkdown children={markdown.parent} />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
