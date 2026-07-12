import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import useCategories from "../hooks/useCategories";

import CategoryToolbar from "../components/CategoryToolbar";
import CategoryStats from "../components/CategoryStats";
import CategoryTable from "../components/CategoryTable";
import CategoryModal from "../components/CategoryModal";
import DeleteCategoryDialog from "../components/DeleteCategoryDialog";

export default function CategoriesPage() {

  const {
    data = [],
    isLoading,
    addCategory,
    updateCategory,
    deleteCategory
  } = useCategories();

  const [search, setSearch] =
    useState("");

  const [editing, setEditing] =
    useState(null);

  const [selected, setSelected] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const filtered = data.filter(category =>
    category.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  async function handleCreate(values) {

    await addCategory(values);

    toast.success(
      "Category Added"
    );

    setShowModal(false);
  }

  async function handleUpdate(values) {

    await updateCategory({
      ...editing,
      ...values
    });

    toast.success(
      "Category Updated"
    );

    setEditing(null);

    setShowModal(false);
  }

  async function handleDelete() {

    await deleteCategory(selected.id);

    toast.success(
      "Category Deleted"
    );

    setSelected(null);

    setShowDelete(false);
  }

  if (isLoading)
    return (
      <div className="p-6">
        Loading...
      </div>
    );

  return (
    <>

      <PageHeader
        title="Categories"
        subtitle="Manage Product Categories"
      />

      <CategoryStats
        categories={data}
      />

      <CategoryToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditing(null);
          setShowModal(true);
        }}
      />

      <CategoryTable
        categories={filtered}
        onEdit={(category) => {
          setEditing(category);
          setShowModal(true);
        }}
        onDelete={(category) => {
          setSelected(category);
          setShowDelete(true);
        }}
      />

      <CategoryModal
        open={showModal}
        title={
          editing
            ? "Edit Category"
            : "Add Category"
        }
        initialValues={editing}
        onSubmit={
          editing
            ? handleUpdate
            : handleCreate
        }
        onClose={() => {
          setEditing(null);
          setShowModal(false);
        }}
      />

      <DeleteCategoryDialog
        open={showDelete}
        category={selected}
        onConfirm={handleDelete}
        onCancel={() => {
          setSelected(null);
          setShowDelete(false);
        }}
      />

    </>
  );
}