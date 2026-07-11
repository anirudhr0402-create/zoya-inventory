let suppliers = [
  {
    id: 1,
    code: "SUP001",
    name: "Zoya Industries",
    contactPerson: "Mohammed Ali",
    phone: "+97334567890",
    email: "sales@zoya.com",
    address: "Manama, Bahrain",
    status: "Active"
  },
  {
    id: 2,
    code: "SUP002",
    name: "ABC Supplies",
    contactPerson: "John Smith",
    phone: "+97339876543",
    email: "contact@abc.com",
    address: "Muharraq, Bahrain",
    status: "Active"
  },
  {
    id: 3,
    code: "SUP003",
    name: "Prime Distributors",
    contactPerson: "Ahmed Hassan",
    phone: "+97333669988",
    email: "info@prime.com",
    address: "Riffa, Bahrain",
    status: "Inactive"
  }
];

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getSuppliers() {
  await delay();
  return [...suppliers];
}

export async function addSupplier(supplier) {
  await delay();

  const newSupplier = {
    id: Date.now(),
    code: `SUP${String(suppliers.length + 1).padStart(3, "0")}`,
    ...supplier
  };

  suppliers.push(newSupplier);

  return newSupplier;
}

export async function updateSupplier(supplier) {
  await delay();

  suppliers = suppliers.map(s =>
    s.id === supplier.id ? supplier : s
  );

  return supplier;
}

export async function deleteSupplier(id) {
  await delay();

  suppliers = suppliers.filter(s => s.id !== id);

  return id;
}