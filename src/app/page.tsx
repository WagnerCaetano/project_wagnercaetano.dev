import NotionService from "@/services/notion-service";
import { GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType, NextPage, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { BlogPost } from "../../@types/schema";
import Head from "next/head";

const getStaticProps: GetStaticProps<{ posts: BlogPost[] }> = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const title = "Test blog";

  const description = "Welcome to my Notion Blog";

  return (
    <>
      <Head>
        <title> {title}</title>
        <meta name={"description"} title={"description"} content={description} />
      </Head>

      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="font-extrabold text-xl md:text-4xl text-black text-center"></h1>
          </div>
          {posts?.map((post: BlogPost) => (
            <p key={post.id}> Blog Post Component will go here: {post.title} </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
