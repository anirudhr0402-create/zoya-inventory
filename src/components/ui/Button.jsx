export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary"
}) {
  const styles = {
    primary: {
      background: "#2563eb",
      color: "#fff"
    },
    secondary: {
      background: "#e5e7eb",
      color: "#111827"
    },
    danger: {
      background: "#dc2626",
      color: "#fff"
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: "10px 18px",
        border: "none",
        borderRadius: 8,
        fontWeight: 600,
        ...styles[variant]
      }}
    >
      {children}
    </button>
  );
}