
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
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Web Development",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Coding Profiles",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },

];
