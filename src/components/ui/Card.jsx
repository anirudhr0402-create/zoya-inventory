export default function Card({ children }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 3px 12px rgba(0,0,0,.08)"
      }}
    >
      {children}
    </div>
  );
}