"use client";
import React from "react";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./ui/text-reveal-card";


export function Footer() {
    return (
        <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
            <TextRevealCard
                text="Please Hover"
                revealText="Thanks for visiting... "
            >
                <TextRevealCardTitle>
                    Sometimes, you just need to see it.
                </TextRevealCardTitle>
                {/* <TextRevealCardDescription>
                    This is a text reveal card. Hover over the card to reveal the hidden
                    text.
                </TextRevealCardDescription> */}
            </TextRevealCard>
        </div>
    );
}

