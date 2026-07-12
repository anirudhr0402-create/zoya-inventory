import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

import { db } from "./firebaseConfig";

export async function testFirebase() {
  try {
    console.log("Testing Firestore...");

    const ref = await addDoc(
      collection(db, "test"),
      {
        message: "AIMS Connected",
        createdAt: new Date()
      }
    );

    console.log("Document Created:", ref.id);

    const snapshot = await getDocs(
      collection(db, "test")
    );

    console.log(
      "Documents:",
      snapshot.docs.length
    );
  } catch (error) {
    console.error(error);
  }
}