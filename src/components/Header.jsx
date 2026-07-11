export default function Header() {
  return (
    <header
      style={{
        height: 70,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px"
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: 320,
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #d1d5db"
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18
        }}
      >
        <span>🔔</span>

        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#2563eb",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 700
          }}
        >
          A
        </div>
      </div>
    </header>
  );
}