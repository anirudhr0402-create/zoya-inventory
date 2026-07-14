import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  PackagePlus,
  Sparkles
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";

import useProducts from "../hooks/useProducts";
import useProductSearch from "../hooks/useProductSearch";
import useProductSort from "../hooks/useProductSort";
import usePagination from "../hooks/usePagination";

import ProductToolbar from "../components/ProductToolbar";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";
import ProductDetailsDrawer from "../components/ProductDetailsDrawer";
import DeleteProductDialog from "../components/DeleteProductDialog";
import Pagination from "../components/Pagination";

import Modal from "../../../components/ui/Modal";

export default function ProductsPage() {

  const {
    data: products = [],
    addProduct,
    updateProduct,
    deleteProduct,
    isLoading
  } = useProducts();

  const {
    search,
    setSearch,
    filteredProducts
  } = useProductSearch(products);

  const {
    sortedProducts
  } = useProductSort(filteredProducts);

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
    sortedProducts,
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

        await updateProduct({
          ...editing,
          ...values
        });

        toast.success(
          "Product updated successfully."
        );

      } else {

        await addProduct(values);

        toast.success(
          "Product created successfully."
        );

      }

      setEditing(null);
      setShowModal(false);

    } catch {

      toast.error(
        "Unable to save product."
      );

    }

  }

  async function remove() {

    try {

      await deleteProduct(
        deleting.id
      );

      toast.success(
        "Product deleted successfully."
      );

      setDeleting(null);

    } catch {

      toast.error(
        "Unable to delete product."
      );

    }

  }

  if (isLoading) {

    return (

      <div className="space-y-6">

        <PageHeader
          title="Products"
          subtitle="Loading..."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[1,2,3,4].map(i=>(
            <div
              key={i}
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
        title="Products"
        subtitle="Manage product master."
      />

      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Sparkles size={28}/>

              <h2 className="text-3xl font-bold">
                Product Master
              </h2>

            </div>

            <p className="mt-3 text-indigo-100">

              Maintain products, pricing,
              categories and status.

            </p>

          </div>

          <button
            onClick={()=>{
              setEditing(null);
              setShowModal(true);
            }}
            className="flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-1"
          >

            <PackagePlus size={20}/>

            Add Product

          </button>

        </div>

      </div>

      <ProductToolbar
        search={search}
        onSearch={setSearch}
      />

      <ProductTable
        products={paginatedData}
        onView={setViewing}
        onEdit={(p)=>{
          setEditing(p);
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

        <ProductForm
          initialValues={editing}
          onSubmit={save}
          onCancel={()=>{
            setEditing(null);
            setShowModal(false);
          }}
        />

      </Modal>

      <ProductDetailsDrawer
        product={viewing}
        open={!!viewing}
        onClose={()=>setViewing(null)}
      />

      <DeleteProductDialog
        product={deleting}
        open={!!deleting}
        onCancel={()=>setDeleting(null)}
        onConfirm={remove}
      />

    </div>

  );

}