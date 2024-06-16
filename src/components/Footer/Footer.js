import React, { useState } from 'react';
import logoImage from "../../images/Icons/logo-trans-white.png";
import instagramIcon from "../../images/Icons/instagram.png";
import facebookIcon from "../../images/Icons/facebooklogo-removebg-preview.png"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import menuItems from '../Header/menu';
import wifiIcon from '../../images/Icons/transparent-wifi-icon-5d65e1d159f935.5784900615669580333685-removebg-preview.png'

function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className=' bg-[#171717] text-[#54595f]'>
            <div className='sm:flex py-[100px] px-[2%] lg:px-[4%] xl:mx-[10%] jsutify-center'>
            <div className='flex-col justify-center items-center sm:w-[30%]'>

    <div className='flex justify-center'>
        <img src={logoImage} alt="Company Logo" className="h-[80px] sm:h-[100%] mb-[50px]" />
    </div>
    <div className='flex justify-center sm:justify-start'>
        <div className='rounded-[50%] h-[40px] w-[40px] bg-[#22282c] flex items-center justify-center mr-[10px] hover:bg-[#057bd5] transition duration-300 hover:cursor-pointer'>
            <a href='https://www.facebook.com/srricltd?mibextid=ZbWKwL' aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook Icon" className="h-[20px]" />
            </a>
        </div>
        <div className='rounded-[50%] h-[40px] w-[40px] bg-[#22282c] flex items-center justify-center mr-[10px] hover:bg-[#057bd5] transition duration-300 hover:cursor-pointer'>
            <a href='https://www.instagram.com/srric.co?igsh=MWtpdDR4ZnBwcXRqbg==' aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram Icon" className="h-[30px]" />
            </a>
        </div>
        <div className='rounded-[50%] h-[40px] w-[40px] bg-[#22282c] flex items-center justify-center mr-[10px] hover:bg-[#057bd5] transition duration-300 hover:cursor-pointer'>
            <a href='https://www.tiktok.com/@srric.co?lang=en' aria-label="TikTok">
                <img src={wifiIcon} alt="TikTok Icon" className="h-[20px]" />
            </a>
        </div>
    </div>
</div>

            
                <div className='sm:w-[20%]  ml-[20px] lg:ml-[70px] xl:ml-[100px]'>
                    <div className='pb-[20px] text-[#ffffff] text-[20px]'>USEFUL LINKS</div>
                    <div className='pb-[20px]'><a href=''> ABOUT US </a> </div>
                    <div className='pb-[20px]'> <a href=''> OTHER SERVICES</a></div>
                    <div className='pb-[20px]'><a href=''>CONTACT US</a></div>
                    <div className='pb-[20px]'><a href=''>CAREERS</a></div>
                </div>
                <div className='w-[25%]'>
                    <div className='mb-[30px]'>
                        <div className='text-[#ffffff]'>PHONE NUMBER</div>
                        <div className='flex my-[15px]'>
                            <PhoneIcon className='mr-[10px] text-[#dddddd]' />
                            <div className='hover:cursor-pointer'>
                                <a href='tel:1 (868) 612-3597'>1 (868) 612-3597</a>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        <div className='text-[#ffffff]'>EMAIL ADDRESS</div>
                        <div className='flex my-[15px]'>
                            <EmailIcon className='mr-[10px] text-[#dddddd]' />
                            <div className='hover:cursor-pointer'>
                                <a href='mailto:info@srric.co '>
                                    info@srric.co</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-[#ffffff]'>OFFICE LOCATION</div>
                        <div className='flex my-[10px] '>
                            <LocationOnIcon className='mr-[10px] text-[#dddddd]' />
                            <div className='hover:cursor-pointer'>
                                <a href=' '>
                                    Building #2, Valsayn North, Valsayn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[25%]'>
                    <div className='text-[#ffffff]'>NEWSLETTER</div>
                    <form onSubmit={handleSubmit} className="items-center justify-center mt-[30px]">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Email Adress"
                            className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring focus:border-blue-300 w-[100%] mb-[20px] bg-inherit"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 w-[100%] w-[100%]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className='border-y border-[#252222]'>

                <div className=" flex flex-wrap justify-center mx-[8%]">
                    {menuItems.map((item, index) => (
                        <div className="w-1/6 p-2 border-r border-[#252222] flex justify-center items-center my-[20px]" key={index}>
                            <a href={item.link} className=" hover:underline">{item.title}</a>
                        </div>
                    ))}
                </div>

            </div >
            <div className='flex items-center justify-center text py-[40px]'>
                © 2023 SRRIC. All Right Reserved.
            </div>
        </div >

    );
}

export default Footer;
