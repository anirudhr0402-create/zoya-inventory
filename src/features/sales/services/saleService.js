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

import { db } from "../../../services/firebase/firebaseConfig";

const salesRef = collection(db, "sales");

export async function getSales() {
  const snapshot = await getDocs(
    query(
      salesRef,
      orderBy("createdAt", "desc")
    )
  );

  return snapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  }));
}

export async function createSale(sale) {
  const payload = {
    productId: sale.productId,
    productName: sale.productName,
    productCode: sale.productCode || "",
    category: sale.category || "",

    customer: sale.customer,

    quantity: Number(sale.quantity),
    unitPrice: Number(sale.unitPrice),

    saleDate: sale.saleDate,
    invoiceNumber: sale.invoiceNumber,
    remarks: sale.remarks || "",

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
  await updateDoc(
    doc(db, "sales", id),
    {
      productId: sale.productId,
      productName: sale.productName,
      productCode: sale.productCode || "",
      category: sale.category || "",

      customer: sale.customer,

      quantity: Number(sale.quantity),
      unitPrice: Number(sale.unitPrice),

      saleDate: sale.saleDate,
      invoiceNumber: sale.invoiceNumber,
      remarks: sale.remarks || "",

      updatedAt: serverTimestamp()
    }
  );
}

export async function deleteSale(id) {
  await deleteDoc(
    doc(db, "sales", id)
  );
}