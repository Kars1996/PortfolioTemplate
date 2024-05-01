/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    const SOCIALS = [
        {
            NAME: "GitHub",
            HREF: "https://github.com/kars1996",
            TEXT: "github.com/kars1996",
        },
        {
            NAME: "LinkedIn",
            HREF: "https://www.linkedin.com/in/kars1996",
            TEXT: "linkedin.com/in/kars1996",
        },
        {
            NAME: "Twitter",
            HREF: "https://twitter.com/kars1996",
            TEXT: "@kars1996",
        },
    ];
    return (
        <div>
            <div>
                <p className="font-semibold text-black dark:text-white">
                    Let's Connect
                </p>
                <p>Reach out to me via email or on social media.</p>
                <div className="grid grid-cols-4 gap-y-2 mt-4 auto-cols-min">
                    {SOCIALS.map((social) => (
                        <>
                            <div className="col-span-1 flex items-center gap-1">
                                <span className="whitespace-nowrap truncate">
                                    {social.NAME}
                                </span>
                            </div>
                            <div className="col-span-3 truncate">
                                <a
                                    href={social.HREF}
                                    target="_blank"
                                    className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
                                >
                                    <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                                        {social.TEXT}
                                    </span>
                                </a>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
