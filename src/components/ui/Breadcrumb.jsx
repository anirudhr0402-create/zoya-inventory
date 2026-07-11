import { Link } from "react-router-dom";

export default function Breadcrumb({
  items = []
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 20,
        color: "#6b7280",
        fontSize: 14
      }}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8
          }}
        >
          {item.path ? (
            <Link
              to={item.path}
              style={{
                color: "#2563eb"
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}

          {index !== items.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
}