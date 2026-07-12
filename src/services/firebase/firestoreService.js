import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "./firebaseConfig";

export async function getAll(collectionName) {
  const snapshot = await getDocs(
    collection(db, collectionName)
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function create(
  collectionName,
  data
) {
  const ref = await addDoc(
    collection(db, collectionName),
    data
  );

  return ref.id;
}

export async function update(
  collectionName,
  id,
  data
) {
  await updateDoc(
    doc(db, collectionName, id),
    data
  );
}

export async function remove(
  collectionName,
  id
) {
  await deleteDoc(
    doc(db, collectionName, id)
  );
}