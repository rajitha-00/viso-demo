import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=" hero-wrapper mt-16">   
        <div className="wrapper ">
            <section className="hero lg:max-w-7xl px-7 mx-auto flex flex-wrap " id='hero'>
                <div className="heroContent md:text-start text-center  pt-32 md:pt-56 md:w-1/2">
                    <h1 className='lg:text-4xl text-xl font-semibold text-blue-950'>Unlock the power of words with our <br /> expert legislative drafting services. <br />Transform ideas into effective laws <br /> that shape a brighter tomorrow.</h1>
                    <p className='text-gray-700 mt-5'>It has the power to break down barriers and create a level playing field for <br /> all and it is the backbone of a functioning society, promoting order, justice, <br /> and prosperity.</p>
                    <button className='mt-5 px-6 py-2 bg-orange-400 text-white'>EXPLORE OUR SERVICES</button>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default Hero
