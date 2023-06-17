import Image from "next/image";
import "./globals.css";
import NavComponent from "@/components/navComponent";

import * as ProfileImage from "./../assets/profile-nobg.png";
import * as Java from "./../assets/java.svg";
import SkillCard from "@/components/skillCard";

async function Home() {
  const listSkils = [
    {
      name: "Java",
      image: Java,
    },
    {
      name: "Angular",
      image: Java,
    },
    {
      name: "Typescript",
      image: Java,
    },
    {
      name: "Git",
      image: Java,
    },
    {
      name: "React",
      image: Java,
    },
    {
      name: "Aws",
      image: Java,
    },
    {
      name: "NextJs",
      image: Java,
    },
    {
      name: "Javascript",
      image: Java,
    },
  ];

  return (
    <>
      <div className="bg-backgroundSecundary max-h-[765]px px-5 flex flex-col">
        <NavComponent shadow={false} />
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

              <div className="flex flex-row text-primary relative gap-10 py-4 hidden xl:flex">
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
            <hr className="hidden xl:flex border-primary border-2 w-1/2 m-2" />
            <p className="text-text text-xl font-lora font-normal">
              About me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tortor pulvinar, imperdiet
              odio sit amet, pellentesque augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              vulputate urna. Ut vel elementum libero. Suspendisse tincidunt turpis ut neque aliquet tempus. Fusce eget
              dui neque. Aenean id tristique nisi. Mauris laoreet ligula lacinia, bibendum eros non, dapibus purus.
              Mauris neque lorem, pretium vitae nunc non, congue maximus erat. Aenean efficitur, ante eu lacinia
              placerat, massa augue aliquet justo, et sollicitudin lorem nibh nec mauris. Fusce vestibulum scelerisque
              dignissim. Etiam sit amet varius nisl. Sed vehicula orci et egestas scelerisque.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8 xl:pt-32">
        <div className="mx-auto max-w-6xl xl:w-max">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-mulish font-bold text-4xl text-center">{"<Skills>"}</p>
            <div className="flex flex-1 flex-auto flex-wrap gap-4">
              {listSkils.map((skill) => {
                return <SkillCard key={skill.name} skill={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
