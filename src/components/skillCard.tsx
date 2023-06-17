import { Skill } from "../../@types/schema";
import { FunctionComponent } from "react";
import "./../app/globals.css";
import Image from "next/image";

type SkilCardProps = {
  skill: Skill;
};

const SkillCard: FunctionComponent<SkilCardProps> = ({ skill }) => {
  return (
    <>
      <div className="rounded-xl place-content-center flex flex-col gap-2 shadow-lg bg-backgroundSecundary py-10 px-16 w-fit">
        <Image src={skill.image} alt={"Skill Image " + skill.name} width={200} height={200} />
        <h4 className="text-xl font-medium font-lora text-text text-center">{skill.name}</h4>
      </div>
    </>
  );
};

export default SkillCard;
