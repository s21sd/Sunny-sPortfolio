import { Tabs } from "./ui/tabs";
import devskills from '../utils/data'
import SkillsCard from "@/Cards/SkillsCard";
export function Skills() {
    const tabs = [
        {
            title: "Development",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  bg-[#FEC400]">
                    <div className="bg-white w-fit p-3 rounded-full text-[#FEC400] shadow-md">
                        <p className="">Development Skills</p>
                    </div>
                    <SkillsCard items={devskills.devskills} value={1} />


                </div>
            ),
        },
        {
            title: "Android",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <div className="bg-white w-fit p-3 rounded-full text-[#FEC400] shadow-md">
                        <p>Android Skills</p>
                    </div>
                    <SkillsCard items={devskills.androiddev} value={2} />


                </div>
            ),
        },
        {
            title: "Coding",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <div className="bg-white w-fit p-3 rounded-full text-[#FEC400] shadow-md">

                        <p>Coding Profiles</p>
                    </div>
                    <SkillsCard items={devskills.codingprofiles} value={3} />


                </div>
            ),
        },
        {
            title: "Languages",
            value: "Languages",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <div className="bg-white w-fit p-3 rounded-full text-[#FEC400] shadow-md">
                        <p>Languages</p>
                    </div>
                    <SkillsCard items={devskills.languages} value={4} />

                </div>
            ),
        },
        {
            title: "Tools",
            value: "Tools",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#FEC400]">
                    <div className="bg-white w-fit p-3 rounded-full text-[#FEC400] shadow-md">
                        <p>Tools</p>
                    </div>
                    <SkillsCard items={devskills.tools} value={5} />

                </div>
            ),
        },

    ];

    return (
        <div className=" max-w-3xl m-auto px-8 mt-2">
            <div>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">Skills</h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[10%]"></div>
            </div>
            <div className="h-[20rem] md:h-[60vh] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10">
                <Tabs tabs={tabs} />
            </div>
        </div>


    );
}

