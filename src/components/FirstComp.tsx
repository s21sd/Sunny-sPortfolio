import React from 'react'
import Image from 'next/image'
import profileimg from '../../public/sunnyspic3.jpg'
import { LampDemo } from './ui/lamp'
import SocialMedia from '@/Cards/SocialMedia'
import { SecondComp } from './SecondComp'
const FirstComp = () => {
    return (

        <div className=" flex w-[100%] bg-slate-950 text-black body-font overflow-hidden">
            <div className="gap-10 lg:w-4/5 mx-auto md:flex md:justify-start md:items-start sm:grid sm:justify-center sm:items-center">
                <div className="w-full m-auto lg:w-1/2 lg:mt-10 lg:pl-10 lg:py-6 md:max-w-[500px] md:mt-8 sm:w-full sm:mt-10 ">
                    <Image alt="ecommerce" className=" w-[300px] m-auto mt-10 rounded-[100px] md:w-[400px] md:h-[400px] md:max-w-[400px] bg-[#FEC400] sm:m-auto " src={profileimg} />
                </div>
                <div className='flex flex-col'>
                    {/* <LampDemo /> */}
                    <SecondComp />

                </div>
            </div>

        </div >

    )
}

export default FirstComp



