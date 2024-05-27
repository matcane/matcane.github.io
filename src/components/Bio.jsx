import { useTranslation } from 'react-i18next';
import '../i18n';

export function Bio() {
    const { t } = useTranslation();
    return(
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-9xl max-h-full overflow-y-auto">
            <h1 className="text-6xl font-bold mb-4 text-center">{t("About me")}</h1>
            <p className="text-xl mb-4 text-justify lg:text-xl xl:text-3xl 2xl:text-5xl">
            {t("I am a master's student in computer science. I graduated in engineering in the same field. I specialize in the development of web applications.")}
            </p>
            <p className="text-xl mb-4 text-justify lg:text-1xl xl:text-3xl 2xl:text-5xl">
                {t("I have worked with technologies such as")} <strong>Python</strong> (Django, Django REST), <strong>JavaScript</strong> (React), <strong>HTML</strong>, <strong>CSS</strong> (Tailwind CSS), <strong>PostgreSQL</strong>, <strong>Git</strong> {t("and")} <strong>Linux</strong>.
            </p>
            <p className="text-xl mb-4 text-justify lg:text-1xl xl:text-3xl 2xl:text-5xl">
                {t("I also had contact with")} <strong>Java</strong>, <strong>C#</strong>, <strong>C++</strong> {t("and")} <strong>C</strong>. {t("I am looking for new challenges and development opportunities to create applications that have a real impact on users.")}
            </p>
        </div>
    )
}