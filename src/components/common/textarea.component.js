const Textarea = ({ className, id, value, placeholder, name, handleChange }) => {
    return (
        <textarea 
            className="col-12 mb-2"
            id={id}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}
 
export default Textarea;