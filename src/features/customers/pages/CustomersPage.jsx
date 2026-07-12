import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";

import useCustomers from "../hooks/useCustomers";
import useCustomerSearch from "../hooks/useCustomerSearch";
import useCustomerSort from "../hooks/useCustomerSort";

import usePagination from "../../products/hooks/usePagination";
import Pagination from "../../products/components/Pagination";

import CustomerStats from "../components/CustomerStats";
import CustomerToolbar from "../components/CustomerToolbar";
import CustomerTable from "../components/CustomerTable";
import CustomerModal from "../components/CustomerModal";

export default function CustomersPage() {
  const {
    data = [],
    isLoading,
    addCustomer,
    updateCustomer,
    deleteCustomer
  } = useCustomers();

  const {
    search,
    setSearch,
    filteredCustomers
  } = useCustomerSearch(data);

  const {
    sortedCustomers,
    sortField,
    sortDirection,
    changeSort
  } = useCustomerSort(filteredCustomers);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(sortedCustomers, 5);

  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  async function handleCreate(values) {
    await addCustomer(values);

    toast.success("Customer created successfully.");

    setShowModal(false);
  }

  async function handleUpdate(values) {
    await updateCustomer({
      ...editingCustomer,
      ...values
    });

    toast.success("Customer updated successfully.");

    setEditingCustomer(null);
    setShowModal(false);
  }

  async function handleDelete() {
    await deleteCustomer(selectedCustomer.id);

    toast.success("Customer deleted successfully.");

    setSelectedCustomer(null);
    setShowDelete(false);
  }

  if (isLoading) {
    return <div className="p-6">Loading customers...</div>;
  }

  return (
    <>
      <PageHeader
        title="Customers"
        subtitle="Manage customers"
      />

      <CustomerStats customers={data} />

      <CustomerToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditingCustomer(null);
          setShowModal(true);
        }}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={changeSort}
      />

      <CustomerTable
        customers={paginatedData}
        onEdit={(customer) => {
          setEditingCustomer(customer);
          setShowModal(true);
        }}
        onDelete={(customer) => {
          setSelectedCustomer(customer);
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

      <CustomerModal
        open={showModal}
        title={
          editingCustomer
            ? "Edit Customer"
            : "Add Customer"
        }
        initialValues={editingCustomer}
        onSubmit={
          editingCustomer
            ? handleUpdate
            : handleCreate
        }
        onClose={() => {
          setEditingCustomer(null);
          setShowModal(false);
        }}
      />

      <ConfirmDialog
        open={showDelete}
        title="Delete Customer"
        message={`Delete "${selectedCustomer?.name}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setSelectedCustomer(null);
          setShowDelete(false);
        }}
      />
    </>
  );
}