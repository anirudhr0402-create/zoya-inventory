import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const INVENTORY = "inventory";
const LEDGER = "stockLedger";

export async function getInventory() {
  const snapshot = await getDocs(
    collection(db, INVENTORY)
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    quantity: Number(doc.data().quantity || 0),
    averageCost: Number(doc.data().averageCost || 0),
    reorderLevel: Number(doc.data().reorderLevel || 10)
  }));
}

export async function getInventoryItem(productId) {
  const ref = doc(db, INVENTORY, productId);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
    quantity: Number(snapshot.data().quantity || 0),
    averageCost: Number(snapshot.data().averageCost || 0),
    reorderLevel: Number(snapshot.data().reorderLevel || 10)
  };
}

export async function saveInventory(item) {
  const inventory = {
    productId: item.productId,
    productCode: item.productCode || "",
    productName: item.productName || "",
    category: item.category || "",
    supplier: item.supplier || "",
    quantity: Number(item.quantity || 0),
    averageCost: Number(item.averageCost || 0),
    reorderLevel: Number(item.reorderLevel || 10),
    inventoryValue:
      Number(item.quantity || 0) *
      Number(item.averageCost || 0),
    lastPurchaseDate:
      item.lastPurchaseDate || null,
    lastSaleDate:
      item.lastSaleDate || null,
    updatedAt: new Date()
  };

  await setDoc(
    doc(db, INVENTORY, item.productId),
    inventory
  );

  return inventory;
}

export async function updateInventory(item) {
  const inventory = {
    ...item,
    quantity: Number(item.quantity || 0),
    averageCost: Number(item.averageCost || 0),
    reorderLevel: Number(item.reorderLevel || 10),
    inventoryValue:
      Number(item.quantity || 0) *
      Number(item.averageCost || 0),
    updatedAt: new Date()
  };

  await updateDoc(
    doc(db, INVENTORY, item.productId),
    inventory
  );

  return inventory;
}

export async function addLedger(entry) {
  await addDoc(
    collection(db, LEDGER),
    {
      ...entry,
      quantity: Number(entry.quantity || 0),
      createdAt: new Date()
    }
  );
}