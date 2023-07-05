import React from 'react'
import { projectsArray } from '../constants';
import BlogCard from '../components/BlogCard';
import BloagFig from '../assets/project_1.png'
const Projects = () => {
  return (
    <>
      <section className="projects maxWidthPage pt-20 mb-20  mx-auto " id='projects'>
        <h1 className="text-center md:text-start px-5 ">Successfully completed projects</h1>
        <div className="maxWidthPage mt-5 mx-auto lg:flex md:flex-wrap md:justify-between">
          <div className="left-side lg:w-1/2 px-5">
            <img src={BloagFig} alt="" />
            <h2 className='mt-5'>Blog name here</h2>
            <p className='mt-2'>Lorem ipsum dolor sit amet,  Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
            <div className="continueBtn flex justify-end w-full">

              <button className='btnRead '>Continue reading...</button>
            </div>
          </div>
          <div className="right-side lg:w-1/2 sm:flex sm:flex-wrap flex-col justify-between">
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
