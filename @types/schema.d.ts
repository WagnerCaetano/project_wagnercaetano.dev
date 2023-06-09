export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type Type = "post" | "project";

export type BlogPost = {
  id: string;
  slug: string;
  cover: string;
  title: string;
  tags: Tag[];
  description: string;
  date: string;
  type: Type;
};

export type PostPage = {
  post: BlogPost;
  markdown: MdStringObject;
};