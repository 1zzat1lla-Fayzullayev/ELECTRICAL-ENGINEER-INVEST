import { useEffect, useState } from "react";
import Wrapper from "../layout/wrapper"

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className="bg-[#292929] text-[white] fixed top-0 left-0 w-screen z-[999] shadow-xl">
                <Wrapper>
                    <div className="flex items-center z-[999] relative justify-between mx-[20px] xl:mx-0">
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-[25px]">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                        <div>
                            <img src="/logo.png" alt="" className="w-[60px] md:w-[100px] relative z-[999]" />
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-[25px]">
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Clients</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                        <div
                            className={`burger ${isMenuOpen ? 'open' : ''} block md:hidden`}
                            onClick={toggleMenu}
                        >
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
                            <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
                        </div>
                    </div>
                </Wrapper>
            </div>


            <div className={`menu duration-300 pt-[100px] h-full w-full bg-[#292929] fixed inset-0 z-40 px-5 flex flex-col items-center transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col w-full text-center">
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">About</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Pricing</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Features</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Help</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Partners</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Clients</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Blog</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Contacts</a>
                    <a href="#" target="_blank" className="w-full">

                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar