import { NavLink } from "react-router-dom";
import { navigation } from "../constants/navigation";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#111827",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          padding: 24,
          fontSize: 24,
          fontWeight: 700,
          borderBottom: "1px solid #374151"
        }}
      >
        Zoya Inventory
      </div>

      <div
        style={{
          padding: 18
        }}
      >
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "block",
              marginBottom: 8,
              padding: "12px 16px",
              borderRadius: 8,
              background: isActive ? "#2563eb" : "transparent",
              color: "#fff"
            })}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}