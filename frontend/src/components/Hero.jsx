import React, { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            title: "Summer Sale Collections",
            description: "Sale! Up to 50% off!",
            img:  "https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
            id: 2,
            title: "Winter Sale Collections",
            description: "Sale! Up to 50% off!",
            img:"https://images.unsplash.com/photo-1623040594025-0105b33ea998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
              url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },
        {
            id: 3,
            title: "Spring Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.unsplash.com/photo-1623040590392-770440f59d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxtZW4lMjBmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D",
            url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
        },

        //"https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         

        // "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //"https://images.unsplash.com/photo-1612731486606-2614b4d74921?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1559697242-cacab5d5b62c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //"https://plus.unsplash.com/premium_photo-1690341214258-18cb88438805?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];



    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };


    return (
        <div className='slider'>
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
             
                {/*
                <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
                <img src={data[0]} alt="" />
                    <img src={data[1]} alt="" />
                    <img src={data[2]} alt="" />*/}

                {data.map((data) => (
                    <div
                        className={`${data.bg} w-screen h-full flex flex-col  xl:flex-row`}
                        key={data.id}
                    >
                        {/* TEXT CONTAINER */}
                        <div className="lg:px-8 h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center 
                        justify-center 2xl:gap-12 text-center">

                            <h2 className="lg:px-8 pb-8 text-xl lg:text-3xl 2xl:text-5xl">
                                {data.description}
                            </h2>
                            <h1 className="lg:px-8 pb-8 text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                                {data.title}
                            </h1>

                            <a href={data.url} className='cursor-pointer'>
                                <button className="rounded-md bg-black text-white py-3 px-3">
                                    SHOP NOW
                                </button>
                            </a>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <img
                                src={data.img}
                                alt=""
                                //fill
                              // sizes="100%"xl:gap-[85rem] gap-[16rem]
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}


            </div>

            <div className="icons ">
                <div className="iconleft relative xl:right-[-2rem]" onClick={prevSlide}>
                    <MdArrowBackIos className='w-9 h-9' />
                </div>
                <div className="iconright relative xl:left-[75rem] left-[15.5rem]" onClick={nextSlide}>
                    <MdArrowForwardIos className='w-9 h-9' />
                </div>
            </div>
        </div>
    )
}

export default Hero;