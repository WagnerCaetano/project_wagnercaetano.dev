import { BlogPost } from "../../@types/schema";
import dayjs from "dayjs";
import Link from "next/link";
import { FunctionComponent } from "react";
import "./../app/globals.css";

type BlogCardProps = {
  post: BlogPost;
};

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
  return (
    <Link className="transition duration-300 hover:scale-105" href={`/post/${post.slug}`}>
      <div className="oveflow-hidden flex flex-col rounded-xl shadow-lg">
        <div className="flex-shrink-0">
          <img className="object-fit h-64 w-full" src={post.cover} alt={"cover"} />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-backgroundSecundary px-4 pb-6 pt-2">
          <div className="flex-1">
            <span className="mt-2 block">
              <h4 className="text-xs font-medium text-text">{dayjs(post.date).format("LL")}</h4>
            </span>
            <span className="mt-2 block">
              <h4 className="text-xl font-medium text-text">{post.title}</h4>
            </span>
            <span className="mt-2 block">
              <h4 className="text-xs text-text">{post.description}</h4>
            </span>

            <span className="mt-2 block space-x-4">
              {post.tags.map((tag) => (
                <span key={tag.id} className={`text-primary rounded-lg bg-backgroundDark px-2 py-1 text-xs`}>
                  {tag.name}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
