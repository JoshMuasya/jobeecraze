import React from 'react';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { BsArrowDownCircleFill, BsQuestion } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiArrowSortedDown } from 'react-icons/ti';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-fit'>
        <div className='h-fit bg-purple'>
            <div className='flex flex-row justify-end items-center p-5 mr-20'>
                <div className='text-grey pr-10'>
                    <FaShoppingCart 
                    className='text-l'
                    />
                </div>

                <div className='pl-15'>
                    <div className='flex flex-col items-center align-center'>
                        <div className='flex flex-row'>
                            <div>
                                <h4 className='text-grey font-bold'>
                                    For Orders
                                </h4>
                            </div>

                            <div className='text-grey pl-2'>
                                < BsArrowDownCircleFill />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-grey font-bold'>
                                +254 708158836
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row align-center justify-between items-center pt-5 pb-5'>
            <div className='items-center ml-20'>
               <Link href="/">
                    <Image src="/Logo.jpg" alt="Logo" width="50" height="50"
                    className='rounded-2xl'
                    />
               </Link> 
            </div>

            <div className='w-max pr-5 relative'>
                <div className='flex items-center'>
                    <BiSearchAlt 
                    className='text-lg absolute'
                    />

                    <input type="text" placeholder='Search' 
                    className='text-ml pl-10 py-2'
                    />
                </div>
            </div>

            <div className='flex flex-row justify-center items-center'>
                <div className='pr-2'>
                    <BsQuestion className='text-l'/>
                </div>
                <div className='pr-2'>
                    <h4 className='text-ml'>
                        Help
                    </h4>
                </div>
                <div>
                    <TiArrowSortedDown className='text-ml'/>
                </div>
            </div>

            <div className='flex flex-row justify-end items-center mr-20'>
                <div className='pr-3'>
                    <FaUserAlt className='text-l'/>
                </div>
                <div className='pr-2'>
                    <h4 className='text-ml'>
                        My Account
                    </h4>
                </div>
                <div>
                    <TiArrowSortedDown 
                    className='text-ml'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar