import { useMemo, useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import useSuppliers from "../hooks/useSuppliers";
import usePagination from "../../products/hooks/usePagination";

import SupplierStats from "../components/SupplierStats";
import SupplierToolbar from "../components/SupplierToolbar";
import SupplierTable from "../components/SupplierTable";
import SupplierModal from "../components/SupplierModal";
import SupplierDetailsDrawer from "../components/SupplierDetailsDrawer";
import DeleteSupplierDialog from "../components/DeleteSupplierDialog";
import Pagination from "../../products/components/Pagination";

export default function SuppliersPage() {

  const {
    data = [],
    isLoading,
    addSupplier,
    updateSupplier,
    deleteSupplier
  } = useSuppliers();

  const [search, setSearch] = useState("");

  const [editingSupplier, setEditingSupplier] =
    useState(null);

  const [viewSupplier, setViewSupplier] =
    useState(null);

  const [selectedSupplier, setSelectedSupplier] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [showDrawer, setShowDrawer] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const filteredSuppliers = useMemo(() => {

  return [...data]

    .sort((a, b) =>
      a.name.localeCompare(b.name)
    )

    .filter((supplier) => {

      const keyword = search.toLowerCase();

      return (

        supplier.name
          ?.toLowerCase()
          .includes(keyword)

        ||

        supplier.contactPerson
          ?.toLowerCase()
          .includes(keyword)

        ||

        supplier.phone
          ?.includes(keyword)

        ||

        supplier.gstNumber
          ?.toLowerCase()
          .includes(keyword)

      );

    });

}, [data, search]);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(filteredSuppliers, 10);

  async function handleCreate(values) {

    try {

      await addSupplier(values);

      toast.success("Supplier added successfully.");

      setShowModal(false);

    } catch {

      toast.error("Unable to add supplier.");

    }

  }

  async function handleUpdate(values) {

    try {

      await updateSupplier({
        ...editingSupplier,
        ...values
      });

      toast.success("Supplier updated successfully.");

      setEditingSupplier(null);

      setShowModal(false);

    } catch {

      toast.error("Unable to update supplier.");

    }

  }

  async function handleDelete() {

    try {

      await deleteSupplier(selectedSupplier.id);

      toast.success("Supplier deleted.");

      setSelectedSupplier(null);

      setShowDelete(false);

    } catch {

      toast.error("Unable to delete supplier.");

    }

  }

  if (isLoading) {

    return (
      <div className="p-6">
        Loading Suppliers...
      </div>
    );

  }

  return (
    <>

      <PageHeader
    title="Supplier Management"
    subtitle="Manage vendors supplying products to AIMS."
/>
      <SupplierStats
        suppliers={data}
      />

      <SupplierToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {

          setEditingSupplier(null);

          setShowModal(true);

        }}
      />

      <SupplierTable
        suppliers={paginatedData}
        onView={(supplier) => {

          setViewSupplier(supplier);

          setShowDrawer(true);

        }}
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
            : "+ New Supplier"
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

      <SupplierDetailsDrawer
        open={showDrawer}
        supplier={viewSupplier}
        onClose={() => {

          setViewSupplier(null);

          setShowDrawer(false);

        }}
      />

      <DeleteSupplierDialog
        open={showDelete}
        supplier={selectedSupplier}
        onConfirm={handleDelete}
        onCancel={() => {

          setSelectedSupplier(null);

          setShowDelete(false);

        }}
      />

    </>
  );

} 