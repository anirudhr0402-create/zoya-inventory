import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Products", path: "/products" },
{
  name: "Categories", path: "/categories"
},
  { name: "Inventory", path: "/inventory" },
  { name: "Suppliers", path: "/suppliers" },
  { name: "Customers", path: "/customers" },
  { name: "Purchases", path: "/purchases" },
  { name: "Sales", path: "/sales" },
  { name: "Reports", path: "/reports" },
  {
    name: "Settings",
    path: "/settings"
}
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6 text-2xl font-bold">
        AIMS
      </div>

      <nav className="p-4">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `mb-2 block rounded-lg px-4 py-3 ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}