let sales = [
  {
    id: 1,
    invoiceNo: "SAL-0001",
    customer: "Ahmed Ali",
    product: "Dish Wash Liquid 1L",
    quantity: 10,
    costPrice: 2.75,
    sellingPrice: 4.25,
    total: 42.5,
    profit: 15,
    saleDate: "2026-07-18",
    status: "Completed"
  },
  {
    id: 2,
    invoiceNo: "SAL-0002",
    customer: "Fatima Hassan",
    product: "Glass Cleaner",
    quantity: 5,
    costPrice: 2.10,
    sellingPrice: 3.50,
    total: 17.5,
    profit: 7,
    saleDate: "2026-07-18",
    status: "Completed"
  }
];

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getSales() {
  await delay();
  return [...sales];
}

export async function addSale(sale) {
  await delay();

  const quantity = Number(sale.quantity);
  const sellingPrice = Number(sale.sellingPrice);
  const costPrice = Number(sale.costPrice);

  const newSale = {
    id: Date.now(),
    invoiceNo: `SAL-${String(sales.length + 1).padStart(4, "0")}`,
    total: quantity * sellingPrice,
    profit: quantity * (sellingPrice - costPrice),
    ...sale
  };

  sales.push(newSale);

  return newSale;
}

export async function updateSale(sale) {
  await delay();

  const quantity = Number(sale.quantity);
  const sellingPrice = Number(sale.sellingPrice);
  const costPrice = Number(sale.costPrice);

  sales = sales.map(item =>
    item.id === sale.id
      ? {
          ...sale,
          total: quantity * sellingPrice,
          profit: quantity * (sellingPrice - costPrice)
        }
      : item
  );

  return sale;
}

export async function deleteSale(id) {
  await delay();

  sales = sales.filter(item => item.id !== id);

  return id;
}