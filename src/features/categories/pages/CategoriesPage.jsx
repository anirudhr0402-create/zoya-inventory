import { useState } from "react";
import { toast } from "sonner";
import {
  FolderTree,
  Sparkles,
  Plus
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";
import Modal from "../../../components/ui/Modal";

import useCategories from "../hooks/useCategories";
import useCategorySearch from "../hooks/useCategorySearch";
import usePagination from "../../products/hooks/usePagination";

import CategoryToolbar from "../components/CategoryToolbar";
import CategoryTable from "../components/CategoryTable";
import CategoryForm from "../components/CategoryForm";
import CategoryDetailsDrawer from "../components/CategoryDetailsDrawer";
import DeleteCategoryDialog from "../components/DeleteCategoryDialog";
import Pagination from "../../products/components/Pagination";

export default function CategoriesPage() {

  const {
    data: categories = [],
    addCategory,
    updateCategory,
    deleteCategory,
    isLoading
  } = useCategories();

  const {
    search,
    setSearch,
    filteredCategories
  } = useCategorySearch(categories);

  const {
    page,
    pageSize,
    totalPages,
    paginatedData,
    nextPage,
    previousPage,
    setPage,
    setPageSize
  } = usePagination(
    filteredCategories,
    10
  );

  const [showModal, setShowModal] =
    useState(false);

  const [editing, setEditing] =
    useState(null);

  const [viewing, setViewing] =
    useState(null);

  const [deleting, setDeleting] =
    useState(null);

  async function save(values) {

    try {

      if (editing) {

        await updateCategory({
          ...editing,
          ...values
        });

        toast.success(
          "Category updated successfully."
        );

      } else {

        await addCategory(values);

        toast.success(
          "Category created successfully."
        );

      }

      setEditing(null);
      setShowModal(false);

    } catch {

      toast.error(
        "Unable to save category."
      );

    }

  }

  async function remove() {

    try {

      await deleteCategory(
        deleting.id
      );

      toast.success(
        "Category deleted successfully."
      );

      setDeleting(null);

    } catch {

      toast.error(
        "Unable to delete category."
      );

    }

  }

  if (isLoading) {

    return (

      <div className="space-y-8">

        <PageHeader
          title="Categories"
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
        title="Categories"
        subtitle="Organize your products professionally."
      />

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <FolderTree size={32}/>

              <h2 className="text-3xl font-bold">

                Category Master

              </h2>

              <Sparkles
                size={20}
              />

            </div>

            <p className="mt-3 text-indigo-100">

              Create and organize categories
              for your inventory.

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

            Add Category

          </button>

        </div>

      </div>

      <CategoryToolbar
        search={search}
        onSearch={setSearch}
        onAdd={()=>{
          setEditing(null);
          setShowModal(true);
        }}
      />

      <CategoryTable
        categories={paginatedData}
        onView={setViewing}
        onEdit={(category)=>{
          setEditing(category);
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

        <CategoryForm
          initialValues={editing}
          onSubmit={save}
          onCancel={()=>{
            setEditing(null);
            setShowModal(false);
          }}
        />

      </Modal>

      <CategoryDetailsDrawer
        open={!!viewing}
        category={viewing}
        onClose={()=>setViewing(null)}
      />

      <DeleteCategoryDialog
        open={!!deleting}
        category={deleting}
        onCancel={()=>setDeleting(null)}
        onConfirm={remove}
      />

    </div>

  );

}