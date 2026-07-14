export default function InventoryValueCard({ value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <p className="text-gray-500">
        Inventory Value
      </p>

      <h2 className="mt-3 text-3xl font-bold text-blue-600">
        ₹ {Number(value || 0).toLocaleString("en-IN")}
      </h2>

    </div>
  );
}