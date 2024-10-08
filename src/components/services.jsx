/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Wrapper from "../layout/wrapper";
import { getText } from "../locale";

function Services() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
    return (
        <div className="bg-[#ededed] pt-[165px] pb-[120px]">
            <Wrapper>
                <div className="h-full mx-[20px] xl:mx-0">
                    <div className="flex justify-center items-center text-center flex-col">
                        <h2 className="text-[52px] font-[600]"> {getText("servicesTitle")}</h2>
                        <p className="pt-[41px] text-[24px] leading-[1.5] font-[300] max-w-[800px]">
                            {getText("servicesParagraph")}
                        </p>
                    </div>

                    <div className="pt-[160px] h-full flex flex-col items-center justify-center w-full mx-auto">
                        <div className="flex flex-col md:flex-row w-full ">
                            <div className="w-full md:w-[50%] flex items-center">
                                <img src="/services1.png" alt="" className="w-full h-auto object-cover" />
                            </div>
                            <div className="bg-white w-full md:w-[50%] flex items-center">
                                <p className="text-[16px] py-[70px] md:py-0 sm:text-[18px] md:text-[22px] max-w-[360px] flex justify-center items-center h-full mx-auto pt-[20px] px-[10px] text-center leading-[25px] opacity-[.7]">
                                    {getText("servicesCard1")}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse md:flex-row w-full ">
                            <div className="bg-white w-full md:w-[50%] flex items-center">
                                <p className="text-[16px] py-[70px] md:py-0 sm:text-[18px] md:text-[22px] max-w-[360px] flex justify-center items-center h-full mx-auto pt-[20px] px-[10px] text-center leading-[25px] opacity-[.7]">
                                    {getText("servicesCard2")}
                                </p>
                            </div>
                            <div className="w-full md:w-[50%] flex items-center">
                                <img src="/services2.jpg" alt="" className="w-full h-auto object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full">
                            <div className="w-full md:w-[50%] flex items-center">
                                <img src="/services3.jpg" alt="" className="w-full h-auto object-cover" />
                            </div>
                            <div className="bg-white w-full md:w-[50%] flex items-center">
                                <p className="text-[16px] py-[70px] md:py-0 sm:text-[18px] md:text-[22px] max-w-[360px] flex justify-center items-center h-full mx-auto pt-[20px] px-[10px] text-center leading-[25px] opacity-[.7]">
                                    {getText("servicesCard3")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center pt-[100px] gap-[20px] flex-col md:flex-row md:gap-[60px] text-center md:text-start">
                        <h4 className="text-[16px] sm:text-[18px] md:text-[22px] leading-[1.55] font-[300] max-w-[550px]">{getText("servicesEndParagraph")}</h4>
                        <button className="bg-[#259da8] text-white rounded-[5px] px-[40px] h-[60px]">
                            {getText("servicesButtonTitle")}
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Services;
