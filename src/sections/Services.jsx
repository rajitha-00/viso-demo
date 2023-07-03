import React from 'react';
import { servicesArray } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="wrapper-servicess">
      <section className="services" id='services'>
        <h1 className='lg:text-3xl tex-blue-950 text-center pt-20'>We Provide Best Service</h1>
        <div className="flex md:flex-shrink items-center justify-between pt-20">

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