import Card from "../../../components/ui/Card";

export default function PurchaseStats({
  purchases
}) {
  const totalPurchases =
    purchases.length;

  const totalValue =
    purchases.reduce(
      (sum, purchase) =>
        sum + purchase.total,
      0
    );

  const pending =
    purchases.filter(
      p => p.status === "Pending"
    ).length;

  const received =
    purchases.filter(
      p => p.status === "Received"
    ).length;

  return (
    <div className="mb-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <Card className="p-5">
        <p>Total Purchases</p>
        <h2 className="text-3xl font-bold">
          {totalPurchases}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Total Value</p>
        <h2 className="text-3xl font-bold">
          INR {totalValue.toFixed(2)}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Received</p>
        <h2 className="text-3xl font-bold text-green-600">
          {received}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Pending</p>
        <h2 className="text-3xl font-bold text-yellow-600">
          {pending}
        </h2>
      </Card>
    </div>
  );
}