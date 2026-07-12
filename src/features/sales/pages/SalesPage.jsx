import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";

import useSales from "../hooks/useSales";
import useSaleSearch from "../hooks/useSaleSearch";
import useSaleSort from "../hooks/useSaleSort";

import SaleStats from "../components/SaleStats";
import SaleTable from "../components/SaleTable";
import SaleModal from "../components/SaleModal";
import SaleToolbar from "../components/SaleToolbar";

import Pagination from "../../products/components/Pagination";
import usePagination from "../../products/hooks/usePagination";

export default function SalesPage() {
  const {
    data = [],
    isLoading,
    addSale,
    updateSale,
    deleteSale
  } = useSales();

  const {
    search,
    setSearch,
    filteredSales
  } = useSaleSearch(data);

  const {
    sortedSales,
    sortField,
    sortDirection,
    changeSort
  } = useSaleSort(filteredSales);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(sortedSales, 5);

  const [editingSale, setEditingSale] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedSale, setSelectedSale] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  async function handleCreate(values) {
    await addSale(values);
    toast.success("Sale created successfully.");
    setShowModal(false);
  }

  async function handleUpdate(values) {
    await updateSale({
      ...editingSale,
      ...values
    });

    toast.success("Sale updated successfully.");

    setEditingSale(null);
    setShowModal(false);
  }

  async function handleDelete() {
    await deleteSale(selectedSale.id);

    toast.success("Sale deleted successfully.");

    setSelectedSale(null);
    setShowDelete(false);
  }

  if (isLoading) {
    return <div className="p-6">Loading sales...</div>;
  }

  return (
    <>
      <PageHeader
        title="Sales"
        subtitle="Manage sales invoices"
      />

      <SaleStats sales={data} />

      <SaleToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditingSale(null);
          setShowModal(true);
        }}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={changeSort}
      />

      <SaleTable
        sales={paginatedData}
        onEdit={(sale) => {
          setEditingSale(sale);
          setShowModal(true);
        }}
        onDelete={(sale) => {
          setSelectedSale(sale);
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

      <SaleModal
        open={showModal}
        title={editingSale ? "Edit Sale" : "Add Sale"}
        initialValues={editingSale}
        onSubmit={editingSale ? handleUpdate : handleCreate}
        onClose={() => {
          setEditingSale(null);
          setShowModal(false);
        }}
      />

      <ConfirmDialog
        open={showDelete}
        title="Delete Sale"
        message={`Delete "${selectedSale?.invoiceNo}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setSelectedSale(null);
          setShowDelete(false);
        }}
      />
    </>
  );
}