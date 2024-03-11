import "./Dropdown.css";

const Dropdown = ({ label, options }) => (
  <div>
    <label>{label}</label>
    <select>
      {options.map((opt, index) => (
        <option key={index}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;
