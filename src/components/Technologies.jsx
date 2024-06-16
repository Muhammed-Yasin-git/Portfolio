import { RiReactjsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaSitemap  } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-xl lg:text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4 mb'>
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <RiReactjsFill className='text-md sm:text-xl lg:text-5xl text-cyan-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <TbBrandNextjs className='text-md sm:text-xl lg:text-5xl text-neutral-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <SiMongodb className='text-md sm:text-xl lg:text-5xl text-green-800' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaNodeJs className='text-md sm:text-xl lg:text-5xl text-yellow-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <BiLogoPostgresql className='text-md sm:text-xl lg:text-5xl text-blue-900' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-2 sm:p-4'>
          <FaSitemap className='text-md sm:text-xl lg:text-5xl text-neutral-600' />
        </div>
      </div>
    </div>
  );
};

export default Technologies; 
