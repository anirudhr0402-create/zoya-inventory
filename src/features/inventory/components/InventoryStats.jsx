import Card from "../../../components/ui/Card";

export default function InventoryStats({
  inventory
}) {
  const totalProducts =
    inventory.length;

  const totalStock =
    inventory.reduce(
      (sum, item) =>
        sum + Number(item.stock),
      0
    );

  const lowStock =
    inventory.filter(
      item =>
        item.stock <=
        item.reorderLevel
    ).length;

  const stockValue =
    inventory.reduce(
      (sum, item) =>
        sum +
        item.stock *
          item.unitPrice,
      0
    );

  return (
    <div className="mb-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Products
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {totalProducts}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Total Stock
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {totalStock}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Low Stock
        </p>

        <h2 className="mt-2 text-3xl font-bold text-yellow-600">
          {lowStock}
        </h2>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">
          Stock Value
        </p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          INR {stockValue.toFixed(2)}
        </h2>
      </Card>
    </div>
  );
}