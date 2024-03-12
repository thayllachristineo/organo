import './Dropdown.css';

const Dropdown = ({ label, options, value, onChange }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      {options.map((opt, index) => (
        <option key={index}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;
