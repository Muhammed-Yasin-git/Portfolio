import React from 'react'
import logo from '../assets/my-logo.svg'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/muhammed-yasiin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Muhammed-Yasin-git/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/mhd.yasiiin_?igsh=MXJpanFuZjg4ZnBxMA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://x.com/Muhd_Yasiiin?t=Ccyv6_enspaKRszfUm5lJw&s=09" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
