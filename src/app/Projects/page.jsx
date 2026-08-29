import React from 'react';
import H3Text from '../Components/h3Text';
import { FaArrowRight, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiNextdotjs, SiStripe } from "react-icons/si";
import Link from 'next/link';
import Image from 'next/image';

export const techMap = {
    html: {
        name: "HTML5",
        icon: <FaHtml5></FaHtml5>,
        className: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    },

    javascript: {
        name: "JavaScript",
        icon: <FaJs></FaJs>,
        className: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
    },
    nodejs: {
        name: "Nodejs",
        icon: <FaNodeJs></FaNodeJs>,
        className: "bg-green-100 text-green-600 border border-green-500/20",
    },

    firebase: {
        name: "Firebase",
        icon: <SiFirebase></SiFirebase>,
        className: "bg-amber-100 text-amber-600 border border-amber-500/20",
    },

    react: {
        name: "React",
        icon: <FaReact></FaReact>,
        className: "bg-cyan-100 text-cyan-700 border border-cyan-500/20",
    },

    mongodb: {
        name: "MongoDB",
        icon: <SiMongodb></SiMongodb>,
        className: "bg-green-100 text-green-600 border border-green-500/20",
    },

    express: {
        name: "Express",
        icon: <SiExpress></SiExpress>,
        className: "bg-gray-100 text-gray-600 border border-gray-500/20",
    },

    tailwind: {
        name: "Tailwind CSS",
        icon: <SiTailwindcss></SiTailwindcss>,
        className: "bg-sky-100 text-sky-900 border border-sky-500/20",
    },
    nextjs: {
        name: "Next.js",
        icon: <SiNextdotjs />,
        className: "bg-gray-700/10 text-black border border-gray-500/20",
    },
    stripe: {
        name: "Stripe",
        icon: <SiStripe />,
        className: "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20",
    },
};
const getProjects = async() => {
    const res = await fetch('/projects.json').then(res=>res.json())
    return res
}
const Projects = async() => {
    const projects = await getProjects()
    // console.log(projects[0]?.technologies.map((tech) => techMap[tech]))
    return (
        <div className='mt-30 mb-20 text-center mx-5'>
            <H3Text>My Projects</H3Text>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                projects?.map((project, index)=>
                    <div key={index} className="bg-white overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/30 shadow hover:shadow-sky-400 shadow-lg">
                    
                            <Image width={1400} height={800} src={project.image} alt="Project Preview" className="h-52 w-full object-cover transition duration-500 hover:scale-110"/>
                            <div className="p-5">
                                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                                    {project.category}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-gray-800">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    {project.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                {
                                    project.technologies.map((tech, index)=>
                                        <span className={`${techMap[tech].className} flex items-center gap-2 px-2 rounded-full`} key={index}>
                                            {techMap[tech].icon}
                                            {techMap[tech].name}
                                        </span>
                                    )
                                }
                                </div>

                                <Link href={`/Projects/${project.slug}`} className="group flex items-center gap-2 justify-center mt-5 w-full rounded-lg bg-sky-700 py-2 font-semibold text-white transition hover:bg-sky-800 cursor-pointer">
                                    View Details
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                )
            }
            </div>
        </div>
    );
};

export default Projects;