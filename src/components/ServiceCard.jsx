import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="card mt-10 mb-10 items-center justify-center flex mx-auto w-96 h-96">
        <div className='p-10'>
            <img src={process.env.PUBLIC_URL + props.imgUrl} alt="" />
            <h2 className='text-center mt-3 '>{props.title}</h2>
            <p className='text-center mt-3'>{props.content}</p>
        </div>
    </div>
  );
}

export default ServiceCard;