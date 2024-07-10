import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import contactBook from "../assets/projects/contact-book.png"
import music from "../assets/projects/music.png"
import passwordImg from "../assets/projects/passwordGenerator.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Excellent problem-solving, research, and collaboration abilities. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Beyond my professional pursuits, I find creative inspiration through abstract painting, which fosters a balanced approach to problem-solving and innovation in both personal and professional endeavors.`;

export const EXPERIENCES = [

  {
    year: "Aug 2023 - Sep 2023",
    role: "Frontend Developer",
    company: "Prodigy Infotech",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "MySQL"],
  },

];

export const PROJECTS = [
  {
    title: "Blogify",
    image: project1,
    description:
      "A comprehensive blogging platform enabling users to create, edit, and manage blog posts, with robust user authentication.",
    technologies: ["NodeJs", "MongoDB", "EJS", "ExpressJS"],
    link: "https://github.com/sneha-2510/Blogify",
  },
  {
    title: "Contact Book",
    image: contactBook,
    description:
      "An application for managing contacts, featuring search, filtering, and detailed contact information.",
    technologies: ["React JS", "React Router"],
    link: "https://contact-book-beta.vercel.app/"
  },
  {
    title: "Sorting Visualizer",
    image: project4,
    description:
      "An interactive tool to visualize various sorting algorithms, aiding in the understanding of their operations and efficiencies.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://sneha-2510.github.io/Sorting_Visualizer/"
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "A task and project management application allowing users to create, assign, and track the progress of tasks and projects.",
    technologies: ["ReactJs", "Redux", "Redux Toolkit"],
    link: "https://task-manager-ten-plum.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
    technologies: ["ReactJS", "Framer Motion", "Javascript"],
    link: "https://my-portfolio-sneha-ranis-projects-652b9956.vercel.app/"
  },
  {
    title: "Music Course Website",
    image: music,
    description:
      "A platform for offering and managing music courses, with features such as course listing, enrollment, and progress tracking.",
    technologies: ["NextJS", "Accernity", "Javascript"],
    link: "https://music-courses-app.vercel.app/"
  },
  {
    title: "Password Generator",
    image: passwordImg,
    description:
      "A tool to generate strong, secure passwords, with customizable options for length and character types.",
    technologies: ["ReactJs", "Javascript"],
    link: "https://react-projects-one-fawn.vercel.app/"
  },
];


export const CONTACT = {
  address: "Kolkata , West-Bengal , India",
  phoneNo: "+91 7488306690",
  email: "ranisnehaaa@gmail.com",
};
