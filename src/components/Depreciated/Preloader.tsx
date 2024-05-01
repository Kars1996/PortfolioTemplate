"use client";
import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.scss";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

// ! Attempted to make it more dynamic. I will fix this at a later point 
// TODO: Make the code below work

const greetings = [
    "· Hey!",
    "· Hey!",
    "· Hey!",
    "· Hola!",
    "· Привет!",
    "· مرحبا!",
    "· Bonjour!",
    "· Hallo!",
    "· Ciao!",
    "· Γεια σας!",
    "· こんにちは!",
    "· 你好!",
    "· Cześć!",
    "· Hej!",
    "· Olá!",
    "· مرحبا!",
    "· Hello!",
];

interface Props {
    text?: boolean;
    customText?: string;
    duration?: number;
}

export default function ({ text = true, customText, duration = 2000 }: Props) {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const [showWipeAnimation, setShowWipeAnimation] = useState(false);

    useEffect(() => {
        if (text) {
            const timer = setTimeout(() => {
                const nextIndex = (greetingIndex + 1) % greetings.length;
                setGreetingIndex(nextIndex);
            }, 125);

            return () => clearTimeout(timer);
        }

        const timeout = setTimeout(() => {
            setShowPreloader(false);
            setShowWipeAnimation(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [text, customText, duration]);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[1000] h-full overflow-hidden flex flex-col items-center justify-center ${
                styles.preloaderContainer
            } ${showPreloader ? "visible" : "invisible"} ${
                showWipeAnimation ? styles.wipeAnimation : ""
            }`}
        >
            {/* <div className="fixed top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"> */}
            <h1 data-aos="fade-down" className="text-white">
                {text ? greetings[greetingIndex] : `· ${customText}`}
            </h1>
            {/* </div> */}
        </div>
    );
}
