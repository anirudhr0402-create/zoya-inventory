import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import useSales from "../hooks/useSales";
import useSaleSearch from "../hooks/useSaleSearch";
import useSaleSort from "../hooks/useSaleSort";

import usePagination from "../../products/hooks/usePagination";

import SalesStats from "../components/SalesStats";
import SalesToolbar from "../components/SalesToolbar";
import SalesTable from "../components/SalesTable";
import SaleModal from "../components/SaleModal";
import DeleteSaleDialog from "../components/DeleteSaleDialog";
import SaleDetailsDrawer from "../components/SaleDetailsDrawer";
import Pagination from "../../products/components/Pagination";

export default function SalesPage() {
  const {
    data = [],
    isLoading,
    createSale,
    updateSale,
    deleteSale
  } = useSales();

  const {
    search,
    setSearch,
    filteredSales
  } = useSaleSearch(data);

  const {
    sortedSales
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
  } = usePagination(
    sortedSales,
    10
  );

  const [showModal, setShowModal] =
    useState(false);

  const [editingSale, setEditingSale] =
    useState(null);

  const [showDelete, setShowDelete] =
    useState(false);

  const [selectedSale, setSelectedSale] =
    useState(null);

  const [showDetails, setShowDetails] =
    useState(false);

  async function handleSubmit(
    values
  ) {
    if (editingSale) {
      await updateSale(
        editingSale.id,
        values
      );

      toast.success(
        "Sale updated successfully."
      );
    } else {
      await createSale(values);

      toast.success(
        "Sale created successfully."
      );
    }

    setEditingSale(null);
    setShowModal(false);
  }

  async function handleDelete() {
    await deleteSale(
      selectedSale.id
    );

    toast.success(
      "Sale deleted successfully."
    );

    setShowDelete(false);
    setSelectedSale(null);
  }

  if (isLoading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Sales"
        subtitle="Manage customer sales"
      />

      <SalesStats
        sales={data}
      />

      <SalesToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditingSale(null);
          setShowModal(true);
        }}
      />

      <SalesTable
        sales={paginatedData}
        onView={sale => {
          setSelectedSale(sale);
          setShowDetails(true);
        }}
        onEdit={sale => {
          setEditingSale(sale);
          setShowModal(true);
        }}
        onDelete={sale => {
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
        initialValues={editingSale}
        onClose={() => {
          setEditingSale(null);
          setShowModal(false);
        }}
        onSubmit={handleSubmit}
      />

      <DeleteSaleDialog
        open={showDelete}
        sale={selectedSale}
        onCancel={() => {
          setShowDelete(false);
          setSelectedSale(null);
        }}
        onConfirm={handleDelete}
      />

      <SaleDetailsDrawer
        open={showDetails}
        sale={selectedSale}
        onClose={() =>
          setShowDetails(false)
        }
      />
    </>
  );
}