import { uz } from "./uz";
import { ru } from "./ru";
import { LANGUAGE } from "../tools/constants";

export const flagImages = {
    uz: "/flag-uz.svg",
    ru: "/flag-ru.svg",
};

export const getLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    return storedLanguage ? storedLanguage : "uz";
};

export const getText = (word) => {
    const language = getLanguage();
    return language === "uz" ?
        uz[word] :
        language === "ru" &&
        ru[word];
};