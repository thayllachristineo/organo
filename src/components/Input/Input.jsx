import './Input.css'

const Input = ({ label, placeholder }) => (
  <div>
    <label>{label}</label>
    <input placeholder={placeholder} />
  </div>
);

export default Input;
