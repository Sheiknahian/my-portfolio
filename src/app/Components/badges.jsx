import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiRender,
  SiNetlify,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = {
  html: {
    name: "HTML5",
    icon: <FaHtml5 />,
    className:
      "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  },

  css: {
    name: "CSS3",
    icon: <FaCss3Alt />,
    className:
      "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  },

  javascript: {
    name: "JavaScript",
    icon: <FaJs />,
    className:
      "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
  },

  react: {
    name: "React",
    icon: <FaReact />,
    className:
      "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20",
  },

  nextjs: {
    name: "Next.js",
    icon: <SiNextdotjs />,
    className:
      "bg-gray-700/10 text-black border border-gray-500/20",
  },

  tailwind: {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    className:
      "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  },

  nodejs: {
    name: "Node.js",
    icon: <FaNodeJs />,
    className:
      "bg-green-500/10 text-green-400 border border-green-500/20",
  },

  express: {
    name: "Express.js",
    icon: <SiExpress />,
    className:
      "bg-gray-500/10 text-gray-600 border border-gray-500/20",
  },

  mongodb: {
    name: "MongoDB",
    icon: <SiMongodb />,
    className:
      "bg-green-500/10 text-green-400 border border-green-500/20",
  },

  firebase: {
    name: "Firebase",
    icon: <SiFirebase />,
    className:
      "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  },

  vercel: {
    name: "Vercel",
    icon: <SiVercel />,
    className:
      "bg-black text-white border border-white/20",
  },

  render: {
    name: "Render",
    icon: <SiRender />,
    className:
      "bg-black text-white border border-white/20",
  },

  netlify: {
    name: "Netlify",
    icon: <SiNetlify />,
    className:
        "bg-teal-500/10 text-teal-600 border border-teal-500/20",
  },

  git: {
    name: "Git",
    icon: <FaGitAlt />,
    className:
      "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  },

  github: {
    name: "GitHub",
    icon: <FaGithub />,
    className:
      "bg-gray-500/10 text-gray-600 border border-gray-500/20",
  },

  vscode: {
    name: "VS Code",
    icon: <VscVscode />,
    className:
        "bg-blue-500/10 text-blue-500 border border-blue-500/20",
  },

  canva: {
    name: "Canva",
    icon: <SiCanva />,
    className:
        "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
   },

    figma: {
    name: "Figma",
    icon: <SiFigma />,
    className:
        "bg-pink-500/10 text-pink-400 border border-pink-500/20",
    },

    photoshop: {
    name: "Photoshop",
    icon: <TbBrandAdobePhotoshop />,
    className:
        "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    },
};

export const frontend = [
  skills.html,
  skills.css,
  skills.javascript,
  skills.react,
  skills.nextjs,
  skills.tailwind,
];

export const backend = [
  skills.nodejs,
  skills.express,
  skills.mongodb,
  skills.firebase,
];

export const deployment = [
  skills.vercel,
  skills.netlify,
  skills.render,
];

export const tools = [
  skills.git,
  skills.github,
  skills.vscode,
  skills.figma,
  skills.photoshop,
  skills.canva,
];