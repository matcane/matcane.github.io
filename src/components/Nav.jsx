import { Contact } from "./Contact";
import { useTranslation } from 'react-i18next';
import '../i18n';
import { useState } from "react";

export function Nav() {
    const [lang, setLang] = useState((localStorage.getItem('language') ?? 'EN').toUpperCase());
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'pl' : 'en';
        i18n.changeLanguage(newLanguage);
        setLang(newLanguage.toUpperCase());
        localStorage.setItem('language', newLanguage);
    };
    return(
        <div className="hidden h-12 p-8 justify-between items-center select-none sm:flex">

            <div className="flex text-2xl text-primary gap-x-6">
                <a href="#bio">{t("Bio")}</a>
                <a href="#projects">{t("Projects")}</a>
            </div>

            <div className="flex items-center gap-x-4">
                <button className="text-2xl text-primary p-2" onClick={() => changeLanguage()}>{lang}</button>
                <Contact />
            </div>
            
        </div>
    )
}