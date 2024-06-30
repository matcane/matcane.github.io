import duckCheck from '../assets/duckCheck.png'
import schronisko from '../assets/schronisko.png'
import collaboraWave from '../assets/collaboraWave.png'
import quickDeck from '../assets/quickDeck.png'
import metin2Sim from '../assets/metin2Sim.png'
import jsonquizzer from '../assets/JSONQuizzer.png'
import chatbot from '../assets/chatbot.png'


export const projectsData = {
    0: {
        "title": "JSONQuizzer",
        "stack": ["React", "TypeScript", "Zustand", "HTML", "CSS", "Tailwndcss"],
        "description": "An application to learn and test their knowledge using questions and answers saved in a JSON file.",
        "demo": "https://jsonquizzer.netlify.app",
        "repo": "https://github.com/matcane/JSONQuizzer"
    },
    1: {
        "title": "Metin2Simulator",
        "stack": ["React", "JavaScript", "Redux", "Redux Toolkit", "i18next", "Firestore", "HTML", "CSS", "Tailwndcss"],
        "description": "An application to simulate enchanting item bonuses in the Metin2 game.",
        "demo": "https://metin2bonussim.netlify.app",
        "repo": "https://github.com/matcane/Metin2BonusSimulator"
    },
    2: {
        "title": "QuickDeck",
        "stack": ["Python", "Django", "Django REST", "HTML", "CSS", "Tailwndcss", "FlowBite", "JavaScript", "React", "PostgreSQL"],
        "description": "Simple app to create, manage, and study flashcard decks.",
        "demo": "https://quickdeck.ne.choreoapps.dev",
        "repo": "https://github.com/matcane/QuickDeck"
    },
    3: {
        "title": "CollaboraWave",
        "stack": ["Python", "Django", "Django REST", "HTML", "CSS", "Tailwndcss", "Material Tailwind", "JavaScript", "React", "PostgreSQL"],
        "description": "Simple implementation of the Kanban method.",
        "demo": "https://collaborawave.ne.choreoapps.dev",
        "repo": "https://github.com/matcane/CollaboraWave"
    },
    4: {
        "title": "Schronisko",
        "stack": ["Python", "Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
        "description": "Application for monitoring animals in the shelter.",
        "demo": null,
        "repo": "https://github.com/matcane/schronisko"
    },
    5: {
        "title": "DuckCheck",
        "stack": ["Python", "Kivy", "KivyMD", "SQLite"],
        "description": "Simple implementation of the DuckChess variant of chess.",
        "demo": null,
        "repo": "https://github.com/matcane/DuckCheck"
    },
    6: {
        "title": "ChatBot",
        "stack": ["Python", "PyTorch", "NLTK", "Gradio"],
        "description": "Simple chatbot for decision systems.",
        "demo": null,
        "repo": "https://github.com/matcane/DS_Chatbot"
    }
}

export const projectsImg = {
    0: jsonquizzer,
    1: metin2Sim,
    2: quickDeck,
    3: collaboraWave,
    4: schronisko,
    5: duckCheck,
    6: chatbot,
  };