function CircleProcess (circumference, strokeDashoffset, progress) 
{
        return(<svg width="200" height="200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="lightgray" strokeWidth="5" />

                <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />

                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="black">
                    {progress}
                </text>
        </svg>)
}
export default CircleProcess;