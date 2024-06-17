import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center text-xl lg:text-4xl'>Get In Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.div 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1}}
        className='my-4'>
          {CONTACT.address}
        </motion.div>
        <motion.div
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:100}}
        transition={{duration:1}}
        className='my-4'>
          <a href="tel:+918301998370">{CONTACT.phoneNo}</a>
        </motion.div>
        <motion.div
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1}}
        className='my-4'>
          <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
