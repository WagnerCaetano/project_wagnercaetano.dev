import { Skill } from "../../@types/schema";
import { FunctionComponent } from "react";
import "./../app/globals.css";
import Image from "next/image";

type SkilCardProps = {
  skill: Skill;
};

const SkillCard: FunctionComponent<SkilCardProps> = ({ skill }) => {
  return (
    <div className="rounded-xl justify-between xl:place-content-center flex flex-row xl:flex-col gap-2 lg:gap-4 lg:m-1 flex-grow shadow-lg bg-backgroundSecundary py-8 px-8 w-max">
      <Image
        src={skill.image}
        alt={"Skill Image " + skill.name}
        width={200}
        height={200}
        className="self-center w-16 xl:w-48"
      />
      <h4 className="text-xl font-medium font-lora text-text text-center self-center">{skill.name}</h4>
    </div>
  );
};

export default SkillCard;
