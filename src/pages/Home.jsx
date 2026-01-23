import React from "react";
import MainLayOut from '../layout/MainLayOut';
import HeroSection from '../components/HeroSection';
import HomeBody from '../components/home/HomeBody';
import { Link } from 'react-router-dom';
import MobileHomeBody from "./mobile/MobileHomeBody";
import { DesktopNav, MobileNav } from "../components/Navigation";
import { themeBgColor } from "../styles/typography";

// const storiesData = [
//     {
//         id: 1,
//         type: "image",
//         url: `${process.env.PUBLIC_URL}/images/mobile/home_banner_2.png`,
//         duration: 8000,
//         link: `${process.env.PUBLIC_URL}/best-sellers-men`,
//     },
//     {
//         id: 2,
//         type: "image",
//         url: `${process.env.PUBLIC_URL}/images/mobile/home_banner_4.png`,
//         duration: 8000,
//         link: `${process.env.PUBLIC_URL}/recommended-by-us-men`,
//     },
//     {
//         id: 3,
//         type: "image",
//         url: `${process.env.PUBLIC_URL}/images/mobile/home_banner_3.png`,
//         duration: 8000,
//         link: `${process.env.PUBLIC_URL}/best-sellers-men`,
//     },
//     {
//         id: 1,
//         type: "image",
//         url: `${process.env.PUBLIC_URL}/images/mobile/home_banner_2.png`,
//         duration: 8000,
//         link: `${process.env.PUBLIC_URL}/best-sellers-men`,
//     },
//     {
//         id: 2,
//         type: "image",
//         url: `${process.env.PUBLIC_URL}/images/mobile/home_banner_4.png`,
//         duration: 8000,
//         link: `${process.env.PUBLIC_URL}/recommended-by-us-men`,
//     },
//     {
//         id: 3,
//         type: "image",
//         url: `${process.env.PUBLIC_URL}/images/mobile/home_banner_3.png`,
//         duration: 8000,
//         link: `${process.env.PUBLIC_URL}/best-sellers-men`,
//     },
// ];

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [progressWidths, setProgressWidths] = useState([]);

    // useEffect(() => {
    //     if (!isOpen) return;

    //     const total = storiesData.length;
    //     const newProgress = Array(total).fill(0);
    //     for (let i = 0; i < currentIndex; i++) newProgress[i] = 100;
    //     newProgress[currentIndex] = 0;
    //     setProgressWidths(newProgress);

    //     let start = Date.now();
    //     const timer = setInterval(() => {
    //         const elapsed = Date.now() - start;
    //         const percentage = Math.min((elapsed / storiesData[currentIndex].duration) * 100, 100);

    //         setProgressWidths((prev) => {
    //             const updated = [...prev];
    //             updated[currentIndex] = percentage;
    //             return updated;
    //         });

    //         if (percentage >= 100) {
    //             clearInterval(timer);
    //             if (currentIndex < storiesData.length - 1) {
    //                 setCurrentIndex((prev) => prev + 1);
    //             } else {
    //                 setIsOpen(false);
    //                 setCurrentIndex(0);
    //             }
    //         }
    //     }, 50);

    //     return () => clearInterval(timer);
    // }, [isOpen, currentIndex]);

    // const handleNext = () => {
    //     if (currentIndex < storiesData.length - 1) {
    //         setCurrentIndex(currentIndex + 1);
    //     } else {
    //         setIsOpen(false);
    //         setCurrentIndex(0);
    //     }
    // };

    // const handlePrev = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(currentIndex - 1);
    //     }
    // };

    return (
        <>
            <div className={`hidden md:block ${themeBgColor} header_top`}>
                <div className="bg-gradient-to-r from-[#1B3A57] to-[#00A859]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center h-10 text-sm text-white">
                            <span>Free Shipping on all orders above ₹999</span>
                            <span className="mx-2">|</span>
                            <Link to={'/shop'} className="underline hover:no-underline">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <MainLayOut>
                <DesktopNav />
                <MobileNav />

                {/* Fullscreen Story Viewer */}
                {/* {isOpen && (
                    <div className="fixed inset-0 z-[100] bg-[#203466] flex justify-center items-center">
                        <div className="relative w-full h-full overflow-hidden">
                            <button
                                className="absolute top-4 right-4 z-[200] text-white text-3xl"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>

                            <div className="absolute top-4 left-4 right-4 z-[100] flex gap-1">
                                {storiesData.map((_, idx) => (
                                    <div key={idx} className="flex-1 bg-gray-700 rounded h-1 overflow-hidden">
                                        <div
                                            className="bg-white h-full transition-all duration-100"
                                            style={{ width: `${progressWidths[idx] || 0}%` }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <img
                                src={storiesData[currentIndex].url}
                                alt={`story-${currentIndex}`}
                                className="w-full h-full object-cover" loading="lazy"
                            />
                            <Link
                                className="z-[200] absolute bottom-4 w-[90%] text-center left-[5%] bg-[#ef7f1a] text-gray-800 
                            rounded-md py-2 font-semibold text-xs" to={storiesData[currentIndex].link}>
                                Buy Now
                            </Link>
                            <div
                                onClick={handlePrev}
                                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-[100]"
                            />
                            <div
                                onClick={handleNext}
                                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-[100]"
                            />
                        </div>
                    </div>
                )} */}

                <div className="hidden md:block">
                    <HeroSection />
                </div>
                <div className="hidden md:block">
                    <HomeBody />
                </div>
                <div className="md:hidden">
                    <MobileHomeBody />
                </div>

            </MainLayOut>
        </>

    )
}

export default Home;