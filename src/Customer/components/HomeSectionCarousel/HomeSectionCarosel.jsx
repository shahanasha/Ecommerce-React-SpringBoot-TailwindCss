import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';

const HomeSectionCarosel = ({data}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4.5 },

    };

    const slidePrev = () => {
        // setActiveIndex(activeIndex - 1);
        const newIndex = activeIndex - 1;
        console.log("Previous Index:", newIndex);
        setActiveIndex(newIndex);
    }
    const slideNext = () => {
        // setActiveIndex(activeIndex + 1);
        const newIndex = activeIndex + 1;
        console.log("Next Index:", newIndex);
        setActiveIndex(newIndex);
    }

    const syncActiveIndex = ({ item }) => {
       // setActiveIndex(item);
       console.log("Sync Active Index:", item);
       setActiveIndex(item);
    }
    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
    return (
        <div className='relative  border'>
            <div className='relative p-5 '>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !== items.length - 4 && <Button variant="contained"
                    className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: "8rem",
                        right: "-1.4rem",
                        transform: "translateX(-50%) rotate(90deg)"
                        , bgcolor: "white",
                    }} aria-label="next">
                    <ChevronLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

                { activeIndex!==0 && <Button
                onClick={slidePrev}
                variant="contained"
                    className='z-50 bg-white'
                    sx={{
                        position: 'absolute',
                        top: "8rem",
                        left: "0rem",
                        transform: "translateX(-50%) rotate(-90deg)",
                        bgcolor: "white",
                    }} aria-label="next">
                    <ChevronLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarosel