import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const COLLECTION = "categories";

export async function getCategories() {
  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map(item => ({
    id: item.id,
    ...item.data()
  }));
}

export async function createCategory(category) {
  const ref = await addDoc(
    collection(db, COLLECTION),
    {
      ...category,
      createdAt: new Date()
    }
  );

  return {
    id: ref.id,
    ...category
  };
}

export async function editCategory(
  id,
  category
) {
  await updateDoc(
    doc(db, COLLECTION, id),
    category
  );

  return {
    id,
    ...category
  };
}

export async function removeCategory(id) {
  await deleteDoc(
    doc(db, COLLECTION, id)
  );

  return id;
}