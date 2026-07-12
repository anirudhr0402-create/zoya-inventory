import Card from "../../../components/ui/Card";

export default function SupplierStats({
  suppliers
}) {
  const active = suppliers.filter(
    s => s.status === "Active"
  ).length;

  return (
    <div className="mb-6 grid gap-6 md:grid-cols-3">

      <Card className="p-5">
        <p>Total Suppliers</p>

        <h2 className="mt-2 text-3xl font-bold">
          {suppliers.length}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Active Suppliers</p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          {active}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Inactive Suppliers</p>

        <h2 className="mt-2 text-3xl font-bold text-red-600">
          {suppliers.length - active}
        </h2>
      </Card>

    </div>
  );
}