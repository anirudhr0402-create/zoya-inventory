import Modal from "../../../components/ui/Modal";
import { useState, useEffect } from "react";

export default function InventoryModal({
  open,
  item,
  onSubmit,
  onClose
}) {
  const [stock, setStock] = useState(0);

  useEffect(() => {
    if (item) {
      setStock(item.stock);
    }
  }, [item]);

  if (!open) return null;

  return (
    <Modal
      open={open}
      title="Update Stock"
      onClose={onClose}
    >
      <div className="space-y-5">
        <div>
          <label className="block mb-2">
            Stock Quantity
          </label>

          <input
            type="number"
            value={stock}
            onChange={(e) =>
              setStock(Number(e.target.value))
            }
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={() =>
              onSubmit({
                ...item,
                stock
              })
            }
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}