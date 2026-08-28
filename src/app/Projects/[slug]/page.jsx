import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { techMap } from '../page';
import { GrGithub } from 'react-icons/gr';

const getProject = async(slug) => {
    const result = await fetch('/projects.json').then(res=>res.json())
    return result.find(res=>res.slug === slug)
}
const Details = async({params}) => {
    const {slug} = await params
    const project = await getProject(slug)
    console.log(project);
    
    return (
        <main className="min-h-screen px-6 py-24">
            <div className="mx-auto max-w-400">

                {/* Back */}
                <Link
                href="/Projects"
                className="mb-10 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gray-500"
                >
                ← Back to Projects
                </Link>

                {/* Main Section */}
                <section className="grid items-center gap-12 lg:grid-cols-2">

                {/* LEFT - IMAGE */}
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-gray-100 shadow-xl">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                    priority
                    />
                </div>

                {/* RIGHT - CONTENT */}
                <div>

                    <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-sky-500">
                        {project.category}
                    </span>

                    <span className="text-sm text-green-400">
                        {project.status}
                    </span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {project.title}
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
                    {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 bg-white p-5 rounded-2xl max-w-120">
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-500">
                        Technologies
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {project?.technologies.map((technology, index) => (
                        <span
                            key={index}
                            className={`flex items-center gap-1 px-2 rounded-full ${
                            techMap[technology].className
                            }`}
                        >
                            {techMap[technology].icon}
                            {techMap[technology].name}
                        </span>
                        ))}
                    </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                    {project.liveLink && (
                        <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:scale-105"
                        >
                            Live Demo ↗
                        </a>
                    )}

                    {project.githubClient && (
                        <a
                        href={project.githubClient}
                        target="_blank"
                        className="rounded-xl border border-white px-6 py-3 flex items-center gap-1 font-medium transition hover:bg-gray-100 hover:text-black"
                        >
                            <GrGithub></GrGithub>
                            GitHub ↗
                        </a>
                    )}

                    </div>
                </div>
                </section>

                {/* FEATURES */}
                <section className="mt-24 border-t border-black/10 pt-16">

                <h2 className="text-3xl font-bold">
                    Key Features
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {project.Home?.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-2xl bg-white border border-black/10 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <span className="text-sm text-sky-500">
                        0{index + 1}
                        </span>

                        <p className="mt-3 font-medium text-black">
                        {feature}
                        </p>
                    </div>
                    ))}
                </div>

                </section>

            </div>
        </main>
    );
};

export default Details;