import {
  collection,
  getCountFromServer,
  getDocs
} from "firebase/firestore";

import { db } from "../../../services/firebase/firebaseConfig";

export async function getDashboardData() {

  const [
    products,
    categories,
    suppliers,
    customers,
    inventory,
    purchases,
    sales
  ] = await Promise.all([

    getCountFromServer(collection(db, "products")),

    getCountFromServer(collection(db, "categories")),

    getCountFromServer(collection(db, "suppliers")),

    getCountFromServer(collection(db, "customers")),

    getDocs(collection(db, "inventory")),

    getDocs(collection(db, "purchases")),

    getDocs(collection(db, "sales"))

  ]);

  let inventoryValue = 0;

  inventory.forEach(doc => {

    inventoryValue += Number(
      doc.data().inventoryValue || 0
    );

  });

  let purchaseValue = 0;

  purchases.forEach(doc => {

    purchaseValue += Number(
      doc.data().grandTotal || 0
    );

  });

  let salesValue = 0;

  sales.forEach(doc => {

    salesValue += Number(
      doc.data().grandTotal || 0
    );

  });

  return {

    totalProducts: products.data().count,

    totalCategories: categories.data().count,

    totalSuppliers: suppliers.data().count,

    totalCustomers: customers.data().count,

    totalPurchases: purchases.size,

    totalSales: sales.size,

    inventoryValue,

    purchaseValue,

    salesValue,

    estimatedProfit:
      salesValue - purchaseValue

  };

}