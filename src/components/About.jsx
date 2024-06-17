import React from 'react';
import aboutImage from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa'; 

function About() {
  
  const cvUrl = '../assets/Muhammed_Yasin_CV.pdf';

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-2xl lg:text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h2>
      <div className='flex flex-wrap '>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img className='rounded-lg lg:rounded' src={aboutImage} alt='' />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</p>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <a href={cvUrl} download='Muhammed_Yasin_CV.pdf' className='flex items-center mt-4 text-neutral-500'>
              <FaFileDownload className='mr-2' /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
