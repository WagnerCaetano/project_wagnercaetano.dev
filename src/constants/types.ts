import { MdStringObject } from "notion-to-md/build/types";
import { ProjectTypes } from './enums';

/* GITHUB TYPES */
export type ProjectRepository = {
  name: string;
  url: string;
  description: string;
  stars: string;
  update_date: string;
  topics: string[];
};

/* NOTION TYPES */
export type Tag = {
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  cover: string;
  title: string;
  tags: Tag[];
  description: string;
  date: string;
};

export type Props = {
  params: any;
};

export type ProjectPost = {
  id: string;
  slug: string;
  cover: string;
  title: string;
  tags: Tag[];
  description: string;
  date: string;

  github_url?: string;
  vercel_url?: string;
  type: ProjectTypes;
};

export type BlogPostPage = {
  post: BlogPost;
  markdown: MdStringObject;
};

export type ProjectPostPage = {
  post: ProjectPost;
  markdown: MdStringObject;
};

/* SCREEN TYPES */
export type Skill = {
  name: string;
  image: any;
};

export type ProjectListPackage = {
  projectPost?: ProjectPost;
  projectRepository: ProjectRepository;
};

export type Experience = {
  title: string;
  place: string;
  description: string;
  period: string;
};

export type Testimonial = {
  id: any;
  name: string;
  content: string;
  project: string;
  date: string;
};