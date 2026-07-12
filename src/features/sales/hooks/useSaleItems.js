import { useState } from "react";

export default function useSaleItems() {
  const [items, setItems] = useState([
    {
      productId: "",
      quantity: 1,
      sellingPrice: 0,
      gst: 18
    }
  ]);

  function addItem() {
    setItems(prev => [
      ...prev,
      {
        productId: "",
        quantity: 1,
        sellingPrice: 0,
        gst: 18
      }
    ]);
  }

  function removeItem(index) {
    setItems(prev =>
      prev.filter((_, i) => i !== index)
    );
  }

  function updateItem(index, field, value) {
    setItems(prev =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value
            }
          : item
      )
    );
  }

  return {
    items,
    addItem,
    removeItem,
    updateItem
  };
}