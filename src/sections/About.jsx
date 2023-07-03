import React from 'react'
import AboutBox from '../components/AboutBox'
import Law from '../assets/about_law.png'
import Bank from '../assets/about_bank.png'
import Grad from '../assets/about_grad.png'
import AboutFig from '../assets/about.png'
import Line from '../assets/about_line.png'

const About = () => {
  return (
    <>
    <div className="wrapper">

      <section className='about   ' id='about'>
        <div className="lg:max-w-7xl px-7 mx-auto md:flex md:flex-wrap items-center md:justify-between pt-20">

          <div className="left-side  md:w-2/3 ">
              <h1 className='text-white lg:text-3xl md:px-10 mt-5'>23+ Experience in Legislative Drafting</h1>
              <img className=' md:px-10 mt-4' src={Line} alt="" />
              <h3 className='text-gray-400 md:px-10 mt-16'>As a Deputy Legal Draftsman in the Legal Draftsman Department of Sri Lanka</h3>
              <AboutBox
              urlImage={Law}
              text="I have a proven track record of drafting primary legislations, amending existing legislations, and incorporating body of persons."
              />
              <AboutBox
              urlImage={Bank}
              text="I have attended several courses in Legislative Drafting, including the International Programme in Legislative Drafting conducted by Bureau of Parliamentary Studies and Drafting, Parliament of India, Translating Policy into Legislation and Drafting Course conducted by Judicial and Legal Training Institute, Malaysia, and the Legislative Drafting Course conducted by the Institute of Advanced Legal Studies, University of London, among others."
              />
              <AboutBox
              urlImage={Grad}
              text="I have completed the Advanced Legislative Drafting course by the International Law Institute, Washington DC, United States of America in 2018."
              />
          </div>
          <div className="right-side md:w-1/3 ">
              <div className="flex justify-end">

                <h1 className='text-blue-950 lg:text-3xl'>About Me</h1>
              </div>
              <img className='mt-20 pb-10' src={AboutFig} alt="" />
          </div>
        </div>
     
      </section>
    </div>
    </>
  )
}

export default About
