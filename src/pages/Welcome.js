import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
const Welcome = () => {

    return (
        <div >
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] mt-[160px]'>
                <div>
                    <div className="absolute top-[140px] opacity-25 text-[200px] text-gray-300 pointer-events-none text-bold ">
                        WELCOME
                    </div>
                    <div className="mb-[120px]">
                        <div className="py-[20px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">Welcome</div>
                    </div>
                    <div className="mb-[100px]">
                        <div className="text-[36px] font-bold">Our Mandate</div>
                        <div className="py-[20px]">
                            The Secondary Roads Rehabilitation and Improvement Company Limited (SRRIC) incorporated on June 17th, 2022 is a state-owned enterprise that aims to transform the secondary road infrastructure across Trinidad.
                        </div>

                        <div className="py-[20px]">
                            The mandate of SRRIC is to develop the existing infrastructure of secondary roads by focusing on road repair, rehabilitation, and upgrade works throughout Trinidad to enhance road capacity, improve existing road infrastructure, and ensure consistent road accessibility and connectivity throughout the country.
                        </div>
                        <div className="py-[20px]">
                            SRRIC has achieved excellence by engaging a cross-disciplinary and multifunctional team to deliver a quality product that optimizes costs, which extends to our clients and stakeholders. We at SRRIC uphold our projects and services to a high standard and seek to deliver our mandate in alignment with our mission and vision.
                        </div>
                    </div>

                    <div className="md:flex mb-[100px]">
                        <div className="ml-4 md:pr-[20px]">
                            <div className="text-[36px] font-bold">Our Mission</div>
                            <div className="py-[20px]">
                                Our mission is “to identify and deliver sustainable secondary roads to stakeholders by utilizing modern technology, engineering, and project management techniques to provide a quality product.”
                            </div>
                        </div>
                        <div className="ml-4 md:pl-[40px]">
                            <div className="text-[36px] font-bold">Our Vision</div>
                            <div className="py-[20px]">
                                Our Vision “we aim to be leaders in delivering  sustainable secondary roads, demonstrating project management excellence, enhancing road networks, and infrastructure.”
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Welcome;