import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const COLLECTION = "customers";

export async function getCustomers() {

  const snapshot = await getDocs(
    collection(db, COLLECTION)
  );

  return snapshot.docs.map(item => ({
    id: item.id,
    ...item.data()
  }));

}

export async function createCustomer(customer) {

  const ref = await addDoc(
    collection(db, COLLECTION),
    {
      ...customer,
      createdAt: new Date()
    }
  );

  return {
    id: ref.id,
    ...customer
  };

}

export async function editCustomer(customer) {

  const { id, ...data } = customer;

  await updateDoc(
    doc(db, COLLECTION, id),
    data
  );

  return customer;

}

export async function removeCustomer(id) {

  await deleteDoc(
    doc(db, COLLECTION, id)
  );

  return true;

}