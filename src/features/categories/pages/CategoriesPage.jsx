import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";

import useCategories from "../hooks/useCategories";
import useCategorySearch from "../hooks/useCategorySearch";

import CategoryStats from "../components/CategoryStats";
import CategoryToolbar from "../components/CategoryToolbar";
import CategoryTable from "../components/CategoryTable";
import CategoryModal from "../components/CategoryModal";
import useCategorySort from "../hooks/useCategorySort";
import usePagination from "../../products/hooks/usePagination";
import Pagination from "../../products/components/Pagination";

export default function CategoriesPage() {
  const {
    data = [],
    isLoading,
    addCategory,
    updateCategory,
    deleteCategory
  } = useCategories();

  const {
    search,
    setSearch,
    filteredCategories
  } = useCategorySearch(data);
  const {
  sortedCategories,
  sortField,
  sortDirection,
  changeSort
} = useCategorySort(filteredCategories);

const {
  page,
  pageSize,
  totalPages,
  paginatedData,
  nextPage,
  previousPage,
  setPage,
  setPageSize
} = usePagination(sortedCategories, 5);

  const [editingCategory, setEditingCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  async function handleCreate(category) {
    await addCategory(category);
    toast.success("Category created.");
    setShowModal(false);
  }

  async function handleUpdate(category) {
    await updateCategory({
      ...editingCategory,
      ...category
    });

    toast.success("Category updated.");

    setEditingCategory(null);
    setShowModal(false);
  }

  async function handleDelete() {
    await deleteCategory(selectedCategory.id);

    toast.success("Category deleted.");

    setSelectedCategory(null);
    setShowDelete(false);
  }

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <>
      <PageHeader
        title="Categories"
        subtitle="Manage product categories"
      />

      <CategoryStats categories={data} />

      <CategoryToolbar
  search={search}
  onSearch={setSearch}
  onAdd={() => {
    setEditingCategory(null);
    setShowModal(true);
  }}
  sortField={sortField}
  sortDirection={sortDirection}
  onSortChange={changeSort}
/>

      <CategoryTable
        categories={paginatedData}
        onEdit={(category) => {
          setEditingCategory(category);
          setShowModal(true);
        }}
        onDelete={(category) => {
          setSelectedCategory(category);
          setShowDelete(true);
        }}
      />

      <CategoryModal
        open={showModal}
        title={
          editingCategory
            ? "Edit Category"
            : "Add Category"
        }
        initialValues={editingCategory}
        onSubmit={
          editingCategory
            ? handleUpdate
            : handleCreate
        }
        onClose={() => {
          setEditingCategory(null);
          setShowModal(false);
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
      <ConfirmDialog
        open={showDelete}
        title="Delete Category"
        message={`Delete "${selectedCategory?.name}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setSelectedCategory(null);
          setShowDelete(false);
        }}
      />
    </>
  );
}