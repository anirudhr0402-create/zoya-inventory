import PurchaseItemRow from "./PurchaseItemRow";

export default function PurchaseItemsTable({
  items,
  updateItem,
  addItem,
  removeItem
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          Purchase Items
        </h3>

        <button
          type="button"
          onClick={addItem}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          + Add Product
        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr>

            <th>Product *</th>

            <th>Qty *</th>

            <th>Price *</th>

            <th>GST %</th>

            <th>Total</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {items.map((item, index) => (

            <PurchaseItemRow
              key={index}
              item={item}
              index={index}
              updateItem={updateItem}
              removeItem={removeItem}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}