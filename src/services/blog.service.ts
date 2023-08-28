import NotionService from './notion.service';

export async function getAllBlogPostsList(notionService: NotionService) {
  const notionPublishedBlogPosts = await notionService.getPublishedBlogPosts();
  return notionPublishedBlogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
