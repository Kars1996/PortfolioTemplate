"use client";
import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.scss";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

const greetings = [
    "· Hey!",
    "· Hey!",
    "· Hey!",
    "· здравей!",
    "· Hola!",
    "· Привет!",
    "· مرحبا!",
    "· Salut!",
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

export default function ({ text = true }) {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const [showWipeAnimation, setShowWipeAnimation] = useState(false);

    useEffect(() => {
        if (text) {
            // useEffect(() => {
            if (greetings[greetingIndex] !== "· Hello!") {
                const timer = setTimeout(() => {
                    const nextIndex = (greetingIndex + 1) % greetings.length;
                    setGreetingIndex(nextIndex);
                }, 125);

                return () => clearTimeout(timer);
            }
            // }, [greetingIndex]);
        }

        // useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPreloader(false);
            if (text) {
                setShowWipeAnimation(true);
            }
        }, 1350);
        return () => clearTimeout(timeout);
        // }, []);
    });

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[1000] h-full overflow-hidden flex flex-col items-center justify-center ${
                styles.preloaderContainer
            } ${showPreloader ? "visible" : "invisible"} ${
                showWipeAnimation ? styles.wipeAnimation : ""
            }`}
        >
            {/* <div className="fixed top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"> */}

            {!text ? (
                <img
                    src="https://cdn3.kars.bio/assets/pfp.gif"
                    alt="PFP"
                    className="rounded-full mb-4 shadow-lg"
                    style={{ width: "75px", height: "75px" }}
                    data-aos="fade-down"
                />
            ) : (
                <h1
                    data-aos="fade-down"
                    className="text-white text-lg lg:text-[4rem]"
                >
                    {greetings[greetingIndex]}
                </h1>
            )}
            {/* </div> */}
        </div>
    );
}
