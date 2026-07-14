import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";

export async function getDashboardAnalytics() {
  const [
    inventorySnapshot,
    salesSnapshot,
    purchaseSnapshot
  ] = await Promise.all([
    getDocs(collection(db, "inventory")),
    getDocs(collection(db, "sales")),
    getDocs(collection(db, "purchases"))
  ]);

  const inventory = inventorySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  const sales = salesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  const purchases = purchaseSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  const lowStockProducts = inventory.filter(
    item => Number(item.quantity || 0) <= Number(item.reorderLevel || 10)
  );

  const outOfStockProducts = inventory.filter(
    item => Number(item.quantity || 0) === 0
  );

  const inventoryValue = inventory.reduce(
    (sum, item) => sum + Number(item.inventoryValue || 0),
    0
  );

  return {
    inventory,
    sales,
    purchases,
    inventoryValue,
    lowStockProducts,
    outOfStockProducts
  };
}