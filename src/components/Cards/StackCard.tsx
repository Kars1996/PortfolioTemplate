/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

type Props = {
    text: string;
    icon: string;
    href: string;
};

export default function ({text, icon, href}: Props) {
    return (
        <>
            <a
                href={href}
                target="_blank"
                className="w-fit px-3 py-2 group rounded border flex gap-2 items-center border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-800 blend"
            >
                <img src={icon} alt={`${text}'s icon`} className="w-[20px] h-[20px]" />
                {/* <svg height={20} width={20}>
                    <use href={icon}></use>
                </svg> */}
                <span className="text-sm capitalize text-neutral-500 dark:text-neutral-400 group-hover:text-black group-hover:dark:text-white blend">
                    {text}
                </span>
            </a>
        </>
    );
}
