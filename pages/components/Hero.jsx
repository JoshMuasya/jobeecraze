import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-screen flex flex-row justify-center align-center 
    items-center bg-lightpurple relative'>
        <div className='pr-10 absolute left-20 top-3 pl-20'>
            <div className='bg-purple text-grey items-center'>
                <h3 className='p-5 text-center'>
                    CATEGORIES
                </h3>
            </div>
        
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
            <div className=''>
                <h4 className='p-2 text-center hover:bg-brightpurple cursor-pointer'>
                    Categories
                </h4>
            </div>
        </div>

        <div className='absolute right-10 top-17 pr-20'>
            <Image src="/beckybag.jpg" alt="Hot selling Products" 
            width="750px" height="600px" objectFit='cover'
            className=''
            />
        </div>
    </div>
  )
}

export default Hero