import { BlogPost } from '../constants/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import './../app/globals.css';
import Image from 'next/image';
import { DinamicColoredTag } from './dinamicColoredTag';
import { generateShimmerToBase64, generateShimmer } from '@/services/shimmerHelper.service';

type BlogCardProps = {
  post: BlogPost;
};

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
  return (
    <Link className="transition duration-300 hover:scale-105" href={`/post/blog/${post.slug}`}>
      <div className="oveflow-hidden flex flex-col rounded-xl shadow-lg bg-backgroundSecundary">
        <div className="flex-shrink-0">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(800, 600))}`}
            className="object-cover h-64 w-full transition-all duration-250 ease-in-out"
            width={800}
            height={600}
            src={`https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/${post.id}.png`}
            alt={'Blog Card Cover'}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between px-4 pb-6 pt-2 text-text">
          <div className="flex-1">
            <span className="mt-2 block">
              <h4 className="text-xs font-medium ">{dayjs(post.date).format('LL')}</h4>
            </span>
            <span className="mt-2 block">
              <h4 className="text-xl font-medium leading-6">{post.title}</h4>
            </span>
            <span className="mt-2 block">
              <h4 className="text-xs ">{post.description.slice(0, 150)}...</h4>
            </span>

            <span className="mt-2 block space-x-3">
              {post.tags.map((tag) => (
                <DinamicColoredTag tag={tag} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
