import "./../../globals.css";
import NotionService from "@/services/notion.service";
import { ProjectListPackage } from "../../../constants/types";
import ProjectPostList from "@/components/projectCardList";
import { getAllProjectList } from "@/services/project.service";

const fetchNotionData = async (): Promise<ProjectListPackage[]> => {
  const notionService = new NotionService();

  const projects = await getAllProjectList(notionService);

  return projects;
};

async function Projects() {
  const projects = await fetchNotionData();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl pt-24 px-4">
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="text-center text-2xl font-extrabold font-mulish md:text-4xl text-primary">Portfolio</p>
          <p className="text-center text-lg md:text-xl font-lora text-text">
            Some of my projects for personal study, practice or examples.
          </p>
        </div>
        <ProjectPostList data={projects} />
      </div>
    </div>
  );
}

export default Projects;
