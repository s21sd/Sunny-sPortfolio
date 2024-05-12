"use client"
import React from 'react'
import Image from 'next/image';
type datatype = {
    name: string;
    url: string;
    icon: string;
};
const SkillsCard = ({ items }: any) => {
    return (
        <div className='flex justify-center items-center gap-4 flex-Nowrap mt-4'>
            {
                items.map((e: any) => {
                    return (
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Image className='rounded-full' src={e.icon} alt='logos' width={50} height={50} />
                            <h1 className='text-sm'>{e.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillsCard
