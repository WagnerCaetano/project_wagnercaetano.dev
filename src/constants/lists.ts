import Java from './../assets/techs/java.svg';
import Angular from './../assets/techs/angular.svg';
import Typescript from './../assets/techs/typescript.svg';
import Aws from './../assets/techs/aws.svg';
import Git from './../assets/techs/git.svg';
import React from './../assets/techs/react.svg';
import Javascript from './../assets/techs/javascript.svg';
import NextJs from './../assets/techs/nextjs.svg';
import { Experience, Testimonial } from './types';

export const listExperienceProfessional: Experience[] = [
  {
    title: 'Mid-Software Developer',
    place: 'CI&T',
    period: '2021 - Present',
    description:
      'The responsibilities include coding and testing new software, proposing and implementing features, assessing program connections, maintaining CI/CD setups, and analyzing incidents in the production environment to provide solutions.',
  },
  {
    title: 'Junior Software Developer',
    place: 'CI&T',
    period: '2021 - 2021',
    description:
      "The tasks involve designing, writing, testing, and correcting code for new software, evaluating program interrelationships, writing and testing code for internet and mobile applications, documenting software, and reviewing teammates' code.",
  },
  {
    title: 'Intern Software Developer',
    place: 'CI&T',
    period: '2020 - 2021',
    description: 'The learning objectives include understanding coding best practices, testing techniques, and software architecture principles to develop high-quality software.',
  },
];

export const listExperienceAcademic: Experience[] = [
  {
    title: 'Computer Science',
    place: 'Unimetrocamp',
    period: '2021 - 2024',
    description:
      "I'm studying Computer Science at Unimetrocamp, where I'm learning about programming fundamentals, computer architecture, operating systems, database management, and software engineering.",
  },
  {
    title: "System's Development",
    place: 'COTUCA',
    period: '2018 - 2021',
    description: "I studied System's Development at COTUCA, where I learned about programming, algorithms, data structures, and more.",
  },
];

export const listSkils: { name: string; image: any }[] = [
  {
    name: 'Java',
    image: Java,
  },
  {
    name: 'Angular',
    image: Angular,
  },
  {
    name: 'Typescript',
    image: Typescript,
  },
  {
    name: 'Git',
    image: Git,
  },
  {
    name: 'React',
    image: React,
  },
  {
    name: 'Aws',
    image: Aws,
  },
  {
    name: 'NextJs',
    image: NextJs,
  },
  {
    name: 'Javascript',
    image: Javascript,
  },
];

export const homeTestimonials: Testimonial[] = [
  {
    content:
      'I really like his work. Besides learning very quickly technically, he has a very active attitude, always going after things. You also participate very effectively in the rites.In general you are very good! (Translated from Portuguese)',
    name: 'Leonardo - Squad Leader',
    id: '1',
    date: '2020',
    project: 'SulAmerica',
  },
  {
    content:
      'I have always seen Wagner as a dev who knows development, he has skill and commitment, and his activities have been delivered in a timely manner, and he infects the team. (Translated from Portuguese)',
    name: 'Glauber - QA',
    id: '2',
    date: '2020',
    project: 'SulAmerica',
  },
  {
    content:
      'You are a guy out of the curve, I was impressed with your performance in the scheduling team since my first day, you actively participate in all meetings, always raising great points and collaborating a lot. Everything you propose to do you do with excellence and dedication. Always concerned about the rest of the team, to ensure that everyone is on the same page. You learn too fast. (Translated from Portuguese)',
    name: 'Osvaldo - Senior Dev',
    id: '3',
    date: '2021',
    project: 'SulAmerica',
  },
  {
    content:
      'Your technical prowess, your capacity for delivery and commitment are points that contribute to you as a professional. For a professional who is at the beginning of his career you position yourself, deliver, and have attitudes far beyond what is expected. (Translated from Portuguese)',
    name: 'Anon - ?',
    id: '4',
    date: '2021',
    project: 'SulAmerica',
  },
  {
    content:
      'My grade is 10, for visualizing the professionalism and the strength of contributing to the team. He is young and has mastery in the content he works on. (Translated from Portuguese)',
    name: 'Walisson - Dev',
    id: '5',
    date: '2021',
    project: 'SulAmerica',
  },
  {
    content:
      'Man, you are a person I can trust when I ask for help, I know you will always see the best way to fix it, and I see you always willing. A differential that should be maintained and that will bring many future benefits to you, you can be sure. (Translated from Portuguese)',
    name: 'Anon - ?',
    id: '7',
    date: '2022',
    project: 'Itau Bank',
  },
  {
    content: 'As I said, you are a reference in the team, you can navigate through different technologies, you are calm, you pass security. (Translated from Portuguese)',
    name: 'Anon - ?',
    id: '8',
    date: '2022',
    project: 'Itau Bank',
  },
  {
    content:
      'Wagner is an excellent professional and a very easy person to deal with. He is VERY helpful to the other team members. He has a lot of technical knowledge and problem solving skills. I would definitely have him on any team of mine! (Translated from Portuguese)',
    name: 'Leonardo - Tech Lead',
    id: '9',
    date: '2023',
    project: 'Itau Bank',
  },
  {
    content:
      'Cara I just have to thank you for your help since I joined the team. As I said in my previous answer, I see you as a focal point, determined and always willing to act in the activities and help the team as best as possible. You are to be congratulated, and you can only gain from this. I wish you every success because you deserve it! (Translated from Portuguese)',
    name: 'Will - Dev',
    id: '10',
    date: '2023',
    project: 'Itau Bank',
  },
];
