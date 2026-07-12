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

  const {
    search,
    setSearch,
    filteredInventory
  } = useInventorySearch(data);

  const {
    sortedInventory
  } = useInventorySort(filteredInventory);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(sortedInventory, 5);

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