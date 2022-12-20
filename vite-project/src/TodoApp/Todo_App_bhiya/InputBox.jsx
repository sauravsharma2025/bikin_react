const InputBox = ({ name, value, onChange, placeholder, type }) => {
    return (
      <input
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    );
  };
  
  InputBox.defaultProps = {
    type: "text",
    placeholder: "Enter text here!",
  };
  
  export default InputBox;