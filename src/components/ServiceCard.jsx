import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="card items-center justify-center flex w-96 h-96">
        <div className='p-10'>
            <img src={process.env.PUBLIC_URL + props.imgUrl} alt="" />
            <h2 className='text-center'>{props.title}</h2>
            <p className='text-center'>{props.content}</p>
        </div>
    </div>
  );
}

export default ServiceCard;