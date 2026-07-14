import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";

import { db } from "../../../services/firebase";

const salesRef = collection(db, "sales");

export async function getSales() {
  const q = query(
    salesRef,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(docItem => ({
    id: docItem.id,
    ...docItem.data()
  }));
}

export async function createSale(sale) {
  const payload = {
    ...sale,
    quantity: Number(sale.quantity),
    unitPrice: Number(sale.unitPrice),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  const document = await addDoc(
    salesRef,
    payload
  );

  return {
    id: document.id,
    ...payload
  };
}

export async function updateSale(
  id,
  sale
) {
  const reference = doc(
    db,
    "sales",
    id
  );

  await updateDoc(reference, {
    ...sale,
    quantity: Number(sale.quantity),
    unitPrice: Number(sale.unitPrice),
    updatedAt: serverTimestamp()
  });
}

export async function deleteSale(id) {
  await deleteDoc(
    doc(db, "sales", id)
  );
}