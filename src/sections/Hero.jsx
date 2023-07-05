import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=" hero-wrapper ">   
        <div className="wrapper ">
            <section className="hero lg:max-w-7xl px-7 mx-auto flex flex-wrap lg:justify-start justify-center items-start " id='hero'>
                <div className="heroContent lg:text-start text-center pt-20  md:pt-32  md:w-2/3">
                    <div className="title-hero">

                      <h1 className=''>Unlock the power of words with our  expert legislative drafting services. Transform ideas into effective laws  that shape a brighter tomorrow.</h1>
                    </div>
                    <div className="content-hero">

                      <p className=''>It has the power to break down barriers and create a level playing field for  all and it is the backbone of a functioning society, promoting order, justice,  and prosperity.</p>
                    </div>
                    <button className='button_yellow mt-5 px-6 py-2 yellow text-white'>EXPLORE OUR SERVICES</button>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default Hero
