"use client"
import React from 'react'
import Image from 'next/image';
type datatype = {
    name: string;
    url: string;
    icon: string;
};
const SkillsCard = ({ items, value }: any) => {

    return (
        <div>
            {
                value === 3 ?
                    <div className='flex gap-4 flex-wrap mt-6'>
                        {

                            items.map((e: any, index: number) => {

                                return (
                                    <div key={index} className='flex flex-col justify-center items-center gap-4 text-white'>
                                        <a href={e.url}>
                                            <Image className='rounded-full' src={e.icon} alt='logos' width={50} height={50} />
                                        </a>
                                        <h1 className='text-sm'>{e.name}</h1>
                                    </div>
                                )
                            })
                        }
                    </div> :

                    <div className='flex gap-4 flex-wrap mt-6'>
                        {
                            items.map((e: any, index: number) => {
                                return (
                                    <div key={index} className='flex flex-col justify-center items-center gap-4 text-white'>
                                        <Image className='rounded-full' src={e.icon} alt='logos' width={50} height={50} />
                                        <h1 className='text-sm'>{e.name}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>

    )
}

export default SkillsCard
