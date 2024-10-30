import weather_giff from "/weather.gif";

export default function Weather() {
    return (
        <picture style={{ position: "absolute" }}>
            <source
                draggable={false}
                media="(min-width:1200px)"
                srcSet={weather_giff}
                width={328}
                height={760}
            />
            <img
                draggable={false}
                src={weather_giff}
                width={252}
                height={582}
                style={{ borderRadius: "1.5rem" }}
            />
        </picture>
    );
}
