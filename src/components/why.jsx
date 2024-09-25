/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Wrapper from "../layout/wrapper"
import { getText } from "../locale"

function Why() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
    return (
        <>
            <Wrapper>
                <div className="py-[180px] mx-[20px] xl:mx-0">
                    <h2 className="font-[600] text-[25px] sm:text-[35px] md:text-[42px] leading-[1.23] text-center mb-[105px]">{getText("whyTitle")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] justify-items-center md:justify-items-start">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">{getText("whyCard1Title")}</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">{getText("whyCard1Paragraph")}</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">{getText("whyCard2Title")}</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">{getText("whyCard2Paragraph")}</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">{getText("whyCard3Title")}</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">{getText("whyCard3Paragraph")}</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">{getText("whyCard4Title")}</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">{getText("whyCard4Paragraph")}</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">{getText("whyCard5Title")}</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">{getText("whyCard5Paragraph")}</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-[20px]">
                                <img src="/check.svg" alt="" className="w-[35px]" />
                                <div>
                                    <p className="text-[18px] leading-[1.35] font-[600]">{getText("whyCard6Title")}</p>
                                </div>
                            </div>
                            <p className="font-[300] max-w-[360px] text-[16px] mt-[12px] leading-[1.55] text-center md:text-start">{getText("whyCard6Paragraph")}</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Why
