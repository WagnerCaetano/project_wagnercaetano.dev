import Image from "next/image";
import "./../globals.css";

import * as ProfileImage from "./../../assets/profile-nobg.png";
import * as GithubPlacerholder from "./../../assets/github_placeholder.jpg";

import SkillCard from "@/components/skillCard";
import { homeTestimonials, listExperienceAcademic, listExperienceProfessional, listSkils } from "@/constants/lists";
import ExperienceList from "@/components/experienceList";
import { getAllProjectList } from "@/services/project.service";
import NotionService from "@/services/notion.service";
import { ProjectListPackage } from "@/constants/types";
import Link from "next/link";
import TestimonialCarousel from "@/components/testimonialCarousel";
import ContactForm from "@/components/contactForm";

const fetchNotionData = async (): Promise<ProjectListPackage[]> => {
  const notionService = new NotionService();

  const projects = await getAllProjectList(notionService);

  return projects.slice(0, 3);
};

async function Home() {
  const projects = await fetchNotionData();

  const handlePortfolioShowcaseClick = (project: ProjectListPackage) => {
    if (project.projectPost) {
      return `https://wagnercaetano.dev/project/${project.projectPost.slug}`;
    }
    return project.projectRepository.url;
  };

  return (
    <>
      <div className="bg-backgroundSecundary max-h-[765]px px-4 flex flex-col">
        <div className="mx-auto min-w-6xl xl:w-max">
          <div className="flex flew-col flex-wrap xl:flex-row xl:flex-nowrap">
            <div className="flex flex-col">
              <div className="flex py-16 xl:py-60 flex-col gap-8">
                <div className="flex flex-col gap-1 text-text">
                  <p className="text-3xl font-mulish font-black">Hello, my name is</p>
                  <p className="text-5xl font-mulish font-black">Wagner Caetano,</p>
                  <p className="text-3xl font-lora">Full Stack Developer</p>
                </div>
                <div className="flex flex-row gap-4 font-lora text-xl text-center">
                  <button className="text-secondary bg-primary rounded px-3 py-2 hover:bg-opacity-80 transition-all duration-250 ease-in-out">
                    <p>Get in contact</p>
                  </button>
                  <button className="border border-primary rounded text-primary py-3 px-2 hover:bg-primary hover:bg-opacity-10 transition-all duration-250 ease-in-out">
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
      <div className="pt-16 px-4 xl:pt-32">
        <div className="flex flex-col mx-auto max-w-6xl xl:w-max gap-4">
          <p className="text-primary font-mulish font-bold text-4xl">{"<About>"}</p>
          <div className="flex flex-row gap-4">
            <hr className="hidden xl:flex border-primary border-2 w-32 mt-3 m-2" />
            <p className="text-text text-xl font-lora font-normal">
              I am a <b>Full-stack Software Developer</b> with a passion for <b>designing</b> and <b>developing</b> innovative software
              solutions. With extensive knowledge and expertise in both frontend and backend development, my objective is to work with
              various frontend technologies like <b>Angular, React, and React Native</b>, while also assisting with backend demands. I am
              excited about collaborating with diverse teams and contributing to cutting-edge projects.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 px-4 xl:pt-32">
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
      <div className="pt-16 pb-8 px-4 xl:pt-32 xl:pb-16">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{"<Portfolio>"}</p>
            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <Link
                  className="text-transparent hover:text-primary transition-all duration-250 ease-in-out"
                  href={handlePortfolioShowcaseClick(project)}
                >
                  <Image
                    src={project.projectPost?.cover ? project.projectPost?.cover : GithubPlacerholder}
                    className="object-cover rounded-sm shadow-lg h-64 w-full hover:opacity-50 cursor-pointer transition-all duration-250 ease-in-out"
                    width={400}
                    height={400}
                    alt={""}
                    title="Click to see more"
                  />
                  <p className="text-lg font-mulish text-center">
                    {project.projectPost?.title ? project.projectPost?.title : project.projectRepository.name.split("_")[1]}
                  </p>
                </Link>
              ))}
            </div>
            <Link
              href={"/portfolio"}
              className="self-center text-secondary w-1/8 bg-primary rounded px-3 py-2 font-lora text-xl text-center hover:bg-opacity-80 transition-all duration-250 ease-in-out"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 xl:py-16 bg-backgroundSecundary">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{"<Experience>"}</p>
            <div className="flex flex-1 flex-wrap lg:flex-nowrap lg:flex-row gap-8 lg:justify-between">
              <ExperienceList title="Professional Experience" height="720" experiences={listExperienceProfessional} />
              <ExperienceList title="Academic Experience" height="480" experiences={listExperienceAcademic} />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16 pt-8 px-4 xl:pb-32 xl:pt-16">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-left">{"<Feedback>"}</p>
            <div className="flex flex-1">
              <TestimonialCarousel testimonials={homeTestimonials} />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16 pt-8 px-4 xl:pb-32 xl:pt-16">
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
