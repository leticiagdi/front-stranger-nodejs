function Select({ label, name, value, onChange, options }) {
    return (
        <div className="mb-3">
            <label className="form-label fw-semibold">{label}</label>
            <select
                className="form-select shadow-sm"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">Selecione uma opção</option>
                {options.map((opt, index) => (
                    <option key={index} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
