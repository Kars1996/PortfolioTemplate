"use client";
import { useState } from "react";

export default function () {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/buy", text: "About" },
        { href: "/partners", text: "Experience" },
        {
            href: "/auth/register",
            text: "Contact Me",
            className:
                "py-1.5 px-4 border focus:ring-2 text-xs rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent lg:ml-auto",
        },
    ];
    return (
        <div className="fixed top-4 inset-x-0 z-[50]">
            <div className="lg:max-w-xl mx-auto px-8">
                <div className="w-full mx-auto">
                    <div
                        data-x-data="{ open: false }"
                        className="relative flex flex-col w-full p-3 mx-auto bg-black/50 border border-white/10 shadow-thick backdrop-filter backdrop-blur-lg rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row md:px-6"
                    >
                        <div className="flex flex-row items-center justify-between md:justify-start">
                            <a
                                href=""
                                className="text-white hover:text-white/50 items-center font-bold gap-3 inline-flex text-lg"
                            >
                                <span>Kars</span>
                            </a>
                            <button
                                onClick={() => setOpen(!open)}
                                className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-blue-300 focus:outline-none focus:text-white md:hidden"
                            ></button>
                        </div>
                        <nav
                            className={`flex-col flex-grow ${
                                open ? "flex" : "hidden"
                            } py-12 md:py-0 md:flex md:items-end justify-center md:flex-row`}
                        >
                            <ul className="space-y-2 list-none md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3">
                                <li>
                                    <a
                                        href="#"
                                        className="lg:py-10 text-xs text-white hover:text-blue-400"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="lg:py-10 text-xs text-white hover:text-blue-400"
                                    >
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="py-1.5 px-4 border focus:ring-2 text-xs rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent lg:ml-auto"
                                    >
                                        Contact Me
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
