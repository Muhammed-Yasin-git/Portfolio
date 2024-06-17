import project1 from "../assets/projects/sellzy.png";
import project2 from "../assets/projects/Task-Management.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/netflix.png";
import project5 from "../assets/projects/olx.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Student",
    company: "Brototype",
    description: `Stud.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "EJS", "Node.js", "MongoDB" , "JavaScript"],
    link: "https://sellzy-ecommerce.onrender.com/",
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
    image: project4,
    description:
      "An exact clone of netflix  where we can watch movie trailers and upcoming movies integrated with apis.",
    technologies: ["Tailwind CSS", "React", "FireBase" , "Vite"],
    link: "https://netflix-clone-beta-snowy.vercel.app/",
  },
  {
    title: "Olx Clone",
    image: project5,
    description:
      "An exact clone of olx  where we can sell and buy diffrent types of products.",
    technologies: ["Tailwind CSS", "React", "FireBase" , "Vite"],
    link: "https://olx-clone-tawny.vercel.app/",
  },
];

export const CONTACT = {
  address: "Mundappurath House Ayanikkad Chirayil (P.O) Kondotty Malappuram Kerala India 673638",
  phoneNo: "+91 8301 99 8370 ",
  email: "muhammedyasin8622@gmail.com",
};
