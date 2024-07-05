// eslint-disable-next-line no-unused-vars
import React from 'react';
import payment from '/payment.png'
import { FaMobile, FaLocationArrow, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";


const Footer = () => {
    return (
        <div className='mt-8 mb-5 mx-4 lg:mx-52'>
            <div className="flex gap-12">

                <div className="flex flex-1 flex-col gap-2 text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>Categories</h1>
                    <span className='span'>Women</span>
                    <span className='span'>Men</span>
                    <span className='span'>Shoes</span>
                    <span className='span'>Accesories</span>
                    <span className='span'>New Arrivals</span>
                </div>


                <div className="hidden xl:flex flex-1 flex-col gap-2 text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>Links</h1>
                    <span className='span'>FAQ</span>
                    <span className='span'>Pages</span>
                    <span className='span'>Stores</span>
                    <span className='span'>Compare</span>
                    <span className='span'>Cookies</span>
                </div>

                <div className="hidden xl:flex flex-1 gap-2 flex-col text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>About Us</h1>
                    <span className='span'>Loremipsum dolorconsectetur adipisicing,
                        architecto voluptatem molestias cupiditate possimus ipsum saep.
                    </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 text-[14px] text-justify">
                    <h1 className='text-[18px] font-[500] text-[#555]'>Contact Us</h1>
                    <div className='flex items-center gap-2'>
                        <FaMobile />
                        <p className='span'>+1567-789-9299</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <FaLocationArrow />
                        <p className='span'> No12 Central area,
                            <br />
                            Wuse Abuja.
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <SiGmail />
                        <span className='span'>

                            RHStore@gmail.com
                        </span>
                    </div>


                    <div className='flex items-center gap-3 mt-1'>
                        <a href="#">
                            <FaInstagram className='text-2xl 
                            hover:text-red duration-300'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-2xl 
                           hover:text-red duration-300'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-2xl 
                            hover:text-red duration-300'/>
                        </a>
                    </div>

                </div>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
                <div className="flex items-center ">
                    <span className="font-bold text-[24px] text-[#2879fe] ">ROADHOUSE</span>
                    <span className="ml-[20px] text-[12px] text-[gray]">© 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img className="h-[50px]" src={payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;












