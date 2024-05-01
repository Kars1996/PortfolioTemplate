/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    interface Link {
        link: string;
        title: string;
    }
    
    interface Education {
        title: string;
        institution: string;
        duration: string;
    }
    
    interface WorkExperience {
        company: string;
        position: string;
        duration: string;
        link: string;
        description: string;
    }

    const links: Link[] = [
        {
            link: "https://x.com/kars1996",
            title: "Twitter",
        },
        {
            link: "https://github.com/kars1996",
            title: "Github",
        },
        {
            link: "https://linkedin.com/kars1996",
            title: "LinkedIn",
        },
    ];
    const expertise: string[] = ["JavaScript", "PHP", "Astro", "Node"];
    const skills: string[] = [
        "Lead & Strategy",
        "Creative",
        "Team Work",
        "Goal oriented",
    ];
    const education: Education[] = [
        {
            title: "Master Computer Engineering",
            institution: "UCLA",
            duration: "2022 - 2023",
        },
        {
            title: "Grade Computer Engineering Technology",
            institution: "UCLA",
            duration: "2022 - 2023",
        },
    ];
    const workExperience: WorkExperience[] = [
        {
            company: "XYZ Tech Solutions",
            position: "Web Developer",
            duration: "January 2019 - Present",
            link: "https://link.com",
            description:
                "At XYZ Tech Solutions, I lead the development of diverse client websites, ensuring both functionality and aesthetics.",
        },
        {
            company: "ABC Creative Agency",
            position: "Front-End Developer Intern",
            duration: "June 2018 - December 2018",
            link: "https://link.com",
            description:
                "As a Front-End Developer Intern at ABC Creative Agency, I honed my skills in HTML, CSS, and JavaScript.",
        },
        {
            company: "Digital Innovations",
            position: "Web Developer",
            duration: "March 2020 - March 2022",
            link: "https://link.com",
            description:
                "At Digital Innovations, I've led web development projects with a focus on user-friendly, responsive design.",
        },
    ];
    const about: string =
        "Hello, I'm Kars, a passionate web developer trying to bringing digital visions to life. With a deep love for coding and a keen eye for design, I specialize in creating immersive web experiences that not only look stunning but also function effortlessly";
    return (
        <div className="">
            <section className="">
                <div className="max-w-5xl px-8 py-24 pb-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-32">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="inline-block object-cover w-24 h-48 rounded-full lg:w-64 lg:h-96"
                                src="/assets/avatar.jpg"
                                alt=""
                            />
                        </div>
                        <div className="ml-4 md:ml-8">
                            <p className="text-4xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl">
                                Kars
                                <span className="block text-gray-300">
                                    Web developer
                                </span>
                            </p>
                            <div className="flex mt-12 space-x-6 text-xs text-gray-300 uppercase">
                                {links.map((l, index) => (
                                    <a
                                        key={index}
                                        href={l.link}
                                        className="duration-200 hover:text-gray-200"
                                    >
                                        {l.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        <div className="flex flex-col gap-12">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Contact
                                </h2>
                                <dl className="mt-4 space-y-4 text-sm text-gray-400">
                                    <div className="flex items-center text-sm text-gray-300 gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">
                                                Website
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-world"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M3.6 9h16.8"></path>
                                                <path d="M3.6 15h16.8"></path>
                                                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                                                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                                            </svg>
                                        </dt>
                                        <dd>
                                            <a
                                                className="hover:text-white"
                                                href="https://kars.bio"
                                            >
                                                kars.bio
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300 gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">
                                                Telephone
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-device-mobile"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                                                <path d="M11 4h2"></path>
                                                <path d="M12 17v.01"></path>
                                            </svg>
                                        </dt>
                                        <dd>
                                            <a
                                                className="hover:text-white"
                                                href="tel:+1 123 123 123 123"
                                            >
                                                +1 123 123 123 123
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300 gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">
                                                Email
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-mail"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                                <path d="M3 7l9 6l9 -6"></path>
                                            </svg>
                                        </dt>
                                        <dd>
                                            <a
                                                className="hover:text-white"
                                                href="mailto:k@kars.bio"
                                            >
                                                k@kars.bio
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Education
                                </h2>
                                <dl className="mt-4 space-y-4 text-sm text-gray-400">
                                    {education.map((e, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-2"
                                        >
                                            <dt className="flex flex-col">
                                                <span className="block">
                                                    {e.title}
                                                </span>
                                                <span className="block">
                                                    {e.institution}
                                                </span>
                                            </dt>
                                            <dd className="font-medium text-blue-500">
                                                {e.duration}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Skills
                                </h2>
                                <ul
                                    role="list"
                                    className="mt-4 space-y-2 text-sm text-gray-400"
                                >
                                    {skills.map((s, index) => (
                                        <li key={index}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Expertice
                                </h2>
                                <ul
                                    role="list"
                                    className="mt-4 space-y-2 text-sm text-gray-400"
                                >
                                    {expertise.map((e, index) => (
                                        <li key={index}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-12 lg:col-span-2">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    About
                                </h2>
                                <p className="mt-4 text-sm text-gray-400">
                                    {about}.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Work experience
                                </h2>
                                <div className="flex flex-col gap-8">
                                    {workExperience.map((w, index) => (
                                        <div key={index}>
                                            <p className="mt-4 text-lg font-medium text-blue-500">
                                                <a href={w.link}>{w.company}</a> - {" "}
                                                <span className="text-gray-300">
                                                    {w.position}
                                                </span>
                                                <span className="block text-xs text-gray-300">
                                                    {w.description}
                                                </span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-48">
                    <p className="max-w-2xl text-sm text-left text-gray-300">
                        © 2024 - 2024. By: {" "}
                        <a href="https://kars.bio" className="underline underline-offset-2">
                            Kars
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
