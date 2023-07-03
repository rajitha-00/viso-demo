import React from 'react'
import { projectsArray } from '../constants';
import BlogCard from '../components/BlogCard';
import BloagFig from '../assets/project_1.png'
const Projects = () => {
  return (
    <>
      <section className="projects" id='projects'>
        <h1 className="lg:text-3xl text-blue-950">Successfully completed projects</h1>
        <div className="flex md:flex-shrink-0">
          <div className="left-side w-1/2">
            <img src={BloagFig} alt="" />
            <h2>Blog name here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
            <button>Continue reading...</button>
          </div>
          <div className="right-side w-1/2">
          {projectsArray.map((project) => (
          <BlogCard
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            content={project.content}
          />
        ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
