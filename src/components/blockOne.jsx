/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Wrapper from "../layout/wrapper"
import { getText } from "../locale"

function BlockOne() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
    return (
        <>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] py-[180px] mx-[20px] xl:mx-0">
                    <div>
                        <img src="/block1.jpg" />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-[600] mb-[16px]">{getText("aboutCompanyTitle")}</h2>
                        <div className="bg-[#259da8] max-w-[50px] w-full h-[3px] mx-auto"></div>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.55] font-[300] max-w-[1500px] mt-[28px]">{getText("aboutCompanyParagraph")}</p>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default BlockOne