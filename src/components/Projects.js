import React, { useContext } from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import { themeContext } from '../context/theme/themeContext';

const Projects = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    return (
        <section id="projects" className={`${(darkmode === false) ? 'text-gray-900 bg-gray-100' : 'text-gray-100 bg-gray-900'}  body-font`}>
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${(darkmode === false) ? 'text-gray-900' : 'text-gray-100'}`}>
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Feel free to have a peak. Bugs/Suggestions? notify me about it/them
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-800 bg-gray-900 opacity-100 sm:opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <div className="leading-relaxed">
                                        {project.description}
                                        <div className='flex flex-col lg:flex-row items-center lg:justify-evenly '>
                                            <a href="https://inventory.santimanso.com/" target="_blank" rel="noreferrer">
                                                <button className='flex items-center justify-around m-2 px-14 lg:px-4 py-2 rounded-2xl bg-gray-800 hover:bg-green-700 w-18'>
                                                    <p className='mr-4'>View Live</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                                                    </svg>
                                                </button>
                                            </a>
                                            <a href="https://github.com/santiagomanso/inventory" target="_blank" rel="noreferrer">
                                                <button className='flex items-center justify-around m-2 px-14 lg:px-4 py-2 rounded-2xl bg-gray-800 hover:bg-green-700 w-18'>
                                                    <p className='mr-4'>Front End</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </button>
                                            </a>
                                            <a href="https://github.com/santiagomanso/inventory-server" target="_blank" rel="noreferrer">
                                                <button className='flex items-center justify-around m-2 px-16 lg:px-4 py-2 rounded-2xl bg-gray-800 hover:bg-green-700'>
                                                    <p className='mr-4'>Backend</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;