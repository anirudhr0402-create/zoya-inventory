export default function SearchBox({
  placeholder = "Search..."
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        width: 300,
        padding: "10px 14px",
        border: "1px solid #d1d5db",
        borderRadius: 8,
        outline: "none"
      }}
    />
  );
}