import React from 'react'
import { projectsArray } from '../constants';
import BlogCard from '../components/BlogCard';
import BloagFig from '../assets/project_1.png'
const Projects = () => {
  return (
    <>
      <section className="projects pt-20  md:pt-40 lg:max-w-7xl mx-auto " id='projects'>
        <h1 className="md:text-4xl text-center text-xl text-blue-950 px-7 md:mt-20 font-semibold">Successfully completed projects</h1>
        <div className="lg:max-w-7xl mt-5 mx-auto lg:flex md:flex-wrap md:justify-between">
          <div className="left-side lg:w-1/2 px-5">
            <img src={BloagFig} alt="" />
            <h2 className='md:text-2xl text-blue-950 mt-5 font-semibold'>Blog name here</h2>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
            <div className="continueBtn flex justify-end w-full">

              <button className='text-orange-400 '>Continue reading...</button>
            </div>
          </div>
          <div className="right-side lg:w-1/2 sm:flex sm:flex-wrap">
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
