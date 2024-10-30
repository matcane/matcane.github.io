import settings_giff from "/settings.gif";

export default function Settings() {
    return (
        <picture style={{ position: "absolute" }}>
            <source
                draggable={false}
                media="(min-width:1200px)"
                srcSet={settings_giff}
                width={328}
                height={760}
            />
            <img
                draggable={false}
                src={settings_giff}
                width={252}
                height={582}
                style={{ borderRadius: "1.5rem" }}
            />
        </picture>
    );
}
