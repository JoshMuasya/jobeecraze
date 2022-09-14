import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BsArrowDownCircleFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='h-fit'>
        <div className='h-fit bg-purple'>
            <div className='flex flex-row justify-end items-center p-5 mr-20'>
                <div className='text-grey pr-15'>
                    <FaShoppingCart size={30}/>
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

        <div>
            my account
        </div>
    </div>
  )
}

export default Navbar