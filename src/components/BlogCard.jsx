import React from 'react'

const BlogCard = (props) => {
  return (
    <div>
      <div className="flex">
        <div className="imgCard">
            <img src={process.env.PUBLIC_URL + props.imgUrl} alt="" />
        </div>
        <div className="textCard">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button>Continue reading...</button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
