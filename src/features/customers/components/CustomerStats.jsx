import Card from "../../../components/ui/Card";

export default function CustomerStats({
  customers
}) {
  const total = customers.length;

  const active = customers.filter(
    (c) => c.status === "Active"
  ).length;

  const inactive = total - active;

  return (
    <div className="mb-6 grid gap-5 md:grid-cols-3">
      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Total Customers
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {total}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Active
        </p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          {active}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Inactive
        </p>

        <h2 className="mt-2 text-3xl font-bold text-red-600">
          {inactive}
        </h2>
      </Card>
    </div>
  );
}