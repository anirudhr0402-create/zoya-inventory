import { useState } from "react";
import { toast } from "sonner";
import {
  Users,
  Sparkles,
  Plus
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";
import Modal from "../../../components/ui/Modal";

import useCustomers from "../hooks/useCustomers";
import useCustomerSearch from "../hooks/useCustomerSearch";
import usePagination from "../../products/hooks/usePagination";

import CustomerToolbar from "../components/CustomerToolbar";
import CustomerTable from "../components/CustomerTable";
import CustomerForm from "../components/CustomerForm";
import CustomerDetailsDrawer from "../components/CustomerDetailsDrawer";
import DeleteCustomerDialog from "../components/DeleteCustomerDialog";
import Pagination from "../../products/components/Pagination";

export default function CustomersPage() {

  const {
    data: customers = [],
    addCustomer,
    updateCustomer,
    deleteCustomer,
    isLoading
  } = useCustomers();

  const {
    search,
    setSearch,
    filteredCustomers
  } = useCustomerSearch(customers);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(filteredCustomers, 10);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  async function save(values) {

    try {

      if (editing) {

        await updateCustomer({
          ...editing,
          ...values
        });

        toast.success("Customer updated successfully.");

      } else {

        await addCustomer(values);

        toast.success("Customer created successfully.");

      }

      setEditing(null);
      setShowModal(false);

    } catch {

      toast.error("Unable to save customer.");

    }

  }

  async function remove() {

    try {

      await deleteCustomer(deleting.id);

      toast.success("Customer deleted successfully.");

      setDeleting(null);

    } catch {

      toast.error("Unable to delete customer.");

    }

  }

  if (isLoading) {

    return (
      <div className="space-y-8">

        <PageHeader
          title="Customers"
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
        title="Customers"
        subtitle="Manage customer master."
      />

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Users size={32} />

              <h2 className="text-3xl font-bold">
                Customer Management
              </h2>

              <Sparkles size={20} />

            </div>

            <p className="mt-3 text-indigo-100">
              Manage customers, contact information and sales history.
            </p>

          </div>

          <button
            onClick={()=>{
              setEditing(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-1"
          >

            <Plus size={20} />

            Add Customer

          </button>

        </div>

      </div>

      <CustomerToolbar
        search={search}
        onSearch={setSearch}
        onAdd={()=>{
          setEditing(null);
          setShowModal(true);
        }}
      />

      <CustomerTable
        customers={paginatedData}
        onView={setViewing}
        onEdit={(customer)=>{
          setEditing(customer);
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

        <CustomerForm
          initialValues={editing}
          onSubmit={save}
          onCancel={()=>{
            setEditing(null);
            setShowModal(false);
          }}
        />

      </Modal>

      <CustomerDetailsDrawer
        open={!!viewing}
        customer={viewing}
        onClose={()=>setViewing(null)}
      />

      <DeleteCustomerDialog
        open={!!deleting}
        customer={deleting}
        onCancel={()=>setDeleting(null)}
        onConfirm={remove}
      />

    </div>

  );

}