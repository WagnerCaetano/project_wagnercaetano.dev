import { ProjectRepository } from "@/constants/types";

const CACHE_MAX_AGE = process.env.CACHE_MAX_AGE_GITHUB; // 1 day

export async function getAllUserRepos(): Promise<ProjectRepository[]> {
  try {
    const response = await fetch(`https://api.github.com/users/wagnercaetano/repos`, {
      next: {
        revalidate: Number(CACHE_MAX_AGE),
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch user repositories: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const repositories: ProjectRepository[] = data.map((repo: any) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stars: repo.stargazers_count,
      update_date: repo.updated_at,
    }));
    return repositories;
  } catch (error) {
    throw new Error(`Failed to fetch user repositories: ${error.message}`);
  }
}
