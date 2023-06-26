import Image from "next/image";
import "./../globals.css";

import * as ProfileImage from "./../../assets/profile-nobg.png";
import * as GithubPlacerholder from "./../../assets/github_placeholder.jpg";

import SkillCard from "@/components/skillCard";
import { listExperienceAcademic, listExperienceProfessional, listSkils } from "@/constants/lists";
import ExperienceList from "@/components/experienceList";
import { getAllProjectList } from "@/services/project.service";
import NotionService from "@/services/notion.service";
import { ProjectListPackage } from "@/constants/types";

const fetchNotionData = async (): Promise<ProjectListPackage[]> => {
  const notionService = new NotionService();

  const projects = await getAllProjectList(notionService);

  return projects.slice(0, 6);
};

async function Home() {
  const projects = await fetchNotionData();

  return (
    <>
      <div className="bg-backgroundSecundary max-h-[765]px px-5 flex flex-col">
        <div className="mx-auto min-w-6xl xl:w-max">
          <div className="flex flew-col flex-wrap xl:flex-row xl:flex-nowrap">
            <div className="flex flex-col">
              <div className="flex py-16 xl:py-60 flex-col gap-8">
                <div className="flex flex-col gap-1 text-text">
                  <p className="text-3xl">Hello, my name is</p>
                  <p className="text-5xl">Wagner Caetano,</p>
                  <p className="text-3xl">Full Stack Developer</p>
                </div>
                <div className="flex flex-row gap-4">
                  <button className="bg-primary rounded text-secondary py-3 px-2">
                    <p>Get in contact</p>
                  </button>
                  <button className="border border-primary rounded text-primary py-3 px-2">
                    <p>Download resume</p>
                  </button>
                </div>
              </div>

              <div className="flex-row text-primary relative gap-10 py-4 hidden xl:flex">
                <div>
                  <p className="font-lora text-4xl text-center font-semibold">3+ Years</p>
                  <p className="font-lora text-base text-center">Experience</p>
                </div>
                <div>
                  <p className="font-lora text-4xl text-center font-semibold">Aws</p>
                  <p className="font-lora text-base text-center">Certified</p>
                </div>
              </div>
            </div>
            <Image
              className="max-h-full max-w-full mx-auto"
              placeholder="empty"
              width={774}
              height={774}
              src={ProfileImage}
              alt={"Profile picture"}
            />
          </div>
        </div>
      </div>
      <div className="pt-8 px-8 xl:pt-32">
        <div className="flex flex-col mx-auto max-w-6xl xl:w-max gap-4">
          <p className="text-primary font-mulish font-bold text-4xl">{"<About>"}</p>
          <div className="flex flex-row gap-4">
            <hr className="hidden xl:flex border-primary border-2 w-32 mt-3 m-2" />
            <p className="text-text text-xl font-lora font-normal">
              I am a <b>Full-stack Software Developer</b> with a passion for <b>designing</b> and <b>developing</b>{" "}
              innovative software solutions. With extensive knowledge and expertise in both frontend and backend
              development, my objective is to work with various frontend technologies like{" "}
              <b>Angular, React, and React Native</b>, while also assisting with backend demands. I am excited about
              collaborating with diverse teams and contributing to cutting-edge projects.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8 xl:pt-32">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{"<Skills>"}</p>
            <div className="flex flex-1 flex-wrap gap-4">
              {listSkils.map((skill) => {
                return <SkillCard key={skill.name} skill={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8 xl:py-32">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{"<Portfolio>"}</p>
            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <>
                  <Image
                    src={project.projectPost?.cover ? project.projectPost?.cover : GithubPlacerholder}
                    className="object-cover rounded-lg shadow-lg h-64 w-full"
                    width={400}
                    height={400}
                    alt={""}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8 xl:pt-32 bg-backgroundSecundary">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{"<Experience>"}</p>
            <div className="flex flex-1 flex-wrap lg:flex-nowrap lg:flex-row gap-8 lg:justify-between">
              <ExperienceList title="Professional Experience" height="640" experiences={listExperienceProfessional} />
              <ExperienceList title="Academic Experience" height="400" experiences={listExperienceAcademic} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
