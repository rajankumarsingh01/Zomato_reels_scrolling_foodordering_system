const AuthInput = ({ type = "text", placeholder, value,name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
        name={name}  
      onChange={onChange}
      className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-black"
    />
  );
};

export default AuthInput;
