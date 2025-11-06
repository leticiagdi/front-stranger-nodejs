function Input({ label, placeholder, type, name, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input 
        className="form-control shadow-sm border-0 border-bottom rounded-3 px-3 py-2 focus-ring focus-ring-primary"
        type={type} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
}


export default Input