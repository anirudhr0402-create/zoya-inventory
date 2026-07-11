export default function Toast({
  message,
  type = "success"
}) {
  const colors = {
    success: "#16a34a",
    error: "#dc2626",
    warning: "#f59e0b",
    info: "#2563eb"
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        background: colors[type],
        color: "#fff",
        padding: "14px 20px",
        borderRadius: 8,
        fontWeight: 600
      }}
    >
      {message}
    </div>
  );
}