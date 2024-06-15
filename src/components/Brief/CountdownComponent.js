import React, { useState, useEffect } from 'react';
import CircleProcess from './CircleProcess';

//Constant
const upcommingDays = 30;
const upcommingHours = 24;
const upcommingMinutes = 60;
const upcommingSeconds = 60;

const CountdownComponent = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds]= useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date();
            setDays(date.getDay());
            setHours(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());            
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const circumference = 2 * Math.PI * 90;
    const daysPercentage = (days / upcommingDays) * 100;
    const hoursPercentage = (hours/upcommingHours) * 100;
    const minutesPercentage = (minutes/upcommingMinutes) * 100;
    const secondsPercentage = (seconds/upcommingSeconds) * 100;
 
    const daysDashoffset = circumference - (circumference * daysPercentage) / 100;
    const hoursDashoffset = circumference - (circumference * hoursPercentage) / 100;
    const minutesDashoffset = circumference - (circumference * minutesPercentage) / 100;
    const secondsDashoffset = circumference - (circumference * secondsPercentage) / 100;

    return (
        <div className='flex mb-[50px]'>
            <svg width="200" height="200" className='mr-[30px]'>
                <circle cx="100" cy="100" r="90" fill="none" stroke="lightgray" strokeWidth="5" />

                <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={daysDashoffset} />

                <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="black">
                    Day <tspan x="50%" dy="1.8em">{days}</tspan>
                </text>
            </svg>
            <svg width="200" height="200" className='mr-[30px]'>
                <circle cx="100" cy="100" r="90" fill="none" stroke="lightgray" strokeWidth="5" />

                <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={hoursDashoffset} />

                <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="black">
                    HOURS <tspan x="50%" dy="1.8em"> {hours} </tspan>
                </text>
            </svg>
            <svg width="200" height="200" className='mr-[30px]'>
                <circle cx="100" cy="100" r="90" fill="none" stroke="lightgray" strokeWidth="5" />

                <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={minutesDashoffset} />

                <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="black">
                    MINUTES <tspan x="50%" dy="1.8em"> {minutes} </tspan>
                </text>
            </svg>
            <svg width="200" height="200" className='mr-[30px]'>
                <circle cx="100" cy="100" r="90" fill="none" stroke="lightgray" strokeWidth="5" />

                <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={secondsDashoffset} />

                <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="black">
                    SECONDS <tspan x="50%" dy="1.8em"> {seconds} </tspan>
                </text>
            </svg>
        </div>
    );
};

export default CountdownComponent;
