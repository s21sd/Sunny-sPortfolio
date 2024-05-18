import React from 'react'
import Image from 'next/image'
import profileimg from '../../public/sunnyspic3.jpg'
import { LampDemo } from './ui/lamp'
import SocialMedia from '@/Cards/SocialMedia'
const FirstComp = () => {
    return (

        <div className=" flex w-[100%] bg-slate-950 text-black body-font overflow-hidden">
            <div className="lg:w-4/5 mx-auto md:flex md:justify-start md:items-start sm:grid sm:justify-center sm:items-center">
                <div className="w-full lg:w-1/2 lg:mt-10 lg:pl-10 lg:py-6 md:max-w-[500px] md:mt-8 sm:w-full sm:mt-10 ">
                    <Image alt="ecommerce" className=" rounded-[100px] md:w-[400px] md:h-[400px] md:max-w-[400px] bg-[#FEC400] sm:h-[300px] sm:m-auto sm:w-[300px]" src={profileimg} />
                </div>
                <div className='flex flex-col'>
                    <LampDemo />

                </div>
            </div>

        </div >

    )
}

export default FirstComp



