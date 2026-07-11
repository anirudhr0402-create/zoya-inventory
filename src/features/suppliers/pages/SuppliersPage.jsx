import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";

import useSuppliers from "../hooks/useSuppliers";
import useSupplierSearch from "../hooks/useSupplierSearch";
import useSupplierSort from "../hooks/useSupplierSort";

import usePagination from "../../products/hooks/usePagination";
import Pagination from "../../products/components/Pagination";

import SupplierStats from "../components/SupplierStats";
import SupplierToolbar from "../components/SupplierToolbar";
import SupplierTable from "../components/SupplierTable";
import SupplierModal from "../components/SupplierModal";

export default function SuppliersPage() {
  const {
    data = [],
    isLoading,
    addSupplier,
    updateSupplier,
    deleteSupplier
  } = useSuppliers();

  const {
    search,
    setSearch,
    filteredSuppliers
  } = useSupplierSearch(data);

  const {
    sortedSuppliers,
    sortField,
    sortDirection,
    changeSort
  } = useSupplierSort(filteredSuppliers);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(sortedSuppliers, 5);

  const [editingSupplier, setEditingSupplier] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  async function handleCreate(values) {
    await addSupplier(values);

    toast.success("Supplier created successfully.");

    setShowModal(false);
  }

  async function handleUpdate(values) {
    await updateSupplier({
      ...editingSupplier,
      ...values
    });

    toast.success("Supplier updated successfully.");

    setEditingSupplier(null);
    setShowModal(false);
  }

  async function handleDelete() {
    await deleteSupplier(selectedSupplier.id);

    toast.success("Supplier deleted successfully.");

    setSelectedSupplier(null);
    setShowDelete(false);
  }

  if (isLoading) {
    return (
      <div className="p-6">
        Loading suppliers...
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Suppliers"
        subtitle="Manage suppliers"
      />

      <SupplierStats suppliers={data} />

      <SupplierToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditingSupplier(null);
          setShowModal(true);
        }}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={changeSort}
      />

      <SupplierTable
        suppliers={paginatedData}
        onEdit={(supplier) => {
          setEditingSupplier(supplier);
          setShowModal(true);
        }}
        onDelete={(supplier) => {
          setSelectedSupplier(supplier);
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

      <SupplierModal
        open={showModal}
        title={
          editingSupplier
            ? "Edit Supplier"
            : "Add Supplier"
        }
        initialValues={editingSupplier}
        onSubmit={
          editingSupplier
            ? handleUpdate
            : handleCreate
        }
        onClose={() => {
          setEditingSupplier(null);
          setShowModal(false);
        }}
      />

      <ConfirmDialog
        open={showDelete}
        title="Delete Supplier"
        message={`Delete "${selectedSupplier?.name}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setSelectedSupplier(null);
          setShowDelete(false);
        }}
      />
    </>
  );
}