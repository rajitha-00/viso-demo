import React from 'react'

const BlogCard = (props) => {
  return (
    <div>
      <div className="md:flex  mx-5  mb-3">
        <div className="imgCard flex mx-auto w-40">
            <img className="max-w-40 h-40" src={process.env.PUBLIC_URL + props.imgUrl} alt="" />
        </div>
        <div className="textCard h-40 px-5 ">
            <h2 className=' '>{props.title}</h2>
            <p className='mt-2'>{props.content}</p>
            <div className="continueBtn flex justify-end w-full">

                <button className='btnRead '>Continue reading...</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
