import Card from "../../../components/ui/Card";

export default function CategoryStats({
  categories
}) {
  const total = categories.length;

  const active = categories.filter(
    (c) => c.status === "Active"
  ).length;

  const inactive = total - active;

  const stats = [
    {
      title: "Categories",
      value: total,
      color: "bg-blue-600"
    },
    {
      title: "Active",
      value: active,
      color: "bg-green-600"
    },
    {
      title: "Inactive",
      value: inactive,
      color: "bg-red-600"
    }
  ];

  return (
    <div className="mb-6 grid gap-5 md:grid-cols-3">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {item.value}
              </h2>
            </div>

            <div
              className={`h-12 w-12 rounded-full ${item.color}`}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}