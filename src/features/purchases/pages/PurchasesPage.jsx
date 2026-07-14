import { useState } from "react";
import { toast } from "sonner";
import {
  ShoppingCart,
  Sparkles,
  Plus
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";
import Modal from "../../../components/ui/Modal";

import usePurchases from "../hooks/usePurchases";
import usePurchaseSearch from "../hooks/usePurchaseSearch";
import usePagination from "../../products/hooks/usePagination";

import PurchaseToolbar from "../components/PurchaseToolbar";
import PurchaseTable from "../components/PurchaseTable";
import PurchaseForm from "../components/PurchaseForm";
import PurchaseDetailsDrawer from "../components/PurchaseDetailsDrawer";
import DeletePurchaseDialog from "../components/DeletePurchaseDialog";
import Pagination from "../../products/components/Pagination";

export default function PurchasesPage() {

  const {
    data: purchases = [],
    addPurchase,
    updatePurchase,
    deletePurchase,
    isLoading
  } = usePurchases();

  const {
    search,
    setSearch,
    filteredPurchases
  } = usePurchaseSearch(purchases);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(filteredPurchases, 10);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  async function save(values) {

    try {

      if (editing) {

        await updatePurchase({
          ...editing,
          ...values
        });

        toast.success("Purchase updated successfully.");

      } else {

        await addPurchase(values);

        toast.success("Purchase added successfully.");

      }

      setEditing(null);
      setShowModal(false);

    } catch {

      toast.error("Unable to save purchase.");

    }

  }

  async function remove() {

    try {

      await deletePurchase(deleting.id);

      toast.success("Purchase deleted successfully.");

      setDeleting(null);

    } catch {

      toast.error("Unable to delete purchase.");

    }

  }

  if (isLoading) {

    return (
      <div className="space-y-8">

        <PageHeader
          title="Purchases"
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
        title="Purchases"
        subtitle="Manage purchase entries."
      />

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <ShoppingCart size={32}/>

              <h2 className="text-3xl font-bold">
                Purchase Management
              </h2>

              <Sparkles size={20}/>

            </div>

            <p className="mt-3 text-indigo-100">
              Record purchases from suppliers and automatically update inventory.
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

            Add Purchase

          </button>

        </div>

      </div>

      <PurchaseToolbar
        search={search}
        onSearch={setSearch}
        onAdd={()=>{
          setEditing(null);
          setShowModal(true);
        }}
      />

      <PurchaseTable
        purchases={paginatedData}
        onView={setViewing}
        onEdit={(purchase)=>{
          setEditing(purchase);
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

        <PurchaseForm
          initialValues={editing}
          onSubmit={save}
          onCancel={()=>{
            setEditing(null);
            setShowModal(false);
          }}
        />

      </Modal>

      <PurchaseDetailsDrawer
        open={!!viewing}
        purchase={viewing}
        onClose={()=>setViewing(null)}
      />

      <DeletePurchaseDialog
        open={!!deleting}
        purchase={deleting}
        onCancel={()=>setDeleting(null)}
        onConfirm={remove}
      />

    </div>

  );

}