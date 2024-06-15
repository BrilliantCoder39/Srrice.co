import React, {  useMemo } from 'react';
import SrricTable from '../components/Table/customersportal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/header';
const ProcurementActivities = () => {
    //Constant
    const data = [
        {
            project: "GW-DMW-14-22-23",
            address: 'Road Rehabilitation Works at Ali Trace, Rich Plain Road, Diego Martin',
            compony: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2023',
            price: '$419,802.08',
        },
        {
            project: "GW-DMW-14-22-24",
            address: 'Road Rehabilitation Works at Ali Trace, Diego Martin',
            compony: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2024',
            price: '$342,342.09',
        },
        {
            project: "GW-DMW-14-22-26",
            address: 'Road Rehabilitation Works at Ali Trace, Rich Plain Road, Diego Martin',
            compony: 'Coosal’s Construction Company Ltd.',
            date: 'September 19th, 2023',
            price: '$419,802.08',
        },
        {
            project: "GW-DMW-14-22-23",
            address: 'Road Rehabilitation Works at Ali Trace, Rich Plain Road, Diego Martin',
            compony: 'Coosal’s Construction Company Ltd.',
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
                accessorKey: 'compony', //normal accessorKey
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
                    <div className="absolute top-[140px] opacity-25 text-[200px] text-gray-300 pointer-events-none text-bold ">
                        ACTIVITIES
                    </div>
                    <div className="mb-[120px]">
                        <div className="py-[20px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">Annual Schedule Of Planned Procurement Activities - Fiscal</div>
                        <div className="text-[48px] font-bold">2023/2024</div>
                    </div>
                    <div className='mb-[100px]'>
                        <SrricTable data={data} columns={columns} />
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default ProcurementActivities;