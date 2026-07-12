let purchases = [
  {
    id: 1,
    invoiceNo: "PUR-0001",
    supplier: "Zoya Industries",
    product: "Dish Wash Liquid 1L",
    quantity: 100,
    unitPrice: 2.75,
    total: 275,
    purchaseDate: "2026-07-15",
    status: "Received"
  },
  {
    id: 2,
    invoiceNo: "PUR-0002",
    supplier: "ABC Supplies",
    product: "Glass Cleaner",
    quantity: 50,
    unitPrice: 2.10,
    total: 105,
    purchaseDate: "2026-07-16",
    status: "Pending"
  }
];

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getPurchases() {
  await delay();
  return [...purchases];
}

export async function addPurchase(purchase) {
  await delay();

  const newPurchase = {
    id: Date.now(),
    invoiceNo: `PUR-${String(
      purchases.length + 1
    ).padStart(4, "0")}`,
    total:
      Number(purchase.quantity) *
      Number(purchase.unitPrice),
    ...purchase
  };

  purchases.push(newPurchase);

  return newPurchase;
}

export async function updatePurchase(purchase) {
  await delay();

  purchases = purchases.map(p =>
    p.id === purchase.id
      ? {
          ...purchase,
          total:
            Number(purchase.quantity) *
            Number(purchase.unitPrice)
        }
      : p
  );

  return purchase;
}

export async function deletePurchase(id) {
  await delay();

  purchases = purchases.filter(
    p => p.id !== id
  );

  return id;
}