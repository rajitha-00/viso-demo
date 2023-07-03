import React from 'react'

const AboutBox = (props) => {
  return (
    <>
    <div className="aboutBox flex md:px-10 items-top  mt-5 justify-start lg:w-">
        <img className="w-12 h-12 mr-3" src={props.urlImage} alt="" />
        <p className='text-gray-400 ml-2'>{props.text}</p>
    </div>
    </>
  )
}

export default AboutBox
