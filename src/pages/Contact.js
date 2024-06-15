import React, { useState } from 'react';
import EmbeddedMap from '../components/GoogleMaps/Ourlocation';
import mainIcon from '../images/Icons/mail.png'
import callIcon from '../images/Icons/call.svg'
import adressIcon from '../images/Icons/adress.png'
import postAdressIcon from '../images/Icons/icon_letter.png'
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
const infoData = [
    { icon: mainIcon, text: "WRITE US", contact: "info@srric.co" },
    { icon: callIcon, text: "CALL US 8:00AM TO 4:15PM", contact: "+1868 612-3597" },
    { icon: adressIcon, text: "OFFICE LOCATION", contact: "Building #2, Valsayn North, Valsayn" },
    { icon: postAdressIcon, text: "POSTAL ADDRESS", contact: "PO Box 8052, National Mail Centre, Piarco." },
    // Add more objects as needed
];

const Contact = () => {

    const [yourName, setYourName] = useState('');

    const inputName = (e) => {
        setYourName(e.target.value);
    };
    const [yourEmail, setYourEmail] = useState('');

    const inputEmail = (e) => {
        setYourEmail(e.target.value);
    };
    const [yourAdress, setYourAdress] = useState('');

    const inputAdress = (e) => {
        setYourAdress(e.target.value);
    };
    const [subject, setSubject] = useState('');

    const inputSubject = (e) => {
        setSubject(e.target.value);
    };
    const [request, setRequest] = useState('');

    const inputRequest = (e) => {
        setRequest(e.target.value);
    };
    const address = '1600 Amphitheatre Parkway, Mountain View, CA';
    return (
        <div>
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'>
                <div className='w-[100%] '>
                    <div className="absolute top-[100px] opacity-25 text-gray-300 pointer-events-none text-bold ">
                        CONTACT
                    </div>
                    <div className="mb-[80px]">
                        <div className="py-[10px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">Contact</div>
                    </div>
                    <div className="sm:block md:flex justify-between">
                        <div className='sm:w-[100%] md:w-[50%] pr-[30px]'>
                            <EmbeddedMap />
                            {infoData.map((item, index) => (
                                <div className='py-[50px] border w-[100%]'>
                                    <div key={index} className=' ml-[20px] mr-[20px] flex'>
                                        <img className='mr-[20px] w-[50px] min-w-[50px]' alt={item.text} src={item.icon} />
                                        <div>
                                            <div>{item.text}</div>
                                            <div>{item.contact}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='sm:w-[100%] md:w-[50%]'>
                            <div className="flex flex-col items-center justify-center mt-8">
                                <div>GET IN TOUCH</div>
                                <div className="text-[48px] font-bold">Leave us a Message</div>
                            </div>
                            <form className="flex flex-col items-center justify-center">
                                <div className='flex justify-between w-[100%] mb-[20px]'>
                                    <div className="flex flex-col mb-4 mr-[10px] w-[100%]">
                                        <input
                                            type="text"
                                            id="yourName"
                                            value={yourName}
                                            onChange={inputName}
                                            placeholder="Your Name"
                                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                            required // Make the input field required
                                        />
                                        {yourName === '' && document.activeElement === document.getElementById('yourName') && (
                                            <p className="text-red-500 text-sm">Your Name is required</p>
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-end mb-4 w-[100%] ml-[10px]">
                                        <input
                                            type="text"
                                            id="yourEmail"
                                            value={yourEmail}
                                            onChange={inputEmail}
                                            placeholder="Your email"
                                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                            required // Make the input field required
                                        />
                                        {yourEmail === '' && document.activeElement === document.getElementById('yourEmail') && (
                                            <p className="text-red-500 text-sm">Your Email is required</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end mb-[30px] w-[100%]">
                                    <input
                                        type="text"
                                        id="yourAdress"
                                        value={yourAdress}
                                        onChange={inputAdress}
                                        placeholder="Your Address"
                                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                        required // Make the input field required
                                    />
                                    {yourAdress === '' && document.activeElement === document.getElementById('yourAdress') && (
                                        <p className="text-red-500 text-sm">Your Address is required</p>
                                    )}
                                </div>
                                <div className="flex flex-col justify-end mb-[30px] w-[100%]">
                                    <input
                                        type="text"
                                        id="subject"
                                        value={subject}
                                        onChange={inputSubject}
                                        placeholder="Subject"
                                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit"
                                        required // Make the input field required
                                    />
                                    {subject === '' && document.activeElement === document.getElementById('subject') && (
                                        <p className="text-red-500 text-sm">Subject is required</p>
                                    )}
                                </div>
                                <div className="flex flex-col justify-end mb-[30px] w-[100%] ">
                                    <textarea
                                        id="request"
                                        value={request}
                                        onChange={inputRequest}
                                        placeholder="Request"
                                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full bg-inherit h-40" // Set the height to 40px
                                    ></textarea>
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
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Contact;