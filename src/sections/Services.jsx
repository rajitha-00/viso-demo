import React from 'react';
import { servicesArray } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="wrapper-servicess">
      <section className="services md:pt-40 mx-auto " id='services'>
        <h1 className='lg:text-4xl text-xl tex-blue-950 text-center pt-20'>We Provide Best Service</h1>
        <div className="lg:max-w-7xl px-7 mx-auto flex flex-wrap items-center md:justify-between md:pt-20">

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