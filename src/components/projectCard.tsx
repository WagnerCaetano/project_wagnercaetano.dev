import { BlogPost, ProjectPost } from "../constants/types";
import dayjs from "dayjs";
import Link from "next/link";
import { FunctionComponent } from "react";
import "./../app/globals.css";
import { colorTagMap } from "@/constants/color";

type ProjectCardProps = {
  post: ProjectPost;
};

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ post }) => {
  return (
    <div className="oveflow-hidden flex flex-row rounded-xl shadow-lg bg-backgroundSecundary">
      <div className="flex-shrink-0">
        <img className="object-fit h-64 w-full" src={post.cover} alt={"cover"} />
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 pb-6 pt-2 text-text">
        <div className="flex-1">
          <span className="mt-2 block">
            <p className="text-xl font-medium ">
              {post.type} - {post.title}
            </p>
          </span>
          <span className="mt-2 block">
            <p className="text-xs ">{post.description}</p>
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="mt-2">
            {post.tags.map((tag) => (
              <span key={tag.id} className={`${colorTagMap[tag.name]} font-bold rounded-lg bg-white px-2 py-1 text-xs`}>
                {tag.name}
              </span>
            ))}
          </span>
          <div className="flex flex-row gap-4 items-center">
            {post.github_url && (
              <Link href={`${post.github_url}`} className="text-text hover:text-primary hover-delay">
                Check on Github
              </Link>
            )}
            {post.vercel_url && (
              <Link href={`${post.vercel_url}`} className="text-text hover:text-primary hover-delay">
                Check on Vercel
              </Link>
            )}
            <Link
              href={`/post/project/${post.slug}`}
              className="rounded border border-primary px-2 py-3 text-center text-primary hover:font-bold hover-delay"
            >
              Visit project page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
