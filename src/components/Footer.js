import React from 'react'

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { BsArrowUpCircle } from 'react-icons/bs'

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div>
    <motion.footer 
    className='flex justify-between font-montserrat font-extrabold text-xs sm:text-sm mx-[5%] pb-[1%]'>
        <p>Copyright &copy; {year}. All rights reserved.</p>
        <Link to='home' smooth={true} spy={true}> 
            <p className='flex hover:text-theme-purple cursor-pointer hover:animate-bounce'> <BsArrowUpCircle className='mt-1 mr-2 text-purple-500'/>Go to top</p>
        </Link>
    </motion.footer> 
    </div>
  )
}

export default Footer