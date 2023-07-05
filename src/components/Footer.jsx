import { useState } from 'react'
import {navigation} from '../constants'
import Fb from '../assets/fb.png'
import Insta from '../assets/insta.png'
import LinkedIn from '../assets/linkedin.png'
import Twitter from '../assets/twiter.png'
const Footer = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  return (
    <footer className='w-full'>

        <div className="mt-20 bg-blue-950 w-full py-24 sm:py-32">
        <div className="mx-auto  px-6 lg:px-8">
            <div className="maxFooter flex flex-wrap justify-between items-center w-full">
                <div className="left mt-5">
                  <h1 className='text-4xl lg:pl-28 text-white'>LOGO</h1>
                </div> 
                <div className="mt-5 mid flex gap-x-5 md:gap-x-12">
                  {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-semibold leading-6 ${item.name === activeNavItem ? 'text-orange-400' : 'text-white'}`}
                    onClick={() => setActiveNavItem(item.name)}
                    >                
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="right mt-5">
                    <div className="icons_container flex justify-end gap-x-3">
                      <a href="#">
                        <img  src={Fb} className='w-9 footerIcon' alt="" />
                      </a>
                      <a href="#">
                        <img src={Twitter} className='w-10 footerIcon' alt="" />
                      </a>
                      <a href="#">
                       <img src={LinkedIn} className='w-9 footerIcon' alt="" />  
                      </a>
                      <a href="#">
                        <img src={Insta} className='w-9 footerIcon' alt="" />
                      </a>
                        
                       


                    </div>
                    <div className="textFoter mt-3">
                      <p>© 2023 Viso Group — ALL RIGHTS RESERVED</p>
                    </div>
                </div>         
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
