import { useMemo, useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import DataTable from "../../../components/common/DataTable";
import SearchToolbar from "../../../components/common/SearchToolbar";
import ConfirmDeleteDialog from "../../../components/common/ConfirmDeleteDialog";
import Pagination from "../../products/components/Pagination";

import usePagination from "../../products/hooks/usePagination";
import useCustomers from "../hooks/useCustomers";

import { customerColumns } from "../constants/customerColumns";

import CustomerStats from "../components/CustomerStats";
import CustomerModal from "../components/CustomerModal";
import CustomerDetails from "../components/CustomerDetails";

export default function CustomersPage() {

  const {
    data = [],
    isLoading,
    addCustomer,
    updateCustomer,
    deleteCustomer
  } = useCustomers();

  const [search, setSearch] = useState("");

  const [editingCustomer, setEditingCustomer] =
    useState(null);

  const [selectedCustomer, setSelectedCustomer] =
    useState(null);

  const [viewCustomer, setViewCustomer] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const [showDetails, setShowDetails] =
    useState(false);

  const filteredCustomers = useMemo(() => {

    const keyword = search.toLowerCase();

    return [...data]
      .sort((a, b) =>
        a.name.localeCompare(b.name)
      )
      .filter(customer => {

        return (

          customer.name
            ?.toLowerCase()
            .includes(keyword)

          ||

          customer.phone
            ?.includes(keyword)

          ||

          customer.city
            ?.toLowerCase()
            .includes(keyword)

          ||

          customer.customerType
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

  } = usePagination(filteredCustomers, 10);

  async function handleCreate(values) {

    try {

      await addCustomer(values);

      toast.success(
        "Customer added successfully."
      );

      setShowModal(false);

    } catch {

      toast.error(
        "Unable to add customer."
      );

    }

  }

  async function handleUpdate(values) {

    try {

      await updateCustomer({
        ...editingCustomer,
        ...values
      });

      toast.success(
        "Customer updated successfully."
      );

      setEditingCustomer(null);

      setShowModal(false);

    } catch {

      toast.error(
        "Unable to update customer."
      );

    }

  }

  async function handleDelete() {

    try {

      await deleteCustomer(selectedCustomer.id);

      toast.success(
        "Customer deleted."
      );

      setSelectedCustomer(null);

      setShowDelete(false);

    } catch {

      toast.error(
        "Unable to delete customer."
      );

    }

  }

  if (isLoading) {

    return (
      <div className="p-6">
        Loading Customers...
      </div>
    );

  }

  return (
    <>

      <PageHeader
        title="Customer Management"
        subtitle="Manage retail and wholesale customers."
      />

      <CustomerStats
        customers={data}
      />

      <SearchToolbar
        search={search}
        onSearch={setSearch}
        buttonText="+ New Customer"
        onAdd={() => {

          setEditingCustomer(null);

          setShowModal(true);

        }}
      />

      <DataTable

        columns={customerColumns}

        data={paginatedData}

        actions={(customer) => (

          <>

            <button
              onClick={() => {

                setViewCustomer(customer);

                setShowDetails(true);

              }}
              className="rounded bg-slate-600 px-3 py-1 text-white"
            >
              View
            </button>

            <button
              onClick={() => {

                setEditingCustomer(customer);

                setShowModal(true);

              }}
              className="rounded bg-blue-600 px-3 py-1 text-white"
            >
              Edit
            </button>

            <button
              onClick={() => {

                setSelectedCustomer(customer);

                setShowDelete(true);

              }}
              className="rounded bg-red-600 px-3 py-1 text-white"
            >
              Delete
            </button>

          </>

        )}

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
            : "New Customer"
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

      <CustomerDetails

        open={showDetails}

        customer={viewCustomer}

        onClose={() => {

          setViewCustomer(null);

          setShowDetails(false);

        }}

      />

      <ConfirmDeleteDialog

        open={showDelete}

        title="Delete Customer"

        name={selectedCustomer?.name}

        onConfirm={handleDelete}

        onCancel={() => {

          setSelectedCustomer(null);

          setShowDelete(false);

        }}

      />

    </>
  );

}