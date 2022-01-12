import Like from "./like.component";
import img from "../images/img.jpg";
import DisLike from "./disLike.component";

const Post = ({ post, handleLike, handleDisLike, handleRemove }) => {
    const { postTitle, date, postContent, like, disLike, id } = post;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{postTitle}</h5>
                <p className="date">{date}</p>
                <img
                    src={img}
                    alt="img"
                    style={{ width: "100%", height: "300px" }}
                />
                <p className="card-text">{postContent}</p>

                <div className="d-flex">
                    <input type="text" placeholder="comment" />
                    <Like id={id} like={like} handleLike={handleLike} />
                    <DisLike
                        id={id}
                        disLike={disLike}
                        handleDisLike={handleDisLike}
                    />
                    <button
                        className="removeBtn"
                        type="button"
                        onClick={() => handleRemove(id)}
                    >
                        <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;