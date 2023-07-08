import StaticCarousel from "./components/carousel";
import DefaultCard from "./components/card";
import Contact from "./components/contact";

export default function Home() {
    return (
        <>
            <div
                style={{
                    position: "relative",
                    height: "calc(75vh - 16px)",
                }}
            >
                <StaticCarousel />
            </div>
            <div className="flex justify-center mt-8">
                <h1 className="mb-2 text-2xl font-bold">
                    <span className="inline-block pb-1 border-b-2 border-gray-800 ">
                        Does Your Garden Need Some Shape?
                    </span>
                </h1>
            </div>
            <div className="mt-8">
                <DefaultCard />
            </div>
            <div className="mt-8">
                <Contact />
            </div>
        </>
    );
}
