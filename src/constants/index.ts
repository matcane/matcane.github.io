import settings from "/icons8-settings.webp";
import clock from "/icons8-clock.webp";
import calc from "/icons8-calc.webp";
import camera from "/icons8-camera.webp";
import weather from "/icons8-weather.webp";
import messages from "/icons8-messages.webp";

export const leftIconLinks = [
    { to: "/zenos/settings", label: "Settings", icon: settings },
    { to: "/zenos/calc", label: "Calc", icon: calc },
    { to: "/zenos/clock", label: "Clock", icon: clock },
];

export const rightIconLinks = [
    { to: "/zenos/weather", label: "Weather", icon: weather },
    { to: "/zenos/messages", label: "Messages", icon: messages },
    { to: "/zenos/camera", label: "Camera", icon: camera },
];
