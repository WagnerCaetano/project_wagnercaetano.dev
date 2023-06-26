import * as Java from "./../assets/techs/java.svg";
import * as Angular from "./../assets/techs/angular.svg";
import * as Typescript from "./../assets/techs/typescript.svg";
import * as Aws from "./../assets/techs/aws.svg";
import * as Git from "./../assets/techs/git.svg";
import * as React from "./../assets/techs/react.svg";
import * as Javascript from "./../assets/techs/javascript.svg";
import { Experience } from "./types";

export const listExperienceProfessional: Experience[] = [
  {
    title: "Mid-Software Developer",
    place: "CI&T",
    period: "2021 - Present",
    description:
      "The responsibilities include coding and testing new software, proposing and implementing features, assessing program connections, maintaining CI/CD setups, and analyzing incidents in the production environment to provide solutions.",
  },
  {
    title: "Junior Software Developer",
    place: "CI&T",
    period: "2021 - 2021",
    description:
      "The tasks involve designing, writing, testing, and correcting code for new software, evaluating program interrelationships, writing and testing code for internet and mobile applications, documenting software, and reviewing teammates' code.",
  },
  {
    title: "Intern Software Developer",
    place: "CI&T",
    period: "2020 - 2021",
    description:
      "The learning objectives include understanding coding best practices, testing techniques, and software architecture principles to develop high-quality software.",
  },
];

export const listExperienceAcademic: Experience[] = [
  {
    title: "Computer Science",
    place: "Unimetrocamp",
    period: "2021 - 2024",
    description:
      "I'm studying Computer Science at Unimetrocamp, where I'm learning about programming fundamentals, computer architecture, operating systems, database management, and software engineering.",
  },
  {
    title: "System's Development",
    place: "COTUCA",
    period: "2018 - 2021",
    description:
      "I studied System's Development at COTUCA, where I learned about programming, algorithms, data structures, and more.",
  },
];

export const listSkils: { name: string; image: any }[] = [
  {
    name: "Java",
    image: Java,
  },
  {
    name: "Angular",
    image: Angular,
  },
  {
    name: "Typescript",
    image: Typescript,
  },
  {
    name: "Git",
    image: Git,
  },
  {
    name: "React",
    image: React,
  },
  {
    name: "Aws",
    image: Aws,
  },
  {
    name: "NextJs",
    image: Java,
  },
  {
    name: "Javascript",
    image: Javascript,
  },
];
