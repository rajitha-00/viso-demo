import React from 'react'
import ContactFig from '../assets/contact.png'
const Contact = () => {
  return (
    <>
      <div className="wrapper-contact">

      <section className="contact pt-60   flex items-center justify-center" id='contact'>
        <div className="contactCard bg-white  px-10 py-10 ">


          <div className="mx-auto flex  items-center justify-around">

            <div className="left-side mx-5">
            <h1 className='lg:text-3xl text-blue-950 text-xl text-center font-semibold md:text-start'>Get In Touch</h1>
              <form action="#" method="POST" className="max-w-3xl mt-5">
              <div className="grid grid-cols-1 gap-x-9 gap-y-6 sm:grid-cols-2">
                <div>

                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder='Name'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>

                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder='Email "example@example.com"'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      autoComplete="organization"
                      placeholder='Subject'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>


                <div className="sm:col-span-2">

                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      placeholder='Message...'
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>

              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex justify-center px-10  button_yellow py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 "
                >
                  Send <span className='mt-0.5'> <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</span>
                </button>
              </div>
              </form>

            </div>
            <div className="right-side hidden sm:block ">
              <img src={ContactFig} className="" alt="" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact
