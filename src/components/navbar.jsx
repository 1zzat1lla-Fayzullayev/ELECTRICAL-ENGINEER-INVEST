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
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">О нашей компании</a></li>
                                <li><a href="#">Наши преимущества</a></li>
                            </ul>
                        </div>
                        <div>
                            <img src="/logo.png" alt="" className="w-[60px] md:w-[100px] relative z-[999]" />
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-[25px]">
                                <li><a href="#">Услуги</a></li>
                                <li><a href="#">Наши партнеры</a></li>
                                <li><a href="#">Контакты</a></li>
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
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Главная</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">О нашей компании</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Наши преимущества</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Услуги</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Наши партнеры</a>
                    <a href="#" className="font-medium block text-white rounded-xl p-4 mb-2 transition duration-300 hover:bg-gray-700 w-full">Контакты</a>
                    <a href="#" target="_blank" className="w-full">

                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar