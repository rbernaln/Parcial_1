// src/components/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('es')} className="btn btn-link">
        Español
      </button>
      <button onClick={() => changeLanguage('en')} className="btn btn-link">
        English
      </button>
    </div>
  );
};

export default LanguageSelector;
