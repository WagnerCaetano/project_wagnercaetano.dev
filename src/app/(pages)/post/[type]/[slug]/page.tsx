import './../../../../globals.css';
import NotionService from '@/services/notion.service';
import ReactMarkdown from 'react-markdown';
import { BlogPostPage, ProjectPostPage } from '../../../../../constants/types';
import Image from 'next/image';
import ProfilePicture from './../../../../../assets/profile-nobg.png';
import dayjs from 'dayjs';
import { generateShimmerToBase64, generateShimmer } from '@/services/shimmerHelper.service';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const fetchNotionPostData = async (type: string, slug: string): Promise<BlogPostPage | ProjectPostPage> => {
  const notionService = new NotionService();

  const postWrapper = type == 'blog' ? await notionService.getSingleBlogPost(slug) : await notionService.getSingleProjectPost(slug);

  return postWrapper;
};

async function PostPage({ params: { type, slug } }) {
  const { markdown, post } = await fetchNotionPostData(type, slug);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl pt-8 lg:pt-16">
        <article className="flex flex-col justify-center prose prose-h1:m-0 prose-p:text-text max-w-6xl prose-p:m-0 prose-img:m-0 rounded-sm p-4 lg:p-8 gap-8">
          <h1 className="text-center text-2xl font-extrabold md:text-4xl font-mulish text-primary">{post.title}</h1>
          <div className="flex flex-row gap-8 justify-center items-center">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(100, 100))}`}
              src={ProfilePicture}
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
            src={post.cover}
            alt="Post Picture"
          />
          <ReactMarkdown className="flex flex-col" children={markdown.parent} />
        </article>
      </div>
    </div>
  );
}

export default PostPage;