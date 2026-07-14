import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import useInventory from "../hooks/useInventory";
import useInventorySearch from "../hooks/useInventorySearch";
import useInventorySort from "../hooks/useInventorySort";

import InventoryStats from "../components/InventoryStats";
import InventoryToolbar from "../components/InventoryToolbar";
import InventoryTable from "../components/InventoryTable";
import InventoryModal from "../components/InventoryModal";

import usePagination from "../../products/hooks/usePagination";
import Pagination from "../../products/components/Pagination";

export default function InventoryPage() {
  const {
    data = [],
    isLoading,
    updateInventory
  } = useInventory();

const inventorySearch =
  useInventorySearch(data);

const search =
  inventorySearch?.search ?? "";

const setSearch =
  inventorySearch?.setSearch ??
  (() => {});

const filteredInventory =
  inventorySearch?.filteredInventory ??
  [];

const inventorySort =
  useInventorySort(
    filteredInventory
  );

const sortedInventory =
  inventorySort?.sortedInventory ??
  [];

  const pagination =
  usePagination(
    sortedInventory,
    5
  );

const page =
  pagination?.page ?? 1;

const pageSize =
  pagination?.pageSize ?? 5;

const totalPages =
  pagination?.totalPages ?? 1;

const paginatedData =
  pagination?.paginatedData ?? [];

const nextPage =
  pagination?.nextPage ??
  (() => {});

const previousPage =
  pagination?.previousPage ??
  (() => {});

const setPage =
  pagination?.setPage ??
  (() => {});

const setPageSize =
  pagination?.setPageSize ??
  (() => {});

  const [editingItem, setEditingItem] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  async function handleUpdate(item) {
    await updateInventory(item);

    toast.success("Inventory updated.");

    setShowModal(false);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader
        title="Inventory"
        subtitle="Manage stock"
      />

      <InventoryStats inventory={data} />

      <InventoryToolbar
        search={search}
        onSearch={setSearch}
      />

      <InventoryTable
        inventory={paginatedData}
        onEdit={(item) => {
          setEditingItem(item);
          setShowModal(true);
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

      <InventoryModal
        open={showModal}
        item={editingItem}
        onSubmit={handleUpdate}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}