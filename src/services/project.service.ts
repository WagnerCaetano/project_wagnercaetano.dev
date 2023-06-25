import { ProjectListPackage } from "@/constants/types";
import NotionService from "./notion.service";
import { getAllUserRepos } from "./github.service";

export async function getAllProjectList(notionService: NotionService): Promise<ProjectListPackage[]> {
  const userRepos = await getAllUserRepos();
  const notionPublishedProjectPosts = await notionService.getPublishedProjectPosts();

  return (
    userRepos
      .map((repo) => {
        const notionPost = notionPublishedProjectPosts.find((post) => post.github_url === repo.url);
        return {
          projectRepository: repo,
          projectPost: notionPost,
        };
      })
      // sort by the ones that have notion posts first and by update_date on repository
      .sort((a, b) => {
        if (a.projectPost && b.projectPost) {
          return (
            new Date(b.projectRepository.update_date).getTime() - new Date(a.projectRepository.update_date).getTime()
          );
        } else if (a.projectPost) {
          return -1;
        } else if (b.projectPost) {
          return 1;
        } else {
          return (
            new Date(b.projectRepository.update_date).getTime() - new Date(a.projectRepository.update_date).getTime()
          );
        }
      })
  );
}
