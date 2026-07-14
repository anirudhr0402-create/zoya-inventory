import { useState } from "react";
import { toast } from "sonner";
import {
  Truck,
  Sparkles,
  Plus
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";
import Modal from "../../../components/ui/Modal";

import useSuppliers from "../hooks/useSuppliers";
import useSupplierSearch from "../hooks/useSupplierSearch";
import usePagination from "../../products/hooks/usePagination";

import SupplierToolbar from "../components/SupplierToolbar";
import SupplierTable from "../components/SupplierTable";
import SupplierForm from "../components/SupplierForm";
import SupplierDetailsDrawer from "../components/SupplierDetailsDrawer";
import DeleteSupplierDialog from "../components/DeleteSupplierDialog";
import Pagination from "../../products/components/Pagination";

export default function SuppliersPage() {

  const {
    data: suppliers = [],
    addSupplier,
    updateSupplier,
    deleteSupplier,
    isLoading
  } = useSuppliers();

  const {
    search,
    setSearch,
    filteredSuppliers
  } = useSupplierSearch(suppliers);

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

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  async function save(values) {

    try {

      if (editing) {

        await updateSupplier({
          ...editing,
          ...values
        });

        toast.success(
          "Supplier updated successfully."
        );

      } else {

        await addSupplier(values);

        toast.success(
          "Supplier created successfully."
        );

      }

      setEditing(null);
      setShowModal(false);

    } catch {

      toast.error(
        "Unable to save supplier."
      );

    }

  }

  async function remove() {

    try {

      await deleteSupplier(
        deleting.id
      );

      toast.success(
        "Supplier deleted successfully."
      );

      setDeleting(null);

    } catch {

      toast.error(
        "Unable to delete supplier."
      );

    }

  }

  if (isLoading) {

    return (

      <div className="space-y-8">

        <PageHeader
          title="Suppliers"
          subtitle="Loading..."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[1,2,3,4].map(item=>(
            <div
              key={item}
              className="h-40 animate-pulse rounded-3xl bg-white shadow-sm"
            />
          ))}

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <PageHeader
        title="Suppliers"
        subtitle="Manage supplier master."
      />

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Truck size={32}/>

              <h2 className="text-3xl font-bold">
                Supplier Management
              </h2>

              <Sparkles size={20}/>

            </div>

            <p className="mt-3 text-indigo-100">
              Manage suppliers, contacts and business information.
            </p>

          </div>

          <button
            onClick={()=>{
              setEditing(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-1"
          >

            <Plus size={20}/>

            Add Supplier

          </button>

        </div>

      </div>

      <SupplierToolbar
        search={search}
        onSearch={setSearch}
        onAdd={()=>{
          setEditing(null);
          setShowModal(true);
        }}
      />

      <SupplierTable
        suppliers={paginatedData}
        onView={setViewing}
        onEdit={(supplier)=>{
          setEditing(supplier);
          setShowModal(true);
        }}
        onDelete={setDeleting}
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

      <Modal
        open={showModal}
        title=""
        onClose={()=>{
          setEditing(null);
          setShowModal(false);
        }}
      >

        <SupplierForm
          initialValues={editing}
          onSubmit={save}
          onCancel={()=>{
            setEditing(null);
            setShowModal(false);
          }}
        />

      </Modal>

      <SupplierDetailsDrawer
        open={!!viewing}
        supplier={viewing}
        onClose={()=>setViewing(null)}
      />

      <DeleteSupplierDialog
        open={!!deleting}
        supplier={deleting}
        onCancel={()=>setDeleting(null)}
        onConfirm={remove}
      />

    </div>

  );

}