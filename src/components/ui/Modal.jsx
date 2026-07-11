export default function Modal({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.35)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
      }}
    >
      <div
        style={{
          width: 500,
          background: "#fff",
          borderRadius: 12,
          padding: 24
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20
          }}
        >
          <h2>{title}</h2>

          <button onClick={onClose}>✕</button>
        </div>

        {children}
      </div>
    </div>
  );
}