import React, { useState, useEffect } from 'react';
import MainOne from "./Landing/MainOne";
import MainTwo from "./Landing/MainTwo";
import MainThree from "./Landing/MainThree";
import MainFour from "./Landing/MainFour";

const Main = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const totalPages = 4;
    
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (e.deltaY > 0) {
                if (currentPage < totalPages - 1) {
                    setCurrentPage(currentPage + 1);
                }
            } else if (e.deltaY < 0) {
                if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentPage]);

    useEffect(() => {
        const posY = currentPage * window.innerHeight;
        window.scrollTo({ top: posY, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div>
            <MainOne />
            <MainTwo />
            <MainThree />
            <MainFour />
        </div>
    );
};

export default Main;