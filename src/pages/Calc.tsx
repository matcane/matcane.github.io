import calc_giff from "/calc.gif";

export default function Calc() {
    return (
        <picture style={{ position: "absolute" }}>
            <source
                draggable={false}
                media="(min-width:1200px)"
                srcSet={calc_giff}
                width={328}
                height={760}
            />
            <img
                draggable={false}
                src={calc_giff}
                width={252}
                height={582}
                style={{ borderRadius: "1.5rem" }}
            />
        </picture>
    );
}
