export default function StatsCard({
  title,
  value,
  color = "text-slate-900"
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2
        className={`mt-2 text-3xl font-bold ${color}`}
      >
        {value}
      </h2>

    </div>
  );
}