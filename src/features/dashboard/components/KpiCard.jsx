export default function KpiCard({
  title,
  value,
  color = "bg-blue-600"
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`h-12 w-12 rounded-full ${color}`}
        />
      </div>
    </div>
  );
}