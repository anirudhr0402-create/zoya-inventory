import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const COLLECTION = "suppliers";

export async function getSuppliers() {

  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map(item => ({
    id: item.id,
    ...item.data()
  }));

}

export async function createSupplier(data) {

  const ref = await addDoc(
    collection(db, COLLECTION),
    {
      ...data,
      createdAt: new Date()
    }
  );

  return {
    id: ref.id,
    ...data
  };

}

export async function editSupplier(supplier) {

  const { id, ...data } = supplier;

  await updateDoc(
    doc(db, COLLECTION, id),
    data
  );

  return supplier;

}

export async function removeSupplier(id) {

  await deleteDoc(
    doc(db, COLLECTION, id)
  );

  return true;

}