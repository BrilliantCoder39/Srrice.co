import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';

const Careers = () => {

    return (
        <div>
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'>
                <div className='w-[100%]'>
                    <div className="absolute top-[100px] opacity-25 text-gray-300 pointer-events-none text-bold ">
                        CARRERS
                    </div>
                    <div className="mb-[80px]">
                        <div className="py-[10px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">Carrers</div>
                    </div>
                    <div className="text-[48px] font-bold flex items-center justify-center">
                        No Current Vacancies
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default Careers;