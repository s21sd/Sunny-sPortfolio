"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import devskills from '../utils/data'
import SkillsCard from "@/Cards/SkillsCard";
export function Skills() {
    console.log(devskills.devskills)
    const tabs = [
        {
            title: "Development",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <p>Development Skills</p>
                    <SkillsCard items={devskills.devskills} />

                </div>
            ),
        },
        {
            title: "Android",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <p>Android Skills</p>

                </div>
            ),
        },
        {
            title: "Coding",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <p>Coding Profiles</p>

                </div>
            ),
        },
        {
            title: "Languages",
            value: "Languages",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <p>Languages</p>

                </div>
            ),
        },
        {
            title: "Tools",
            value: "Tools",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <p>Tools</p>

                </div>
            ),
        },

    ];

    return (
        <div className=" max-w-5xl m-auto px-8 mt-4">
            <div>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">Skills</h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[10%]"></div>
            </div>
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10">
                <Tabs tabs={tabs} />
            </div>
        </div>


    );
}

const DummyContent = () => {
    return (
        <Image
            src="/linear.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
