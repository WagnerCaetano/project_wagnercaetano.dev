import NotionService from "@/services/notion-service";
import { BlogPost, PostPage } from "../../../../@types/schema";
import Head from "next/head";
import {} from "next/navigation";
import ReactMarkdown from "react-markdown";

const fetchNotionPostData = async (slug: string): Promise<PostPage> => {
  const notionService = new NotionService();

  const postWrapper = await notionService.getSingleBlogPost(slug);

  return postWrapper;
};

async function PostPage({ params: { slug } }) {
  const { markdown, post } = await fetchNotionPostData(slug);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={"description"} title={"description"} content={post.description} />
        <meta name={"og:description"} title={"og:description"} content={post.description} />
        <meta name={"og:image"} title={"og:title"} content={post.cover} />
      </Head>

      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto">
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
