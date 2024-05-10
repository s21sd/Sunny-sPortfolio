"use client";

import { cn } from "@/utils/cn";
import { CardStack } from "./ui/card-stack";
export function CardStackDemo() {
    return (
        <div className=" max-w-5xl m-auto px-8">
            <div>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">Achievement</h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[10%]"></div>
            </div>
            <div className="flex flex-row justify-center items-center mt-14 py-10">
                <CardStack items={CARDS} />
            </div>
        </div>
    );
}

export const Achievement = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Corridor Platform",
        designation: "https://drive.google.com/file/d/1BLphX5z658LP4RsEvpKoMi_PWGkilaHC/view",
        content: (
            <p>
                Top Performer in Corridor Platform's Hackathon at
                KIIT University,<br></br>
                Outshining 75 Competing Teams
                with Innovative Solutions and Exceptional
                Problem-Solving Skills 🚀🚀
            </p>
        ),
    },
    {
        id: 1,
        name: "Hacktoberfest",
        designation: "https://drive.google.com/file/d/1iSsWMSP6-FjtLUPGTaz8rfzzbRKwpEym/view",
        content: (
            <p>
                Hacktoberfest garnered participation from an initial
                cohort of 50,000 contributors🌍.
            </p>
        ),
    },

];
