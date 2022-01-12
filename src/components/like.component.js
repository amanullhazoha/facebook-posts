const Like = ({ like, id, handleLike }) => {
    const className = like ? "fa-thumbs-up" : "fa-thumbs-o-up";

    return (
        <button onClick={() => handleLike(id)}>
            <i className={`fa ${className}`} />
        </button>
    );
};

export default Like;