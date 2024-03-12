import './Dropdown.css';

const Dropdown = ({ label, options, value, onChange }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      <option value=""></option>
      {options.map((opt, index) => (
        <option key={index}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;
