import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import PurchaseForm from "./PurchaseForm";

import usePurchases from "../hooks/usePurchases";

import { increaseStock } from "../../inventory/utils/updateStock";

import useProducts from "../../products/hooks/useProducts";

export default function PurchasePage() {

  const { mutateAsync: savePurchase } =
    usePurchases();

  const {
    data: products = []
  } = useProducts();

  const [saving, setSaving] =
    useState(false);

  async function handleSubmit(data) {

    try {

      setSaving(true);

      await savePurchase(data);

      for (const item of data.items) {

        const product =
          products.find(
            p => p.id === item.productId
          );

        if (!product) continue;

        await increaseStock({

          product,

          quantity: Number(
            item.quantity
          ),

          price: Number(
            item.purchasePrice
          )

        });

      }

      toast.success(
        "Purchase saved successfully."
      );

    } catch (error) {

      toast.error(
        error.message ||
        "Unable to save purchase."
      );

    } finally {

      setSaving(false);

    }

  }

  return (

    <>

      <PageHeader

        title="Purchase Entry"

        subtitle="Record supplier purchases"

      />

      <PurchaseForm

        loading={saving}

        onSubmit={handleSubmit}

        onCancel={() =>
          history.back()
        }

      />

    </>

  );

}