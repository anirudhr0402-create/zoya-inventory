import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import SaleForm from "../components/SaleForm";

import useSales from "../hooks/useSales";

import useProducts from "../../products/hooks/useProducts";

import { decreaseStock } from "../../inventory/utils/updateStock";

export default function SalesPage() {

  const { mutateAsync: saveSale } =
    useSales();

  const {
    data: products = []
  } = useProducts();

  const [saving, setSaving] =
    useState(false);

  async function handleSubmit(data) {

    try {

      setSaving(true);

      for (const item of data.items) {

        const product =
          products.find(
            p => p.id === item.productId
          );

        if (!product) {

          toast.error("Product not found.");

          return;

        }

        await decreaseStock({

          product,

          quantity: Number(
            item.quantity
          )

        });

      }

      await saveSale(data);

      toast.success(
        "Sale saved successfully."
      );

    } catch (error) {

      toast.error(
        error.message ||
        "Unable to save sale."
      );

    } finally {

      setSaving(false);

    }

  }

  return (

    <>

      <PageHeader

        title="Sales Entry"

        subtitle="Create customer sales invoice"

      />

      <SaleForm

        loading={saving}

        onSubmit={handleSubmit}

        onCancel={() =>
          history.back()
        }

      />

    </>

  );

}