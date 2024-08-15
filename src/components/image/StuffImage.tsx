const StuffImage = ({ img }: { img: string }) => {
    return (
        <img
            src={img}
            style={{
                maxInlineSize: "100%",
                blockSize: "auto",
            }}
        />
    );
};

export default StuffImage;
