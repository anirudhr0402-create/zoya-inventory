let categories = [
  {
    id: 1,
    name: "Cleaning",
    description: "Cleaning products",
    status: "Active"
  },
  {
    id: 2,
    name: "Laundry",
    description: "Laundry essentials",
    status: "Active"
  },
  {
    id: 3,
    name: "Kitchen",
    description: "Kitchen products",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Personal Care",
    description: "Personal hygiene products",
    status: "Active"
  }
];

function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCategories() {
  await delay();
  return [...categories];
}

export async function addCategory(category) {
  await delay();

  const newCategory = {
    id: Date.now(),
    ...category
  };

  categories.push(newCategory);

  return newCategory;
}

export async function updateCategory(category) {
  await delay();

  categories = categories.map((c) =>
    c.id === category.id ? category : c
  );

  return category;
}

export async function deleteCategory(id) {
  await delay();

  categories = categories.filter(
    (c) => c.id !== id
  );

  return id;
}