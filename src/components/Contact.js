import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {

  return (
    <section className='pt-[260px] md:pt-[300px] pb-[245px]' id='contact'>
        <div className='md:mx-[5%]'>
          <div className='flex flex-col md:flex-row'>
            {/* text */}
            <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
            className='flex-1'>
              <div className='text-center md:text-left xl:pl-[60px]'>
                <h4 className='text-lg uppercase font-montserrat text-gradient mb-2 tracking-wide'>Get in touch</h4>
                <h2 className='text-[42px] md:text-[60px] xl:text-[80px] font-montserrat leading-none mb-14'>Let's collaborate and get <br />creative together</h2>
              </div>
            </motion.div>
            {/* contact */}
            <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
             className='font-montserrat text-xl xl:text-2xl md:pl-[8%] xl:pr-[110px] mt-[6px]'>
              <h3 className='font-montserrat text-gradient uppercase pb-6 text-center'>Contact Me</h3>
              <div className='flex justify-around md:flex-col sm:mx-[4%]'>
                  <a href="mailto:rute00801@gmail.com">
                    <p className='pb-2 hover:text-[#b08ac0] cursor-pointer'>E-mail</p>
                  </a>
                  <a href='https://www.instagram.com/ruwte/'>
                    <p className='pb-2 hover:text-[#b08ac0] cursor-pointer'>Instagram</p>
                  </a>
                  <a href='https://github.com/RuteYacy'>
                    <p className='hover:text-[#b08ac0] cursor-pointer'>GitHub</p>
                  </a>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
