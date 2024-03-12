import './Input.css';

const Input = ({ label, placeholder, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
