import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlogPost, BlogPostPage, ProjectPost, ProjectPostPage } from "../constants/types";
import { pageToBlogPostTransformer, pageToProjectPostTransformer } from "./notion.helper";

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({
      auth: process.env.NOTION_ACCESS_TOKEN,
    });
    this.n2m = new NotionToMarkdown({
      notionClient: this.client,
    });
  }

  /* ASYNC METHODS */
  async getPublishedProjectPosts(): Promise<ProjectPost[]> {
    const database = process.env.NOTION_PORTFOLIO_DATABASE_ID;

    const response = await this.searchAnyListNotion(database);

    return response.results.map((page) => {
      return pageToProjectPostTransformer(page);
    });
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    const database = process.env.NOTION_BLOG_DATABASE_ID;

    const response = await this.searchAnyListNotion(database);

    return response.results.map((page) => {
      return pageToBlogPostTransformer(page);
    });
  }

  async getSingleProjectPost(slug: string): Promise<ProjectPostPage> {
    let post, markdown;

    const database = process.env.NOTION_PORTFOLIO_DATABASE_ID;

    let page;
    ({ page, markdown } = await this.getAnyPageNotion(database, slug, markdown));
    post = pageToProjectPostTransformer(page);

    return {
      post,
      markdown,
    };
  }

  async getSingleBlogPost(slug: string): Promise<BlogPostPage> {
    let post, markdown;

    const database = process.env.NOTION_BLOG_DATABASE_ID;

    let page;
    ({ page, markdown } = await this.getAnyPageNotion(database, slug, markdown));
    post = pageToBlogPostTransformer(page);

    return {
      post,
      markdown,
    };
  }

  /* PRIVATE METHODS */
  private async searchAnyListNotion(database: string) {
    return await this.client.databases.query({
      database_id: database!,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });
  }

  private async getAnyPageNotion(database: string, slug: string, markdown: any) {
    const response = await this.client.databases.query({
      database_id: database!,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    if (response.results.length === 0) {
      throw "No results avaualble";
    }

    const page = response.results[0];

    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    markdown = this.n2m.toMarkdownString(mdBlocks);
    return { page, markdown };
  }
}
