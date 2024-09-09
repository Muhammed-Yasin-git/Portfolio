import project1 from "../assets/projects/sellzy.png";
import project2 from "../assets/projects/Task-Management.png";
import project3 from "../assets/projects/netflix.png";
import project4 from "../assets/projects/olx.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a skilled fresher with a deep dedication to coding, investing the past 10 months in mastering the intricacies of the MERN stack (MongoDB, Express.js, React, and Node.js), alongside comprehensive studies in data structures and PostgreSQL. Building and refining projects has not only been a learning experience but a passion that drives my continuous improvement. Beyond coding, I find relaxation in watching movies and actively engaging in football matches. These activities not only complement my focused approach to learning and problem-solving but also enrich my ability to collaborate and communicate effectively in diverse environments. I am enthusiastic about leveraging my skills and experiences to tackle new challenges and contribute meaningfully to innovative projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Student",
    company: "Brototype",
    description: `I am currently enrolled in a bootcamp that emphasizes self-study, where I have been learning and mastering the MERN stack over the past 10 months. During this time, I have developed a thorough understanding of MongoDB, Express.js, React, and Node.js. Additionally, I have gained knowledge in data structures and PostgreSQL. I have applied my skills by building several projects, and I continue to enhance my expertise. As a result, I am now a skilled fresher ready to contribute to challenging projects.`,
    technologies: [ "MERN" ,"Javascript"  ,"PostgresSQL" ,"Data Structures" , "Tailwind CSS"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "EJS", "Node.js", "MongoDB" , "JavaScript"],
    link: "https://sellzy.online/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: [ "React", "Firebase"],
    link: "https://to-do-list-rust-gamma.vercel.app/",
  },
  {
    title: "Netflix Clone",
    image: project3,
    description:
      "An exact clone of netflix  where we can watch movie trailers and upcoming movies integrated with apis.",
    technologies: ["Tailwind CSS", "React", "FireBase" , "Vite"],
    link: "https://netflix-clone-rose-xi.vercel.app",
  },
  {
    title: "Olx Clone",
    image: project4,
    description:
      "An exact clone of olx  where we can sell and buy diffrent types of products.",
    technologies: ["Tailwind CSS", "React", "FireBase" , "Vite"],
    link: "https://olx-clone-plum-phi.vercel.app/",
  },
];

export const CONTACT = {
  address: "Mundappurath House Ayanikkad Chirayil (P.O) Kondotty Malappuram Kerala India 673638",
  phoneNo: "+91 8301 99 8370 ",
  email: "muhammedyasin8622@gmail.com",
};
