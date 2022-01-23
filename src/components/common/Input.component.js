const Input = ({ type, id, value, placeholder, name, checked, handleChange }) => {
    return (
        <input
            type={type}
            className="col-12 mb-2"
            id={id}
            value={value}
            name={name}
            checked={checked}
            placeholder={placeholder}
            onChange={handleChange}
        />

    );
}
 
export default Input;