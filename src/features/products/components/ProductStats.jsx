import Card from "../../../components/ui/Card";

export default function ProductStats({ products }) {
  const total = products.length;

  const active = products.filter(
    (p) => p.status === "Active"
  ).length;

  const lowStock = products.filter(
    (p) => p.status === "Low Stock"
  ).length;

  const outOfStock = products.filter(
    (p) => p.status === "Out of Stock"
  ).length;

  const stats = [
    {
      title: "Products",
      value: total,
      color: "bg-blue-600"
    },
    {
      title: "Active",
      value: active,
      color: "bg-green-600"
    },
    {
      title: "Low Stock",
      value: lowStock,
      color: "bg-yellow-500"
    },
    {
      title: "Out Of Stock",
      value: outOfStock,
      color: "bg-red-600"
    }
  ];

  return (
    <div className="mb-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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