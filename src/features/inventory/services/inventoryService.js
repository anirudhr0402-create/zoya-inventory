let inventory = [
  {
    id: 1,
    productCode: "PRD001",
    productName: "Dish Wash Liquid 1L",
    category: "Cleaning",
    supplier: "Zoya Industries",
    stock: 120,
    reorderLevel: 20,
    unitPrice: 2.75,
    location: "Warehouse A"
  },
  {
    id: 2,
    productCode: "PRD002",
    productName: "Toilet Cleaner 500ml",
    category: "Cleaning",
    supplier: "ABC Supplies",
    stock: 18,
    reorderLevel: 25,
    unitPrice: 3.50,
    location: "Warehouse A"
  },
  {
    id: 3,
    productCode: "PRD003",
    productName: "Glass Cleaner",
    category: "Cleaning",
    supplier: "Prime Distributors",
    stock: 0,
    reorderLevel: 15,
    unitPrice: 2.10,
    location: "Warehouse B"
  }
];

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getInventory() {
  await delay();
  return [...inventory];
}

export async function updateInventory(item) {
  await delay();

  inventory = inventory.map(i =>
    i.id === item.id ? item : i
  );

  return item;
}