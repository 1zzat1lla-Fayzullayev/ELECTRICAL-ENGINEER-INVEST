/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locale";

function Header() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
    return (
        <>
            <div className="header">
                <div className="header-filter">
                    <div className="flex flex-col items-center text-center gap-[30px] text-white">
                        <h1 className="text-[32px] md:text-[65px] font-[600] leading-[35px] md:leading-[70px]">{getText('headerTitle')}</h1>
                        <p className="text-[14px] md:text-[24px] font-[300] max-w-[700px] text-center">{getText("headerParagraph")}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
