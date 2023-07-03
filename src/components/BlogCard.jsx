import React from 'react'

const BlogCard = (props) => {
  return (
    <div>
      <div className="md:flex  mx-5 mt-10 mb-10">
        <div className="imgCard flex mx-auto w-40">
            <img className="max-w-40 h-40" src={process.env.PUBLIC_URL + props.imgUrl} alt="" />
        </div>
        <div className="textCard px-5 ">
            <h2 className='lg:text-2xl text-blue-950 mt-5'>{props.title}</h2>
            <p className='mt-5'>{props.content}</p>
            <div className="continueBtn flex justify-end w-full">

                <button className='text-orange-400 '>Continue reading...</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
