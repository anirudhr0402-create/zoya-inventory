export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text"
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6
      }}
    >
      {label && (
        <label
          style={{
            fontWeight: 600
          }}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: 12,
          borderRadius: 8,
          border: "1px solid #d1d5db"
        }}
      />
    </div>
  );
}