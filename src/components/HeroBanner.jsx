import Banner from '../assets/banner.webp';

export default function HeroBanner({
    title,
    icon,
    desc,
    iconColor = "text-blue-400",
    bgColor = "bg-blue-400/20"
}) {
    return (
        <section
            className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
            role="banner"
            aria-label={`${title} section`}
        >
            <img
                src={Banner}
                alt="Abstract blue-themed banner background"
                className="absolute w-full h-full object-contain max-md:hidden top-0 left-0 z-0"
                loading="lazy"
                decoding="async"
            />

            {/* Icon with Faded Circle */}
            <div className="relative z-10 mb-4" aria-hidden="true">
                <div
                    className={`absolute inset-0 rounded-full ${bgColor} w-20 h-20 mx-auto`}
                ></div>
                <div
                    className={`relative flex justify-center items-center w-20 h-20 rounded-full`}
                >
                    <div className={`${iconColor} w-10 h-10`}>
                        {icon}
                    </div>
                </div>
            </div>

            <h1
                className="max-md:text-3xl md:text-5xl font-bold text-white px-6 py-4 rounded-lg text-center z-10"
                tabIndex={0}
            >
                {title}
            </h1>
            {desc && (
                <p
                    className="text-gray-400 text-center max-w-xl mx-auto"
                    tabIndex={0}
                >
                    {desc}
                </p>
            )}
        </section>
    );
}
