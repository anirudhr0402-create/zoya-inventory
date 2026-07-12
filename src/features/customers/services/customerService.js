let customers = [
  {
    id: 1,
    code: "CUS001",
    name: "Ahmed Ali",
    phone: "+97334567890",
    email: "ahmed@gmail.com",
    address: "Manama, Bahrain",
    status: "Active"
  },
  {
    id: 2,
    code: "CUS002",
    name: "Fatima Hassan",
    phone: "+97339887766",
    email: "fatima@gmail.com",
    address: "Riffa, Bahrain",
    status: "Active"
  },
  {
    id: 3,
    code: "CUS003",
    name: "John Mathew",
    phone: "+97333445566",
    email: "john@gmail.com",
    address: "Muharraq, Bahrain",
    status: "Inactive"
  }
];

function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getCustomers() {
  await delay();
  return [...customers];
}

export async function addCustomer(customer) {
  await delay();

  const newCustomer = {
    id: Date.now(),
    code: `CUS${String(customers.length + 1).padStart(3, "0")}`,
    ...customer
  };

  customers.push(newCustomer);

  return newCustomer;
}

export async function updateCustomer(customer) {
  await delay();

  customers = customers.map(c =>
    c.id === customer.id ? customer : c
  );

  return customer;
}

export async function deleteCustomer(id) {
  await delay();

  customers = customers.filter(c => c.id !== id);

  return id;
}