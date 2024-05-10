"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import Thread from '../../public/Threads.png'
import Compiler from '../../public/compiler.png'
import Notes from '../../public/Notes.png'
import Classify from '../../public/classify.png'
import Tictactoe from '../../public/tictactoe.png'
import SortVisualizer from '../../public/sortvisualizer.png'

export function Works() {
    return (
        <div className=" max-w-5xl m-auto px-8 mt-4">
            <div>
                <h1 className="text-white text-3xl mb-1 font-bold tracking-wide font-pacificoregular">Some of my
                    creative work</h1>
                <div className="bg-[#FEC400] p-[0.12rem] rounded-full mt-4 w-[10%]"></div>
            </div>
            <div className="flex mt-14 py-10">
                <HeroParallax products={products} />
            </div>
        </div>
    );
}
export const products = [
    {
        title: "Threads",
        link: "https://threads-s21sd.vercel.app/",
        thumbnail: Thread,
    },
    {
        title: "Fronted Compiler",
        link: "https://frontend-compiler.vercel.app/",
        thumbnail: Compiler,
    },
    {
        title: "Notes App",
        link: "https://65b687c051be0c7b33cbb7c3--cheerful-profiterole-cb4684.netlify.app/",
        thumbnail: Notes,
    },
    {
        title: "Classify",
        link: "https://play.google.com/store/apps/details?id=com.classgo.keepnotes",
        thumbnail: Classify,
    },
    {
        title: "Tic Tac Toe",
        link: "https://play.google.com/store/apps/details?id=com.mobile.tictactoe2playergameonline",
        thumbnail: Tictactoe,
    },
    {
        title: "Sort Visualizer",
        link: "https://s21sd.github.io/SORT_VISUALIZER/",
        thumbnail: SortVisualizer,
    },


];
