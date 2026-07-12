import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";

import usePurchases from "../hooks/usePurchases";
import usePurchaseSearch from "../hooks/usePurchaseSearch";
import usePurchaseSort from "../hooks/usePurchaseSort";

import PurchaseStats from "../components/PurchaseStats";
import PurchaseToolbar from "../components/PurchaseToolbar";
import PurchaseTable from "../components/PurchaseTable";
import PurchaseModal from "../components/PurchaseModal";

import usePagination from "../../products/hooks/usePagination";
import Pagination from "../../products/components/Pagination";

export default function PurchasesPage() {
  const {
    data = [],
    isLoading,
    addPurchase,
    updatePurchase,
    deletePurchase
  } = usePurchases();

  const {
    search,
    setSearch,
    filteredPurchases
  } = usePurchaseSearch(data);

  const {
    sortedPurchases,
    sortField,
    sortDirection,
    changeSort
  } = usePurchaseSort(filteredPurchases);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(sortedPurchases, 5);

  const [editingPurchase, setEditingPurchase] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  async function handleCreate(values) {
    await addPurchase(values);
    toast.success("Purchase created.");
    setShowModal(false);
  }

  async function handleUpdate(values) {
    await updatePurchase({
      ...editingPurchase,
      ...values
    });

    toast.success("Purchase updated.");
    setEditingPurchase(null);
    setShowModal(false);
  }

  async function handleDelete() {
    await deletePurchase(selectedPurchase.id);

    toast.success("Purchase deleted.");

    setSelectedPurchase(null);
    setShowDelete(false);
  }

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <>
      <PageHeader
        title="Purchases"
        subtitle="Manage purchases"
      />

      <PurchaseStats purchases={data} />

      <PurchaseToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditingPurchase(null);
          setShowModal(true);
        }}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={changeSort}
      />

      <PurchaseTable
        purchases={paginatedData}
        onEdit={(purchase) => {
          setEditingPurchase(purchase);
          setShowModal(true);
        }}
        onDelete={(purchase) => {
          setSelectedPurchase(purchase);
          setShowDelete(true);
        }}
      />

      <Pagination
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
        setPage={setPage}
        setPageSize={setPageSize}
      />

      <PurchaseModal
        open={showModal}
        title={
          editingPurchase
            ? "Edit Purchase"
            : "Add Purchase"
        }
        initialValues={editingPurchase}
        onSubmit={
          editingPurchase
            ? handleUpdate
            : handleCreate
        }
        onClose={() => {
          setEditingPurchase(null);
          setShowModal(false);
        }}
      />

      <ConfirmDialog
        open={showDelete}
        title="Delete Purchase"
        message={`Delete "${selectedPurchase?.invoiceNo}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setSelectedPurchase(null);
          setShowDelete(false);
        }}
      />
    </>
  );
}