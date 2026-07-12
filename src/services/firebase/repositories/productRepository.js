import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const COLLECTION = "products";

export async function getProducts() {
  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}

export async function createProduct(product) {
  const docRef = await addDoc(
    collection(db, COLLECTION),
    {
      ...product,
      createdAt: new Date()
    }
  );

  return {
    id: docRef.id,
    ...product
  };
}

export async function editProduct(id, product) {
  await updateDoc(
    doc(db, COLLECTION, id),
    product
  );

  return {
    id,
    ...product
  };
}

export async function removeProduct(id) {
  await deleteDoc(
    doc(db, COLLECTION, id)
  );

  return id;
}