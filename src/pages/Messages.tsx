import messages_giff from "/messages.gif";

export default function Messages() {
    return (
        <picture style={{ position: "absolute" }}>
            <source
                draggable={false}
                media="(min-width:1200px)"
                srcSet={messages_giff}
                width={328}
                height={760}
            />
            <img
                draggable={false}
                src={messages_giff}
                width={252}
                height={582}
                style={{ borderRadius: "1.5rem" }}
            />
        </picture>
    );
}
