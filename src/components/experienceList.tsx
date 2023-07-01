import { Experience } from "@/constants/types";
import { FunctionComponent } from "react";
import Image from "next/image";
import VerticalLine from "../assets/vertical-line.tsx";
import ExpBall from '../assets/exp-ball.svg';

type ExperienceListProps = {
  experiences: Experience[];
  title: string;
  height: string;
};

const ExperienceList: FunctionComponent<ExperienceListProps> = ({ experiences, title, height }) => {
  return (
    <div className="flex flex-col text-text max-w-screen-md lg:max-w-xl">
      <div className="flex flex-row gap-4 ">
        <Image src={ExpBall} className="w-8 h-8 self-end mb-1" height={32} width={32} alt={""} />
        <p className="text-lora text-3xl font-bold">{title}</p>
      </div>
      <div className="flex flex-row">
        <span className="hidden lg:flex">{VerticalLine(height)}</span>
        <div className="flex flex-col mt-12 gap-8">
          {experiences.map((experience) => (
            <div className="flex flex-row gap-4">
              <div className="w-5">
                <hr className="bg-primary border-0 border-transparent w-5 h-1 rounded mt-3" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-lora text-3xl">{experience.title}</p>
                  <p className="font-lora text-sm">{experience.place}</p>
                  <p className="font-lora text-sm">{experience.period}</p>
                </div>
                <p className="font-lora text-lg">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
