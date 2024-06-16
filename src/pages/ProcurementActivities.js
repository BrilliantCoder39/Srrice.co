import React, {  useMemo } from 'react';
import SrricTable from '../components/Table/customersportal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/header';
const ProcurementActivities = () => {
    //Constant
    const data = [
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },
        {
            No:1,
            ProjectNumber:"GW-DMW-15-22-23",
            ProjectName: "Julien Park, Diego Martin",
            Unspc:72141103,
            des:"Road Rehabilitation and Drainage Upgrade Projects",
            date:"Sep-23",
            completion:"Jan-24",
            procurement_method:"Selective",
            Standstill:"N/A",
            Contract:"Fixed Price"

        },

    ];

    const columns = useMemo(
        () => [
            {
                accessorKey: 'No', //access nested data with dot notation
                header: 'No',
                size: 50,
            },
            {
                accessorKey: 'ProjectNumber',
                header: 'Number',
                size:50
            },
            {
                accessorKey: 'ProjectName', //normal accessorKey
                header: 'Project Name',
                size: 50,
            },
            {
                accessorKey: 'Unspc',
                header: 'UNSPC',
                size: 50,
            },
            {
                accessorKey: 'des',
                header: 'Description',
                size: 100,
            },
            {
                accessorKey: 'date',
                header: 'Proposed Date for Issuing Bidding Documents',
                size: 80,
            },
            {
                accessorKey: 'completion',
                header: ' Estimate Date for Completion',
                size: 100,
            },
            {
                accessorKey: 'procurement_method',
                header: 'Method',
                size: 100,
            },
            {
                accessorKey: 'Standstill',
                header: 'Standstill Period',
                size: 50,
            },
            {
                accessorKey: 'Contract',
                header: 'Contract Type',
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