import Preloader from "@/components/Preloader/Preloader";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    return (
        <>
            <Preloader text={false} />
            <div
                className="h-screen w-screen text-black flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://wallpapercave.com/wp/wp7542081.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="space-y-6 text-center max-w-xl px-20 py-14 border-2 border-white/10 bg-black/50 rounded-xl backdrop-filter backdrop-blur-lg">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]">
                        404
                    </h1>

                    <p className="opacity-75 text-xl">Page not found</p>
                </div>
            </div>
        </>
    );
}
