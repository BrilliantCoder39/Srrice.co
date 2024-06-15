import React, { useState } from 'react';
import { Button } from "@headlessui/react";
import googlepayicon from '../images/Icons/google-play-badge-300x116.png';
import applepayicon from '../images/Icons/pngwing.com_-300x116.png'
import CountdownComponent from '../components/Brief/CountdownComponent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/header';
const CitizenPortal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };

    const [firstName, setFirstName] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const [lastName, setLastName] = useState('');

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const [emailAdress, setemailAdress] = useState('');

    const handleEmail = (e) => {
        setemailAdress(e.target.value);
    };
    return (
        <div>
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'>
                <div className='w-[100%]'>
                    <div className="absolute top-[140px] opacity-25 text-[200px] text-gray-300 pointer-events-none text-bold ">
                        CITIZEN PORTAL
                    </div>
                    <div className="mb-[120px]">
                        <div className="py-[20px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">Citizen Portal - Coming Soon</div>
                    </div>
                    <div className='flex justify-center items-center  mb-[50px]'>
                        <Button onClick={toggleDiv} style={{ marginRight: '10px' }}>
                            <img src={googlepayicon} alt="Google Pay Icon" />
                        </Button>
                        <Button onClick={toggleDiv} style={{ marginLeft: '10px' }}>
                            <img src={applepayicon} alt="Google Pay Icon" />
                        </Button>
                    </div>
                    {isOpen && (
                        <div>
                            <div className='border-b py-4 border-[#eaecf1]'>
                                <div className='text-[25px] font-bold py-[10px]'>Get Notified</div>
                                <div>Be the first to be notified on the launch of our mobile app.</div>
                            </div>
                            <div className='w-[100%]  mb-[50px]'>
                                <form className="flex flex-col items-center justify-center mt-8">
                                    <div className='flex justify-between  w-[100%] mb-[20px]'>
                                        <div className="flex flex-col mb-4 lg:w-[49%]">
                                            <label htmlFor="firstName" className="mb-2 sm:w-[49%]">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                value={firstName}
                                                onChange={handleFirstName}
                                                placeholder="First Name"
                                                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-end mb-4 w-[49%]">
                                            <label htmlFor="lastName" className="mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                value={lastName}
                                                onChange={handleLastName}
                                                placeholder="Last Name"
                                                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end mb-[30px] w-[100%]">
                                        <label htmlFor="lastName" className="mb-2">Email Adress *</label>
                                        <input
                                            type="text"
                                            id="emailAdress"
                                            value={emailAdress}
                                            onChange={handleEmail}
                                            placeholder="Email Adress"
                                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                    <div className='flex flex-col items-center justify-center mt-[80px] mb-[50px]'>
                        <CountdownComponent />
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default CitizenPortal;