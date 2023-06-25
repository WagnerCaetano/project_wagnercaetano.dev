import "./../../globals.css";
import NotionService from "@/services/notion.service";
import { ProjectListPackage } from "../../../constants/types";
import NavComponent from "@/components/navComponent";
import FooterComponent from "@/components/footerComponent";
import ProjectPostList from "@/components/projectCardList";
import { getAllProjectList } from "@/services/project.service";

const fetchNotionData = async (): Promise<ProjectListPackage[]> => {
  const notionService = new NotionService();

  const projects = await getAllProjectList(notionService);

  return projects;
};

async function Projects() {
  // handle pagination for projects
  const projects = await fetchNotionData();

  return (
    <>
      <NavComponent shadow={true} />
      <div className="min-h-screen">
        <div className="mx-auto max-w-6xl pt-24 px-4">
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="text-center text-2xl font-extrabold md:text-4xl text-primary">Portfolio</p>
            <p className="text-center text-lg md:text-xl text-text">
              Some of my projects for personal study, practice or examples.
            </p>
          </div>

          <ProjectPostList data={projects} />
        </div>
      </div>
      <FooterComponent shadow={true} />
    </>
  );
}

export default Projects;
