import Image from 'next/image';
import './../globals.css';
import GithubPlacerholder from './../../assets/github_placeholder.jpg';

import SkillCard from '@/components/skillCard';
import { homeTestimonials, listExperienceAcademic, listExperienceProfessional, listSkils } from '@/constants/lists';
import ExperienceList from '@/components/experienceList';
import { getAllProjectList } from '@/services/project.service';
import NotionService from '@/services/notion.service';
import { BlogPost, ProjectListPackage } from '@/constants/types';
import Link from 'next/link';
import TestimonialCarousel from '@/components/testimonialCarousel';
import ContactForm from '@/components/contactForm';
import { generateShimmer, generateShimmerToBase64 } from '@/services/shimmerHelper.service';
import TypeWritterWrapper from '@/components/typeWritterWrapper';
import { getAllBlogPostsList } from '@/services/blog.service';

const fetchProjectsList = async (): Promise<ProjectListPackage[]> => {
  const notionService = new NotionService();

  const projects = await getAllProjectList(notionService);

  return projects.slice(0, 3);
};

const fetchBlogPostsList = async (): Promise<BlogPost[]> => {
  const notionService = new NotionService();

  const blogs = await getAllBlogPostsList(notionService);

  return blogs.slice(0, 3);
};

async function Home() {
  const projects = await fetchProjectsList();
  const blogPosts = await fetchBlogPostsList();

  const handlePortfolioShowcaseClick = (project: ProjectListPackage) => {
    if (project.projectPost) {
      return `/post/project/${project.projectPost.slug}`;
    }
    return project.projectRepository.url;
  };

  const handleBlogPostShowcaseClick = (blogPost: BlogPost) => {
    return `/post/project/${blogPost.slug}`;
  };

  return (
    <>
      <div className="flex flex-1 bg-backgroundSecundary max-h-[765]px px-4 w-full">
        <div className="flex flex-col mx-auto max-w-6xl xl:w-max xl:flex-row gap-4 justify-between">
          <div className="flex flex-col min-h-1/2">
            <div className="flex py-16 xl:py-60 flex-col gap-8">
              <div className="flex flex-col gap-1 text-text">
                <h1 className="hidden" aria-label="Hello, my name is Wagner Caetano, Im a Software Developer" aria-hidden="true">
                  Hello, my name is Wagner Caetano, I'm a Software Developer
                </h1>
                <p className="text-3xl font-mulish font-black">Hello, my name is</p>
                <p className="text-5xl font-mulish font-black">Wagner Caetano,</p>
                <div className="flex flex-row text-3xl font-lora gap-2">
                  <p>I'm a </p>
                  <TypeWritterWrapper />
                </div>
              </div>
              <div className="flex flex-row gap-4 font-lora text-xl text-center items-center">
                <Link className="text-secondary bg-primary rounded px-3 py-3 hover:bg-opacity-70 transition-all duration-250 ease-in-out" href={'/#contact'}>
                  <p>Get in contact</p>
                </Link>
                <Link
                  className="border border-primary rounded text-primary py-3 px-2 hover:bg-primary hover:bg-opacity-10 transition-all duration-250 ease-in-out"
                  href={'/resume.pdf'}
                >
                  <p>Download resume</p>
                </Link>
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
              <div>
                <p className="font-lora text-4xl text-center font-semibold">Google</p>
                <p className="font-lora text-base text-center">Certified</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 min-h-1/2">
            <Image
              className="h-fit xl:h-[750px] w-fit xl:w-[750px] mx-auto transition-all duration-250 ease-in-out self-end"
              placeholder="empty"
              width={500}
              height={500}
              quality={50}
              priority={false}
              src="/profile-nobg-lower.webp"
              alt={'Profile picture'}
            />
          </div>
        </div>
      </div>
      <div id="about" className="pt-16 px-4 xl:pt-32">
        <div className="flex flex-col mx-auto max-w-6xl xl:w-max gap-4">
          <p className="text-primary font-mulish font-bold text-4xl">{'<About>'}</p>
          <div className="flex flex-row gap-4">
            <hr className="hidden xl:flex border-primary border-2 w-32 mt-3 m-2" />
            <p className="text-text text-xl font-lora font-normal">
              Developed and implemented software solutions as a <b>Full-stack Software Developer</b>, leveraging frontend and backend expertise. Used to act in{' '}
              <b>different product scopes at the same time</b>, handling data crossover and maintaining flow compatibility. While working for a <b>health insurance company</b>
              and one of the <b>biggest banks in Brazil</b>, created exceptional products, driving revenue growth, and optimizing user experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 px-4 xl:pt-32">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{'<Skills>'}</p>
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
            <p className="text-primary font-mulish font-bold text-4xl text-center">{'<Portfolio>'}</p>
            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <Link className="text-transparent hover:text-primary transition-all duration-250 ease-in-out" href={handlePortfolioShowcaseClick(project)}>
                  <Image
                    src={project.projectPost?.cover ? `https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/${project.projectPost.id}.png` : GithubPlacerholder}
                    className="object-cover rounded-sm shadow-lg h-64 w-full hover:opacity-50 cursor-pointer transition-all duration-250 ease-in-out"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(400, 400))}`}
                    width={400}
                    height={400}
                    alt={'Project' + project.projectRepository.name.split('_')[1]}
                    title="Click to see more"
                  />
                  <p className="text-lg font-mulish text-center">{project.projectPost?.title ? project.projectPost?.title : project.projectRepository.name.split('_')[1]}</p>
                </Link>
              ))}
            </div>
            <Link
              href={'/projects'}
              className="self-center text-secondary w-1/8 bg-primary rounded px-3 py-2 font-lora text-xl text-center hover:bg-opacity-70 transition-all duration-250 ease-in-out"
            >
              See more in project list
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-8 px-4xl:pb-16">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{'<BlogPosts>'}</p>
            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
              {blogPosts.map((blogPost) => (
                <Link className="text-transparent hover:text-primary transition-all duration-250 ease-in-out" href={handleBlogPostShowcaseClick(blogPost)}>
                  <Image
                    src={blogPost?.cover ? `https://s3.sa-east-1.amazonaws.com/wagnercaetano.dev-portfolio-images/${blogPost.id}.png` : GithubPlacerholder}
                    className="object-cover rounded-sm shadow-lg h-64 w-full hover:opacity-50 cursor-pointer transition-all duration-250 ease-in-out"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${generateShimmerToBase64(generateShimmer(400, 400))}`}
                    width={400}
                    height={400}
                    alt={blogPost?.title}
                    title="Click to see more"
                  />
                  <p className="text-lg font-mulish text-center">{blogPost?.title}</p>
                </Link>
              ))}
            </div>
            <Link
              href={'/blog'}
              className="self-center text-secondary w-1/8 bg-primary rounded px-3 py-2 font-lora text-xl text-center hover:bg-opacity-70 transition-all duration-250 ease-in-out"
            >
              See more in blog list
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 xl:py-16 bg-backgroundSecundary">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{'<Experience>'}</p>
            <div className="flex flex-1 flex-wrap lg:flex-nowrap lg:flex-row gap-8 lg:justify-between">
              <ExperienceList title="Professional Experience" height="660" experiences={listExperienceProfessional} />
              <ExperienceList title="Academic Experience" height="400" experiences={listExperienceAcademic} />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8 pt-4 px-4 xl:py-16">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-left">{'<Feedback>'}</p>
            <div className="flex flex-1">
              <TestimonialCarousel testimonials={homeTestimonials} />
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="pb-16 pt-8 px-4 xl:pb-32 xl:pt-16">
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
