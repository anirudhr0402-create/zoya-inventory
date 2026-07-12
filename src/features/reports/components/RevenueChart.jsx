import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function RevenueChart({ sales }) {
  const data = sales.map((sale) => ({
    name: sale.invoiceNo,
    Revenue: sale.total
  }));

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="mb-5 text-lg font-semibold">
        Revenue
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Revenue" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}