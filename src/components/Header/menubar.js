import React, { useState, useEffect, useRef } from 'react';
import { Menu} from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
function MainMenuBar({ menuItems }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="z-10" ref={menuRef}>
            <Menu>
                <button onClick={handleMenuClick}>
                    <MenuIcon className="h-6 w-6 text-white" />
                </button>
                <div className={`absolute top-0 right-0 bg-white w-60 transition-transform duration-300 border-2 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col z-20 h-[2000px]`}>
                    <div onClick={() => setIsMenuOpen(false)} className="cursor-pointer w-[40px] bg-[#ff0000] mb-4">
                        <XIcon className="h-[40px] p-[5px] text-gray-900 text-white" />
                    </div>
                    {menuItems.map((item, index) => (
                        <div className="mb-2 p-4" key={index}>
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            </Menu>
        </div>
    );
}

export default MainMenuBar;