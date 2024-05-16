import React from 'react'
import Image from 'next/image'
import profileimg from '../../public/sunnyspic3.jpg'
import { LampDemo } from './ui/lamp'
import SocialMedia from '@/Cards/SocialMedia'
const FirstComp = () => {
    return (

        <div className=" flex  w-[100%] bg-slate-950 text-black body-font overflow-hidden">
            <div className="lg:w-4/5 mx-auto flex ">
                <div className="lg:w-1/2 max-w-[500px] w-full md:mt-8 lg:pl-10 lg:py-6 lg:mt-10">
                    <Image alt="ecommerce" className=" rounded-[40px] w-[400px] h-[400px] max-w-[400px] bg-[#FEC400]" src={profileimg} />
                </div>
                <div className='flex flex-col'>
                    <LampDemo />
                    <SocialMedia />
                </div>
            </div>

        </div >

    )
}

export default FirstComp



