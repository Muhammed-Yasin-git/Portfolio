import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { SiMongodb , SiExpress  } from 'react-icons/si';
import { FaNodeJs, FaSitemap, FaJsSquare } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from "framer-motion";
import '../technologies.css'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const Tooltip = ({ children, text }) => (
  <div className="relative group">
    <div className="absolute hidden px-2 py-1 text-xs text-white transform -translate-x-1/2 bg-gray-700 rounded -top-8 left-1/2 group-hover:block">
      {text}
    </div>
    {children}
  </div>
);

const Technologies = () => {
  return (
    <div className='pb-24 border-b border-neutral-800'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-xl text-center lg:text-4xl'>
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4 mb'>
        <Tooltip text="React">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='p-2 border-4 rounded-2xl border-neutral-800 sm:p-4 backdrop-blur-sm'>
            <RiReactjsFill className='text-5xl text-cyan-400' />
          </motion.div>
        </Tooltip>
        <Tooltip text="Express">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='p-2 border-4 rounded-2xl border-neutral-800 sm:p-4 backdrop-blur-sm'>
            <SiExpress className='text-5xl text-neutral-500' />
          </motion.div>
        </Tooltip>
        <Tooltip text="MongoDB">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='p-2 border-4 rounded-2xl border-neutral-800 sm:p-4 backdrop-blur-sm'>
            <SiMongodb className='text-5xl text-green-800' />
          </motion.div>
        </Tooltip>
        <Tooltip text="Node.js">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='p-2 border-4 rounded-2xl border-neutral-800 sm:p-4 backdrop-blur-sm'>
            <FaNodeJs className='text-5xl text-yellow-400' />
          </motion.div>
        </Tooltip>
        <Tooltip text="PostgreSQL">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='p-2 border-4 rounded-2xl border-neutral-800 sm:p-4 backdrop-blur-sm'>
            <BiLogoPostgresql className='text-5xl text-blue-900' />
          </motion.div>
        </Tooltip>
        <Tooltip text="Data Structures">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='p-2 border-4 rounded-2xl border-neutral-800 sm:p-4 backdrop-blur-sm'>
            <FaSitemap className='text-5xl text-neutral-600' />
          </motion.div>
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default Technologies;
