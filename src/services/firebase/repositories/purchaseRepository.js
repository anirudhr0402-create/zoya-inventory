import {
  addDoc,
  collection,
  Timestamp
} from "firebase/firestore";

import { db } from "../firebaseConfig";

const PURCHASE_COLLECTION = "purchases";
const ITEM_COLLECTION = "purchaseItems";

export async function createPurchase(data) {

  const purchaseRef = await addDoc(
    collection(db, PURCHASE_COLLECTION),
    {
      supplierId: data.supplierId,
      invoiceNumber: data.invoiceNumber,
      invoiceDate: data.invoiceDate,
      subtotal: data.subtotal,
      discount: data.discount,
      transportCharges: data.transportCharges,
      gst: data.gst,
      grandTotal: data.grandTotal,
      remarks: data.remarks,
      createdAt: Timestamp.now()
    }
  );

  await Promise.all(

    data.items.map(item =>
      addDoc(
        collection(db, ITEM_COLLECTION),
        {
          purchaseId: purchaseRef.id,
          ...item,
          createdAt: Timestamp.now()
        }
      )
    )

  );

  return purchaseRef.id;

}