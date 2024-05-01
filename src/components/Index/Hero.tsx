import StackCard from "../Cards/StackCard";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    const stack = [
        {
            text: "Astro",
            icon: "https://www.svgrepo.com/show/373446/astro.svg",
            href: "https://astro.build",
        },
        {
            text: "Javascript",
            icon: "https://www.svgrepo.com/show/452045/js.svg",
            href: "https://www.javascript.com",
        },
        {
            text: "Typescript",
            icon: "https://www.svgrepo.com/show/459084/logo-ts.svg",
            href: "https://www.typescriptlang.org",
        },
        {
            text: "Tailwind",
            icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
            href: "https://tailwindcss.com",
        },
    ];
    return (
        <>
            <section className="relative h-screen w-full">
                <div
                    id="planetcont"
                    className="animate absolute inset-0 top-1/4 overflow-hidden"
                >
                    <div
                        id="crescent"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"
                    >
                        <div
                            id="planet"
                            className="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"
                        >
                            <div
                                id="blur"
                                className="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="animate absolute h-full w-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="p-5 text-center">
                            <p className="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">
                                Hello, I am Kars
                            </p>
                            <p className="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercasetext-white">
                                Software Engineer
                            </p>
                            <p className="animated text-sm md:text-base lg:text-lg opacity-75">
                                Currently designing products for humans.
                            </p>
                            <div
                                id="ctaButtons"
                                className="animated flex flex-wrap gap-4 justify-center mt-5"
                            >
                                <a
                                    href="/blog"
                                    className="py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-white text-black hover:opacity-75 blend"
                                >
                                    Read my blog
                                </a>
                                <a
                                    href="/work"
                                    className="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border text-white border-white/25  dark:bg-white/15 blend"
                                >
                                    View my work
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative text-white">
                <div className="mx-auto max-w-screen-sm p-5 space-y-24 pb-16">
                    <section data-aos="fade-up">
                        <article>
                            <p>
                                I am a{" "}
                                <b>
                                    <i>software engineer</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>ui/ux designer</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>product planner</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>mentor</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>student</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>minimalist</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>eternal optimist</i>
                                </b>
                                ,{" "}
                                <b>
                                    <i>crypto enthusiast</i>
                                </b>{" "}
                                and{" "}
                                <b>
                                    <i>sarcasm connoisseur</i>
                                </b>
                                .
                            </p>
                            <p>
                                I love to both build and break things. I am
                                motivated by challenging projects with
                                self-guided research and dynamic problem
                                solving. My true passion is crafting creative
                                front end designs with unique takes on color,
                                typography and motion.
                            </p>
                            <p>During my career</p>
                            <p>
                                I have built products ranging from marketing and
                                ecommerce websites to complex enterprise apps
                                with focus on delivering fast, elegant code
                                along with delightful user interfaces.
                            </p>
                            <p>Now</p>
                            <p>
                                I currently work as a software engineer at
                                StreamlineFS, where I do product planning,
                                design and development.
                            </p>
                        </article>
                    </section>

                    <section data-aos="fade-up">
                        <div className="space-y-4">
                            <p className="font-semiboldtext-white">
                                Website built with
                            </p>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                                {stack.map((item) => (
                                    <StackCard
                                        text={item.text}
                                        icon={item.icon}
                                        href={item.href}
                                    />
                                ))}
                            </div>
                            <div className="text-[#71717a]">
                                Performing reactivity and statefulness, special
                                guest{" "}
                                <a
                                    href="https://www.solidjs.com/"
                                    target="_blank"
                                    className="w-fit group underline decoration-[.5px] decoration-white/50  hover:decoration-white text-white underline-offset-2 blend"
                                >
                                    <span className=" text-white/75  group-hover:text-white blend">
                                        SolidJS
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
