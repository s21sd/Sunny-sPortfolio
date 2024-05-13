"use client";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React from 'react'
const words = `Hii👋 My name is Sunny Srivastava. I am a final year Computer Science student. I am a passionate developer. In my free time , I like to play with code and learn new skills. I like to play football.`;

const page = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 ">
            <div className='mt-20'>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">About me </h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[13%]"></div>
            </div>
            <div>
                <TextGenerateEffect words={words} />;
            </div>
        </div>
    )
}

export default page
