/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { LANGUAGE } from "../tools/constants";
import { flagImages, getLanguage } from "../locale";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
  const [selectedFlag, setSelectedFlag] = useState(flagImages["ru"]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      setSelectedFlag(flagImages[storedLanguage]);
    } else {
      localStorage.setItem(LANGUAGE, "ru");
    }
  }, []);

  const changeLanguage = (language) => {
    localStorage.setItem(LANGUAGE, language);
    setSelectedLanguage(language);
    setSelectedFlag(flagImages[language]);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, selectedFlag, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
