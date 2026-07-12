import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function ProfitChart({ sales }) {
  const data = sales.map((sale) => ({
    name: sale.invoiceNo,
    Profit: sale.profit
  }));

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="mb-5 text-lg font-semibold">
        Profit
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="Profit"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}