import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto pt-0 md:pt-12 lg:pt-32'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[70%] mix-blend-lighten
          bg-top lg:mr-10 xl:mr-2 mt-[28%] xl:mt-[5%] md:mb-3'></motion.div>

          {/* text */}
          <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <div className='text-center lg:text-left xl:mt-12'>
              <h1 className='font-montserrat uppercase text-gradient text-[26px] mb-4 md:mb-6'>About me:</h1>
              <h3 className='font-montserrat font-black text-lg lg:text-2xl mb-1 md:mb-2'>Front-end Developer based in Brazil. Passioned by clean UI and always keen to explore and learn new technologies in this fast paced industry.</h3>
              <p className='font-montserrat text-gradient pb-5'>___________________________________________________________</p>
              {/* <p className='font-montserrat mb-6'>When not working in a project I like to prioritize moments with nature or spend hours at the gym</p> */}
          
          {/* skills */}
              <p className='text-gradient font-montserrat font-black uppercase text-2xl mb-4 md:mb-8'>Technologies I've worked with:</p>
              <div className='font-montserrat font-black'>
                <ul className='flex justify-center lg:justify-start gap-2 md:gap-4 pb-3 text-lg md:text-xl'>
                  <li><span className='text-gradient mr-1'>&#9900;</span>React</li>
                  <li><span className='text-gradient mr-1'>&#9900;</span>HTML</li>
                  <li><span className='text-gradient mr-1'>&#9900;</span>CSS</li>
                  <li><span className='text-gradient mr-1'>&#9900;</span>JavaScript</li>
                </ul>
                <ul className='flex justify-center lg:justify-start gap-2 md:gap-4 pb-3 text-lg md:text-xl'>
                  <li><span className='text-gradient mr-1'>&#9900;</span>Mongodb</li>
                  <li><span className='text-gradient mr-1'>&#9900;</span>Redux</li>
                  <li><span className='text-gradient mr-1'>&#9900;</span>Java</li>
                  <li><span className='text-gradient mr-1'>&#9900;</span>Python</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
