import React from 'react';
import SrricTable from '../components/Table/customersportal';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';

const ConstractorsPortal = () => {
    //Constant
    const data = [
        {
            project: "GW-DMW-14-22-23",
            address: 'Road Rehabilitation Works at Ali Trace, Rich Plain Road, Diego Martin',
            company: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2023',
            price: '$419,802.08',
        },
        {
            project: "GW-DMW-14-22-24",
            address: 'Road Rehabilitation Works at Ali Trace, Diego Martin',
            company: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2024',
            price: '$342,342.09',
        },
        {
            project: "GW-DMW-14-22-26",
            address: 'Road Rehabilitation Works at Ali Trace, Rich Plain Road, Diego Martin',
            company: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2023',
            price: '$419,802.08',
        },
        {
            project: "GW-DMW-14-22-23",
            address: 'Road Rehabilitation Works at Ali Trace, Rich Plain Road, Diego Martin',
            company: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2023',
            price: '$419,802.08',
        },

    ];

    const columns = useMemo(
        () => [
            {
                accessorKey: 'project', //access nested data with dot notation
                header: 'GW-DMW-14-22-23',
                size: 100,
            },
            {
                accessorKey: 'address',
                header: 'Adress',
                size: 400,
            },
            {
                accessorKey: 'company', //normal accessorKey
                header: 'Coosal’s Construction Company Ltd.',
                size: 250,
            },
            {
                accessorKey: 'date',
                header: 'September 19th, 2023',
                size: 100,
            },
            {
                accessorKey: 'price',
                header: '$419,802.08',
                size: 100,
            },
        ],
        [],
    );



    return (
        <div>
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'>
                <div className='w-[100%]'>
                    <Helmet>
                        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet" />
                    </Helmet>
                    <div className="absolute top-[140px] opacity-25 text-[200px] text-gray-300 pointer-events-none text-bold ">
                        PORTAL
                    </div>
                    <div className="mb-[120px]">
                        <div className="py-[20px]">Inside SRRIC</div>
                        <div className="text-[48px] font-semibold">Contractors Portal</div>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='text-[25px] font-semibold mb-[10px]'>
                            Welcome to Our Contractor Platform
                        </div>
                        <div className='text-[#ee000] my-[20px] flex items-center justify-center flex-col'>
                            <div className='mb-[10px]'>
                                Are you ready to join our network of skilled contractors or access your existing account?
                            </div>
                            <div className='mb-[30px]'>
                                We’re excited to have you on board!
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                CONTRACTOR SIGNUP
                            </button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                CONTRACTOR SIGNIN
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='text-[30px] font-bold mb-[15px]'>
                            No Tenders Available
                        </div>
                        <div className='mb-[10px]'>
                            Are you ready to join our network of skilled contractors or access your existing account?
                        </div>
                        <div className='mb-[80px]'>
                            We’re excited to have you on board!
                        </div>
                    </div>
                    <div>
                        <div className='text-[30px] font-bold mb-[15px]'>
                            Awarded Contracts
                        </div>
                        <div>
                            <SrricTable data={data} columns={columns} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ConstractorsPortal;