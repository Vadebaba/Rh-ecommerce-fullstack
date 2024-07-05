// eslint-disable-next-line no-unused-vars
import React from 'react';
import Marquee from 'react-fast-marquee';


const Advert = () => {


  return (
    <div className='advert'>
      <Marquee >
        <div className=" flex text-center xl:gap-80 font-semibold">
          <div className='flex'>
            <p>Promo Promo Promo! Get 30% off on all product.</p>
          </div>

          <div className='hidden xl:flex'>
            <p>Promo Promo Promo! Get 30% off on all product.</p>
          </div>
        </div>
      </Marquee>



    </div>
  );
}

export default Advert