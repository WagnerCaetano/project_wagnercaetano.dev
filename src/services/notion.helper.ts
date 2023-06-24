import { BlogPost, ProjectPost } from "../constants/types";

export function pageToProjectPostTransformer(page: any): ProjectPost {
  let cover = page.cover;
  if (cover) {
    switch (cover.type) {
      case "file":
        cover = page.cover.file.url;
        break;

      case "external":
        cover = page.cover.external.url;
        break;
      default:
        cover = "";
    }
  }

  return {
    id: page.id,
    cover: cover,
    title: page.properties.Name.title[0]?.plain_text,
    tags: page.properties.Tags.multi_select,
    description: page.properties.Description.rich_text[0]?.plain_text,
    date: page.properties.Updated.last_edited_time,
    slug: page.properties.Slug.formula.string,
    github_url: page.properties.Github?.url,
    vercel_url: page.properties.Vercel?.url,
    type: page.properties.Type.select?.name,
  };
}

export function pageToBlogPostTransformer(page: any): BlogPost {
  let cover = page.cover;
  if (cover) {
    switch (cover.type) {
      case "file":
        cover = page.cover.file.url;
        break;

      case "external":
        cover = page.cover.external.url;
        break;
      default:
        cover = "";
    }
  }

  return {
    id: page.id,
    cover: cover,
    title: page.properties.Name.title[0]?.plain_text,
    tags: page.properties.Tags.multi_select,
    description: page.properties.Description.rich_text[0]?.plain_text,
    date: page.properties.Updated.last_edited_time,
    slug: page.properties.Slug.formula.string,
  };
}
