import Image from "next/image";

interface Workoffer {
    id: number;
    header: string;
    paragraph: string;
    src: string;
}

export default function Features() {
    const workoffer: Workoffer[] = [
        {
            id: 1,
            header: "Lawn Maintance",
            paragraph:
                "Our team of skilled professionals is dedicated to keeping your lawn in pristine condition. From regular mowing and edging to weed control and fertilization, we'll ensure your grass stays healthy and manicured throughout the seasons.",
            src: "/husko1.png",
        },
        {
            id: 2,
            header: "Trimming and Pruning",
            paragraph:
                "We understand the importance of well-maintained plants and shrubs. With our expert trimming and pruning services, we'll shape your greenery, promote healthy growth, and enhance the overall aesthetic appeal of your garden.",
            src: "/husko1.png",
        },
        {
            id: 3,
            header: "Mulching and Bed Maintenance",
            paragraph:
                "Enhance the beauty of your flower beds and garden areas with our top-quality mulching services. Our team will apply a fresh layer of mulch, preventing weed growth, retaining moisture, and providing an attractive backdrop for your plants.",
            src: "/husko1.png",
        },
        {
            id: 4,
            header: "Seasonal Cleanup",
            paragraph:
                "Let us handle the demanding task of seasonal cleanups. We'll remove fallen leaves, clear debris, and prepare your garden for the changing weather, ensuring a clean and organized outdoor space year-round.",
            src: "/husko1.png",
        },
        {
            id: 5,
            header: "Irrigation Systems",
            paragraph:
                "Ensure your garden receives the right amount of water with our professional irrigation system installations and repairs. We'll help you conserve water, optimize plant health, and achieve a sustainable and efficient watering solution.",
            src: "/husko1.png",
        },
        {
            id: 6,
            header: "Landscape Design",
            paragraph:
                "Looking to transform your backyard into an oasis? Our skilled designers will collaborate with you to create a customized landscape design that suits your preferences and complements the existing architecture, ensuring a breathtaking and inviting outdoor space.",
            src: "/husko1.png",
        },
    ];

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Lush lawns. Expert care. Guaranteed.
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                        Experience the difference with our exceptional lawn care
                        services. From mowing to fertilizing, we ensure your
                        lawn thrives, leaving you with a picture-perfect outdoor
                        oasis.
                    </p>
                </div>
            </section>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> */}

            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-3 ">
                {workoffer.map((workoffer: Workoffer) => {
                    return (
                        <div
                            key={workoffer.id}
                            className="flex flex-col items-center bg-white border-2 border-green-500 rounded-lg shadow m-4  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <Image
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={workoffer.src}
                                alt="..."
                                height={400}
                                width={400}
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {workoffer.header}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {workoffer.paragraph}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
