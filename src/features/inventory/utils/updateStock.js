import {
  getInventoryItem,
  saveInventory,
  updateInventory,
  addLedger
} from "../services/inventoryService";

export async function increaseStock({
  product,
  quantity,
  price
}) {
  quantity = Number(quantity);
  price = Number(price);

  let inventory =
    await getInventoryItem(product.id);

  if (!inventory) {
    inventory = {
      productId: product.id,
      productCode:
        product.code || "",
      productName:
        product.name,
      category:
        product.category || "",
      quantity: 0,
      averageCost: 0,
      reorderLevel:
        Number(
          product.reorderLevel ||
            10
        )
    };
  }

  const currentQty =
    Number(
      inventory.quantity || 0
    );

  const currentCost =
    Number(
      inventory.averageCost ||
        0
    );

  const totalQty =
    currentQty + quantity;

  const averageCost =
    totalQty === 0
      ? 0
      : (
          currentQty *
            currentCost +
          quantity * price
        ) / totalQty;

  const updated = {
    ...inventory,
    quantity: totalQty,
    averageCost: Number(
      averageCost.toFixed(2)
    ),
    inventoryValue: Number(
      (
        totalQty *
        averageCost
      ).toFixed(2)
    ),
    lastPurchaseDate:
      new Date().toISOString()
  };

  if (currentQty === 0) {
    await saveInventory(updated);
  } else {
    await updateInventory(
      updated
    );
  }

  await addLedger({
    productId:
      product.id,
    productName:
      product.name,
    type: "PURCHASE",
    quantity,
    price,
    balance: totalQty,
    remarks:
      "Purchase Entry"
  });
}

export async function decreaseStock({
  product,
  quantity
}) {
  quantity = Number(quantity);

  const inventory =
    await getInventoryItem(
      product.id
    );

  if (!inventory) {
    throw new Error(
      "Inventory record not found."
    );
  }

  const currentQty =
    Number(
      inventory.quantity || 0
    );

  if (currentQty < quantity) {
    throw new Error(
      `Only ${currentQty} items available in stock.`
    );
  }

  const remaining =
    currentQty - quantity;

  const updated = {
    ...inventory,
    quantity: remaining,
    inventoryValue: Number(
      (
        remaining *
        Number(
          inventory.averageCost ||
            0
        )
      ).toFixed(2)
    ),
    lastSaleDate:
      new Date().toISOString()
  };

  await updateInventory(
    updated
  );

  await addLedger({
    productId:
      product.id,
    productName:
      product.name,
    type: "SALE",
    quantity,
    price:
      inventory.averageCost,
    balance: remaining,
    remarks:
      "Sales Entry"
  });
}

export async function adjustStock({
  inventory,
  type,
  quantity,
  remarks
}) {
  quantity = Number(quantity);

  let current =
    Number(
      inventory.quantity || 0
    );

  switch (type) {
    case "Purchase":
    case "Returned":
    case "Opening Stock":
      current += quantity;
      break;

    case "Sale":
    case "Damaged":
      current -= quantity;

      if (current < 0)
        current = 0;

      break;

    default:
      current = quantity;
  }

  const updated = {
    ...inventory,
    quantity: current,
    inventoryValue: Number(
      (
        current *
        Number(
          inventory.averageCost ||
            0
        )
      ).toFixed(2)
    )
  };

  await updateInventory(
    updated
  );

  await addLedger({
    productId:
      inventory.productId,
    productName:
      inventory.productName,
    type,
    quantity,
    price:
      inventory.averageCost,
    balance: current,
    remarks
  });

  return updated;
}