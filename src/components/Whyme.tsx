import { HoverEffect } from "./ui/card-hover-effect";
export function Whyme() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <div>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">Why me ?</h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[10%]"></div>
            </div>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Android Development",
        description:
            "Crafting Seamless Experiences, One Line of Code at a Time.",
        link: "",
    },
    {
        title: "Web Development",
        description:
            "Elevating Digital Experiences, One Website at a Time.",
        link: "",
    },
    {
        title: "Coding Enthusiasm",
        description:
            "Unleash Your Potential, One Line of Code at a Time.",
        link: "",
    },

];
