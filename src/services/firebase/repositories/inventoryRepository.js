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

const COLLECTION = "inventory";

export async function getInventory() {

  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}

export async function getInventoryItem(productId) {

  const ref = doc(
    db,
    COLLECTION,
    productId
  );

  const snapshot = await getDoc(ref);

  if (!snapshot.exists())
    return null;

  return {
    id: snapshot.id,
    ...snapshot.data()
  };

}

export async function saveInventory(item) {

  const ref = doc(
    db,
    COLLECTION,
    item.productId
  );

  await setDoc(ref, item);

  return item;

}

export async function updateInventory(item) {

  const ref = doc(
    db,
    COLLECTION,
    item.productId
  );

  await updateDoc(ref, item);

  return item;

}

export async function addLedger(entry) {

  await addDoc(
    collection(
      db,
      "stockLedger"
    ),
    {
      ...entry,
      createdAt: new Date()
    }
  );

}