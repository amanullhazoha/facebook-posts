const DisLike = ({ disLike, id, handleDisLike }) => {
    const className = disLike ? "fa-thumbs-down" : "fa-thumbs-o-down";

    return (
        <button onClick={() => handleDisLike(id)}>
            <i className={`fa ${className}`} />
        </button>
    );
};

export default DisLike;