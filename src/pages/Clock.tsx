import clock_giff from "/clock.gif";

export default function Clock() {
    return (
        <picture style={{ position: "absolute" }}>
            <source
                draggable={false}
                media="(min-width:1200px)"
                srcSet={clock_giff}
                width={328}
                height={760}
            />
            <img
                draggable={false}
                src={clock_giff}
                width={252}
                height={582}
                style={{ borderRadius: "1.5rem" }}
            />
        </picture>
    );
}
