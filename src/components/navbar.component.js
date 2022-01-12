const Navbar = ({ like, disLike }) => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>Facebook</h1>
                <h4>like : {like}</h4>
                <h4>dislike : {disLike}</h4>
            </div>
        </nav>
    );
}
 
export default Navbar;