export default function EmptyState({
  title = "No Data Available",
  description = "Nothing to display."
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px dashed #d1d5db",
        borderRadius: 12,
        padding: 40,
        textAlign: "center"
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          color: "#6b7280",
          marginTop: 10
        }}
      >
        {description}
      </p>
    </div>
  );
}