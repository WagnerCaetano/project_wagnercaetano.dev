import './../../../../globals.css';
import NotionService from '@/services/notion.service';
import { BlogPostPage, ProjectPostPage, Props } from '../../../../../constants/types';
import Image from 'next/image';
import dayjs from 'dayjs';
import { generateShimmerToBase64, generateShimmer } from '@/services/shimmerHelper.service';
import ReactMarkdownCustomLinks from '@/components/reactMarkdownCustomLinks';

import { Metadata, ResolvingMetadata } from 'next';
import ReactMarkdown from 'react-markdown';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const fetchNotionPostData = async (type: string, slug: string): Promise<BlogPostPage | ProjectPostPage> => {
  const notionService = new NotionService();

  const postWrapper = type == 'blog' ? await notionService.getSingleBlogPost(slug) : await notionService.getSingleProjectPost(slug);

  return postWrapper;
};

export async function generateMetadata({ params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const { type, slug } = params;

  // fetch data
  const { markdown, post } = await fetchNotionPostData(type, slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [{ url: `https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/${post.id}.png` }, ...previousImages],
    },
  };
}

async function PostPage({ params: { type, slug } }) {
  const { markdown, post } = await fetchNotionPostData(type, slug);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl pt-8 lg:pt-16">
        <article className="flex flex-col justify-center prose max-w-6xl prose-h1:m-0 prose-p:m-0 text-text rounded-sm p-4 lg:py-8">
          <h1 className="text-center text-2xl font-extrabold md:text-4xl font-mulish text-primary">{post.title}</h1>
          <div className="flex flex-row gap-8 justify-center items-center">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(100, 100))}`}
              src="/profile-nobg.webp"
              className="w-12 p-[1px] rounded-full bg-text transition-all duration-250 ease-in-out"
              alt="Author Picture"
              width={100}
              height={100}
            />
            <p>Wagner Caetano</p>
            <p>{dayjs(post.date).format('LL')}</p>
          </div>
          <Image
            className="w-fit self-center object-cover transition-all duration-250 ease-in-out"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(700, 475))}`}
            width={1000}
            height={800}
            src={`https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/${post.id}.png`}
            alt="Post Picture"
          />
          <ReactMarkdown
            className="flex flex-col prose-custom-style"
            children={markdown.parent}
            components={{
              a: ({ node, ...props }) => {
                return <ReactMarkdownCustomLinks markdown={markdown} props={props} />;
              },
            }}
          />
        </article>
      </div>
    </div>
  );
}

export default PostPage;
