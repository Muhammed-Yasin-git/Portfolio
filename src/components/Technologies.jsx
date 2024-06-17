import { RiReactjsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaSitemap  } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from "framer-motion";


const iconVariants = (duration)=>({
  initial : {y:-10} ,
  animate : {
    y:[10,-10],
    transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse" ,

    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-xl lg:text-4xl'>Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1 , x:0}}
      initial={{opacity:0 , x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4 mb'>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <RiReactjsFill className=' text-5xl  text-cyan-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <TbBrandNextjs className='text-5xl text-neutral-500' />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <SiMongodb className='text-5xl text-green-800' />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaNodeJs className='text-5xl text-yellow-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <BiLogoPostgresql className='text-5xl text-blue-900' />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaSitemap className='text-5xl text-neutral-600' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies; 
