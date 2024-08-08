import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  threejs,
} from "../assets";

import Crypto from "../assets/Crypto.jpg";
import dsa from "../assets/dsa.png";
import full_stack from "../assets/full_stack.png";
import machine_learning from "../assets/machine_learning.png"
import Whackgame from "../assets/Whackgame.jpeg";
import memory from "../assets/memory.webp";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN full Stack",
    icon: web,
  },
  
  {
    title: "Java full Stack",
    icon: backend,
  },
  {
    title: "SQL and NOSQL databases",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Bachelor Of Technology [CS]",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Gained a strong foundation in various programming languages like Java along with concepts like data structures, algorithms, and problem-solving techniques.",
      " Acquired skills in front-end and back-end development, including HTML, CSS, JavaScript, and frameworks like React and Node.js, enabling the creation of dynamic and responsive web applications.",
      "Learned about database design, SQL, and data management principles, including how to interact with databases using technologies like MySQL and MongoDB.",
    ],
  },
  {
    title: "Intermediate [ISC board]",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I scored 95% in my class 12 examinations, reflecting my strong academic performance and dedication to my studies.",
      "In class 12, I focused on my studies in the Science stream, where I strengthened my knowledge in subjects like Physics, Chemistry, and Mathematics. I also developed my programming skills by exploring languages like C++ and gained exposure to computer science concepts.",
    ],
  },
  {
    title: "High School [ICSE board]",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "I scored 88.7% in my class 10 examinations, reflecting my strong academic performance and dedication to my studies.",
      "Science stream subjects were the major regoins of interests for me.",
    ],
  },
];

const certifications = [
  {
    name: "DSA in C/C++",
    description: "Certified in Data Structures and Algorithms using C/C++",
    image: dsa
  },
  {
    name: "Full\u00A0Stack Developer",
    description: "Certified Full Stack Developer specializing in MERN stack",
    image: full_stack
  },
  {
    name: "Machine Learning",
    description: "Certified in Machine Learning and AI using Python",
    image: machine_learning
  },
];

const projects = [
  {
    name: "Crypto-World",
    description:
      "A multi-page Crypto-World platform with transaction tracking, support features, and a responsive dashboard,achieving 98% transaction data accuracy..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Crypto,
    source_code_link: "#",
  },
  {
    name: "Whack-a-Mole Game",
    description:
      "Implemented visual designs and dynamic visual effects to ensure a smooth user experience across devices.Developed an interactive whack-a-mole game with 98% hit detection accuracy",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Whackgame,
    source_code_link: "https://github.com/abhishek-ox/Whack-a-Mole-Game",
  },
  {
    name: "Neuro-Card-Game",
    description:
      "Implemented an intelligent card matching algorithm to ensure an engaging user experience.Achieved a high hit detection accuracy rate of 96% for card matching.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: memory,
    source_code_link: "https://github.com/abhishek-ox/Neuro-Card-Game",
  },
];

export { services, technologies, experiences, certifications, projects };
