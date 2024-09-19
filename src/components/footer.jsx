import Wrapper from '../layout/wrapper';

function Footer() {
    return (
        <footer className="bg-[#292929] text-white py-10 text-center md:text-start">
            <Wrapper>
                <div className="flex flex-col md:flex-row justify-between items-center mx-[20px] xl:mx-0">
                    <div className="flex flex-col justify-center items-center md:justify-start md:items-start mb-6 md:mb-0">
                        <img src="/logo.png" alt="" className='w-[70px] md:w-[130px]' />
                        <p className="text-[18px] font-[300] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Company</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#" className="hover:text-gray-400 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-400 transition">Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ELECTRICAL ENGINEER INVEST. All rights reserved.</p>
                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;
