import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlogPost, BlogPostPage, ProjectPost, ProjectPostPage } from "../constants/types";
import { pageToBlogPostTransformer, pageToProjectPostTransformer } from "./notion.helper";

const CACHE_MAX_AGE = process.env.CACHE_MAX_AGE_NOTION; // 1 day

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
    const url = `https://api.notion.com/v1/databases/${database}/query`;

    const response = await fetch(url, {
      next: {
        revalidate: Number(CACHE_MAX_AGE),
      },
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          and: [
            {
              property: 'Published',
              checkbox: {
                equals: true,
              },
            },
          ],
        },
        sorts: [
          {
            property: 'Created',
            direction: 'descending',
          },
        ],
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`An error occurred: ${response.status}`);
    }

    return await response.json();
  }

  private async getAnyPageNotion(database: string, slug: string, markdown: any) {
    const url = `https://api.notion.com/v1/databases/${database}/query`;

    const response = await fetch(url, {
      next: {
        revalidate: Number(CACHE_MAX_AGE),
      },
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          property: 'Slug',
          formula: {
            string: {
              equals: slug,
            },
          },
        },
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`An error occurred: ${response.status}`);
    }

    const data = await response.json();

    if (data.results.length === 0) {
      throw new Error('No results available');
    }

    const page = data.results[0];

    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    markdown = this.n2m.toMarkdownString(mdBlocks);
    return { page, markdown };
  }
}
