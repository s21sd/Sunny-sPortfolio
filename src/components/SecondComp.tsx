"use client"
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { useRouter } from "next/navigation";
import SocialMedia from "@/Cards/SocialMedia";

export function SecondComp() {
    const router = useRouter()
    const downloadResume = () => {
        const fileUrl = 'https://drive.google.com/file/d/1RhlqKXig5Jgaj7XWc1A3o1P5HcfKmr80/view?usp=sharing';
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'resume.pdf';
        anchor.click();
    };
    const words = ["FullStack Developer", "Android Developer", "Learner"];

    return (
        <div className="h-[40rem] flex justify-center items-center px-4">


            <div className="flex flex-col m-auto w-[90%] lg:pl-10 lg:py-6 mt-6 lg:mt-10 gap-2">
                <h1 className="text-white text-3xl mb-1 tracking-wide font-Merriweather ">Hello!</h1>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">I'm SUNNY</h1>
                <div className="text-2xl font-normal text-white dark:text-neutral-400 font-pacificoregular sm:text-3xl md:text-4xl lg:text-4xl">

                    <FlipWords words={words} /> <br />
                </div>
                <p className="leading-relaxed text-gray-400 font-Merriweather mt-4">I enjoy making things for the internet. My interest in web development began in 2021, when I decided to learn HTML and CSS and observe the changes in real time. </p>

                <div className="flex justify-center gap-4 items-center mt-2 font-pacificoregular sm:justify-start md:justify-start lg:justify-start">
                    <button onClick={downloadResume} className="title-font text-white  bg-[#FEC400] border-0 py-2 px-6 focus:outline-none hover:bg-[#ddbb49] rounded">Resume</button>

                    <button onClick={() => router.push('/contact')} className="flex text-white bg-[#FEC400] border-0 py-2 px-6 focus:outline-none hover:bg-[#ddbb49] rounded">Contact</button>

                </div>
                <div className=" mt-8 flex justify-center sm:justify-start md:justify-start lg:justify-start">

                    <SocialMedia />
                </div>

            </div>
        </div>
    );
}
