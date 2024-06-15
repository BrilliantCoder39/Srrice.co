import React from 'react';
import YoutubePlayer from '../components/YoutubeComponent';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
const videoIds = [{ id: 'eOLSZzicEGY', text: 'Witness the incredible transformation happening in La Lune Moruga.' }
    , { id: 'IpDC4O16gMo', text: "Road Rehabilitation Works at Gomez Trace, St. Mary's Village, Moruga, Trinidad" }
    , { id: '87F3LYBbZWQ', text: 'We are taking you behind the scenes to showcase the power of road rehabilitation at Gulfview Link Road Extension San Fernando.' }
    , { id: 'cS7B5xkAE50', text: 'See how our carefully planned road improvements have made a remarkable difference at Sixth Company Moruga.' }
    , { id: 'AXatkU6KGRs', text: 'Delving Deeper Episode 69 - Mr. Antonio Ross' }
    , { id: '4ttTdQ6qUjY', text: '16th Meeting - Public Administration and Appropriations Committee - June 14, 2023 - SRRICL' }
];
const News = () => {

    return (
        <div>
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'>
                <div className='w-[100%]'>
                    <div className="absolute top-[140px] opacity-25 text-[200px] text-gray-300 pointer-events-none text-bold ">
                        GOOD NEWS
                    </div>
                    <div className="mb-[120px]">
                        <div className="py-[20px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">Good News & Releases</div>
                    </div>
                    <div className='mb-[100px]'>
                        <div className='w-[390px] mb-[60px]'>
                            <YoutubePlayer videoId='rWFo6yBLKXQ' />
                            <div className='font-bold'>Witness the incredible transformation happening in La Lune Moruga.</div>
                        </div>
                        <div className='w-[100%] flex flex-wrap '>
                            {videoIds.map((video, index) => (
                                <div key={video.id} className={`w-[390px] mb-[40px] ${index % 3 !== 2 ? 'lg:mr-[3%] xl:mr-[5%]' : 'mr-[0px]'}`}>
                                    <YoutubePlayer className='mb-[40px]' videoId={video.id} />
                                    <div className='font-bold'>{video.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default News;