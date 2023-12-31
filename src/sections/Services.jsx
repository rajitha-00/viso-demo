import React from 'react';
import { servicesArray } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="wrapper-servicess">
      <section className="services  mx-auto " id='services'>
        <h1 className='text-center pt-20'>We Provide Best Service</h1>
        <div className="maxWidthPage px-7 mx-auto flex flex-wrap items-center md:justify-between pb-16">

        {servicesArray.map((service) => (
          <ServiceCard
            key={service.id}
            imgUrl={service.imgUrl}
            title={service.title}
            content={service.content}
          />
        ))}
        </div>
      </section>
    </div>
  );
}

export default Services;