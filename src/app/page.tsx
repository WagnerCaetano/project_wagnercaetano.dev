import NotionService from "@/services/notion-service";
import { GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType, NextPage, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { BlogPost } from "../../@types/schema";
import Head from "next/head";
import BlogCard from "@/components/blogCard";

const fetchNotionData = async (): Promise<BlogPost[]> => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return posts;
};

async function Home() {
  const title = "Test blog";

  const description = "Welcome to my Notion Blog";

  const posts = await fetchNotionData();

  return (
    <>
      <Head>
        <title> {title}</title>
        <meta name={"description"} title={"description"} content={description} />
      </Head>

      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="font-extrabold text-xl md:text-4xl text-black text-center">NotionBlog</h1>
          </div>
          <div className="mt-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts?.map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
