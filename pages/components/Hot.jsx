import React from 'react';
import { FaFire } from 'react-icons/fa'

const Hot = () => {
  return (
    <div className='bg-lightblue h-fit'>
        <div className='flex flex-row justify-start items-center p-10'>
            <div className='pr-5'>
                <FaFire 
                className='text-lg text-grey bg-purple rounded-full p-1'
                />
            </div>

            <div>
                <h2 className='text-purple text-l'>
                    HOT PRODUCTS
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Hot