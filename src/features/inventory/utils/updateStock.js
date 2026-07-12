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

  const item =
    await getInventoryItem(
      product.id
    );

  if (!item) {

   await saveInventory({
  productId: product.id,
  productName: product.name,
  quantity: quantity,
  averageCost: Number(price),
  inventoryValue: Number(quantity) * Number(price),
  reorderLevel: 10,
  lastPurchaseDate: new Date().toISOString(),
  lastSaleDate: null
});

  } else {

    const totalStock =
      item.quantity + quantity;

    const totalValue =

      item.quantity *
        item.averageCost +

      quantity * price;

    await updateInventory({

      ...item,

      quantity: totalStock,

      averageCost:
        totalValue / totalStock,

      inventoryValue:
        totalValue

    });

  }

  await addLedger({

    productId:
      product.id,

    type: "PURCHASE",

    quantity,

    price

  });

}

export async function decreaseStock({

  product,

  quantity

}) {

  const item =
    await getInventoryItem(
      product.id
    );

  if (!item)
    throw new Error(
      "Stock not available."
    );

  if (
    item.quantity <
    quantity
  )
    throw new Error(
      "Insufficient Stock"
    );

  await updateInventory({

    ...item,

    quantity:
      item.quantity -
      quantity,

    inventoryValue:
      (item.quantity -
        quantity) *
      item.averageCost

  });

  await addLedger({

    productId:
      product.id,

    type: "SALE",

    quantity,

    price:
      item.averageCost

  });

}