import React from 'react';
import logoImage from "../../images/SRRIC-White-logo-300x98.png";
import MainMenuBar from './menubar';
import menuItems from './menu';
function Header() {

    return (
        <div className="bg-black flex justify-between items-center relative h-[138px]">
            {/* Logo */}
            <div className=" items-center justify-start ml-[8%] flex ">
                <img src={logoImage} alt="Company Logo" className="h-[40px] sm:h-[60px] md:h-[70px]  lg:h-[98px]" />
            </div>

            <div className=" flex justify-end mr-[50px]">
                <MainMenuBar menuItems={menuItems}></MainMenuBar>
            </div>
        </div>
    );
}

export default Header;
