import duckCheck from "/duckCheck.webp";
import schronisko from "/schronisko.webp";
import collaboraWave from "/collaboraWave.webp";
import quickDeck from "/quickDeck.webp";
import metin2Sim from "/metin2Sim.webp";
import jsonquizzer from "/JSONQuizzer.webp";
import chatbot from "/chatbot.webp";

const stuffData = {
    "json-quizzer": {
        title: "JSONQuizzer",
        img: jsonquizzer,
        stack: ["React", "TypeScript", "Zustand", "HTML", "CSS", "Tailwndcss"],
        description:
            "An application to learn and test their knowledge using questions and answers saved in a JSON file.",
        demo: "https://jsonquizzer.netlify.app",
        repo: "https://github.com/matcane/JSONQuizzer",
        devStatus: "In rebuild / Shit Code",
    },
    "metin-2-simulator": {
        title: "Metin2Simulator",
        img: metin2Sim,
        stack: [
            "React",
            "JavaScript",
            "Redux",
            "Redux Toolkit",
            "i18next",
            "Firestore",
            "HTML",
            "CSS",
            "Tailwndcss",
        ],
        description:
            "An application to simulate enchanting item bonuses in the Metin2 game.",
        demo: "https://metin2bonussim.netlify.app",
        repo: "https://github.com/matcane/Metin2BonusSimulator",
        devStatus: "In rebuild / Shit Code",
    },
    "quick-deck": {
        title: "QuickDeck",
        img: quickDeck,
        stack: [
            "Python",
            "Django",
            "Django REST",
            "HTML",
            "CSS",
            "Tailwndcss",
            "FlowBite",
            "JavaScript",
            "React",
            "PostgreSQL",
        ],
        description: "Simple app to create, manage, and study flashcard decks.",
        demo: "https://quickdeck.ne.choreoapps.dev",
        repo: "https://github.com/matcane/QuickDeck",
        devStatus: "In rebuild / Shit Code",
    },
    "collabora-wave": {
        title: "CollaboraWave",
        img: collaboraWave,
        stack: [
            "Python",
            "Django",
            "Django REST",
            "HTML",
            "CSS",
            "Tailwndcss",
            "Material Tailwind",
            "JavaScript",
            "React",
            "PostgreSQL",
        ],
        description: "Simple implementation of the Kanban method.",
        demo: "https://collaborawave.ne.choreoapps.dev",
        repo: "https://github.com/matcane/CollaboraWave",
        devStatus: "In rebuild / Shit Code",
    },
    schronisko: {
        title: "Schronisko",
        img: schronisko,
        stack: ["Python", "Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
        description: "Application for monitoring animals in the shelter.",
        demo: null,
        repo: "https://github.com/matcane/schronisko",
        devStatus: "",
    },
    "duck-check": {
        title: "DuckCheck",
        img: duckCheck,
        stack: ["Python", "Kivy", "KivyMD", "SQLite"],
        description: "Simple implementation of the DuckChess variant of chess.",
        demo: null,
        repo: "https://github.com/matcane/DuckCheck",
        devStatus: "",
    },
    "chat-bot": {
        title: "ChatBot",
        img: chatbot,
        stack: ["Python", "PyTorch", "NLTK", "Gradio"],
        description: "Simple chatbot for decision systems.",
        demo: null,
        repo: "https://github.com/matcane/DS_Chatbot",
        devStatus: "",
    },
};

export default stuffData;
