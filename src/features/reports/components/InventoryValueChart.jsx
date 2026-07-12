import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function InventoryValueChart({
  inventory
}) {
  const data = inventory.map((item) => ({
    name: item.productName,
    value: item.stock * item.unitPrice
  }));

  const colors = [
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#6366f1",
    "#06b6d4"
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="mb-5 text-lg font-semibold">
        Inventory Value
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  colors[index % colors.length]
                }
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}