import useProducts from "../../products/hooks/useProducts";

export default function SaleItemRow({
  item,
  index,
  updateItem,
  removeItem
}) {
  const { data: products = [] } = useProducts();

  const total =
    Number(item.quantity || 0) *
    Number(item.sellingPrice || 0);

  return (
    <tr>

      <td className="p-2">
        <select
          value={item.productId}
          onChange={(e) =>
            updateItem(
              index,
              "productId",
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        >
          <option value="">
            Select Product
          </option>

          {products.map(product => (
            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>
          ))}

        </select>
      </td>

      <td className="p-2">

        <input
          type="number"
          value={item.quantity}
          onChange={(e)=>
            updateItem(
              index,
              "quantity",
              e.target.value
            )
          }
          className="w-24 rounded border p-2"
        />

      </td>

      <td className="p-2">

        <input
          type="number"
          value={item.sellingPrice}
          onChange={(e)=>
            updateItem(
              index,
              "sellingPrice",
              e.target.value
            )
          }
          className="w-28 rounded border p-2"
        />

      </td>

      <td className="p-2">

        <input
          type="number"
          value={item.gst}
          onChange={(e)=>
            updateItem(
              index,
              "gst",
              e.target.value
            )
          }
          className="w-20 rounded border p-2"
        />

      </td>

      <td className="p-2 font-semibold">

        ₹ {total.toFixed(2)}

      </td>

      <td className="p-2">

        <button
          type="button"
          onClick={() =>
            removeItem(index)
          }
          className="rounded bg-red-600 px-3 py-2 text-white"
        >
          Remove
        </button>

      </td>

    </tr>
  );
}