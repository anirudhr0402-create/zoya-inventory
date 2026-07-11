import { getProductStatus } from "../utils/productStatus";

let products = [
  {
    id: 1,
    code: "PRD001",
    name: "Dish Wash Liquid 1L",
    category: "Cleaning",
    supplier: "Zoya Industries",
    price: 2.75,
    stock: 120,
    status: "Active"
  },
  {
    id: 2,
    code: "PRD002",
    name: "Toilet Cleaner 500ml",
    category: "Cleaning",
    supplier: "Zoya Industries",
    price: 3.5,
    stock: 18,
    status: "Low Stock"
  },
  {
    id: 3,
    code: "PRD003",
    name: "Glass Cleaner Spray",
    category: "Cleaning",
    supplier: "ABC Supplies",
    price: 2.25,
    stock: 0,
    status: "Out of Stock",
    createdAt: "2026-07-11T09:00:00Z",
updatedAt: "2026-07-11T09:00:00Z"
  },
  {
    id: 4,
    code: "PRD004",
    name: "Laundry Detergent",
    category: "Laundry",
    supplier: "Global Trading",
    price: 4.95,
    stock: 67,
    createdAt: "2026-07-11T09:00:00Z",
updatedAt: "2026-07-11T09:00:00Z",
    status: "Active"
  },
  {
    id: 5,
    code: "PRD005",
    name: "Liquid Hand Wash",
    category: "Personal Care",
    supplier: "Prime Distributors",
    price: 1.95,
    stock: 240,
    createdAt: "2026-07-11T09:00:00Z",
updatedAt: "2026-07-11T09:00:00Z",
    status: "Active"
  }
];

function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts() {
  await delay();

  return [...products];
}

export async function getProductById(id) {
  await delay();

  return products.find((product) => product.id === id) || null;
}

export async function addProduct(product) {
  await delay();

  const nextCode =
    product.code ||
    `PRD${String(products.length + 1).padStart(3, "0")}`;

  const newProduct = {
    ...product,
    id: Date.now(),
    code: nextCode,
    image: null,
    price: Number(product.price),
    stock: Number(product.stock),
    createdAt: new Date().toISOString(),
updatedAt: new Date().toISOString(),
    status: getProductStatus(product.stock)
    
  };

  products.push(newProduct);

  return newProduct;
}

export async function updateProduct(product) {
  await delay();

  const updatedProduct = {
    ...product,
    price: Number(product.price),
    stock: Number(product.stock),
    image: null,
    updatedAt: new Date().toISOString(),
    status: getProductStatus(product.stock)
  };

  products = products.map((p) =>
    p.id === updatedProduct.id ? updatedProduct : p
  );

  return updatedProduct;
}

export async function deleteProduct(id) {
  await delay();

  products = products.filter((product) => product.id !== id);

  return id;
}

export async function searchProducts(keyword) {
  await delay();

  if (!keyword) {
    return [...products];
  }

  const search = keyword.toLowerCase();

  return products.filter((product) => {
    return (
      product.code.toLowerCase().includes(search) ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.supplier.toLowerCase().includes(search) ||
      product.status.toLowerCase().includes(search)
    );
  });
}

export async function getProductCount() {
  await delay();

  return products.length;
}