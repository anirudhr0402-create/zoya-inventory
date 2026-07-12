import {
  addDoc,
  collection,
  Timestamp
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const SALES = "sales";
const SALE_ITEMS = "saleItems";

export async function createSale(data) {

  const saleRef = await addDoc(
    collection(db, SALES),
    {
      customerId: data.customerId,
      invoiceNumber: data.invoiceNumber,
      invoiceDate: data.invoiceDate,
      subtotal: data.subtotal,
      gst: data.gst,
      discount: data.discount,
      transportCharges: data.transportCharges,
      grandTotal: data.grandTotal,
      remarks: data.remarks,
      createdAt: Timestamp.now()
    }
  );

  await Promise.all(

    data.items.map(item =>
      addDoc(
        collection(db, SALE_ITEMS),
        {
          saleId: saleRef.id,
          ...item,
          createdAt: Timestamp.now()
        }
      )
    )

  );

  return saleRef.id;

}