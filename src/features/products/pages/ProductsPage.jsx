import { useState } from "react";
import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import useProducts from "../hooks/useProducts";
import useProductSearch from "../hooks/useProductSearch";
import useProductSort from "../hooks/useProductSort";
import usePagination from "../hooks/usePagination";

import ProductToolbar from "../components/ProductToolbar";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import DeleteProductDialog from "../components/DeleteProductDialog";
import Pagination from "../components/Pagination";
import ProductDetailsDrawer from "../components/ProductDetailsDrawer";
import ProductStats from "../components/ProductStats";



export default function ProductsPage() {
  const {
    data = [],
    isLoading,
    addProduct,
    updateProduct,
    deleteProduct
  } = useProducts();

  const {
    search,
    setSearch,
    filteredProducts
  } = useProductSearch(data);

  const {
    sortedProducts,
    sortField,
    sortDirection,
    changeSort
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
  } = usePagination(sortedProducts, 5);

  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [viewProduct, setViewProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  async function handleCreate(product) {
    try {
      await addProduct(product);

      toast.success("Product created successfully.");

      setShowAddModal(false);
    } catch {
      toast.error("Unable to create product.");
    }
  }

  async function handleUpdate(product) {
    try {
      await updateProduct({
        ...editingProduct,
        ...product
      });

      toast.success("Product updated successfully.");

      setEditingProduct(null);
      setShowAddModal(false);
    } catch {
      toast.error("Unable to update product.");
    }
  }

  async function handleDelete() {
    try {
      await deleteProduct(selectedProduct.id);

      toast.success("Product deleted successfully.");

      setShowDeleteDialog(false);
      setSelectedProduct(null);
    } catch {
      toast.error("Unable to delete product.");
    }
  }

  if (isLoading) {
    return (
      <div className="p-6">
        Loading products...
      </div>
    );
  }

  return (
    <>
      <PageHeader
    title="Products"
    subtitle="Manage inventory products"
/>
<ProductStats products={data} />

      <ProductToolbar
        search={search}
        onSearch={setSearch}
        onAdd={() => {
          setEditingProduct(null);
          setShowAddModal(true);
        }}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={changeSort}
      />

      <ProductTable
  products={paginatedData}
  onView={(product) => {
    setViewProduct(product);
    setShowDetails(true);
  }}
  onEdit={(product) => {
    setEditingProduct(product);
    setShowAddModal(true);
  }}
  onDelete={(product) => {
    setSelectedProduct(product);
    setShowDeleteDialog(true);
  }}
/>
<ProductDetailsDrawer
  open={showDetails}
  product={viewProduct}
  onClose={() => {
    setShowDetails(false);
    setViewProduct(null);
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

      <ProductModal
        open={showAddModal}
        title={
          editingProduct
            ? "Edit Product"
            : "Add Product"
        }
        initialValues={editingProduct}
        onSubmit={
          editingProduct
            ? handleUpdate
            : handleCreate
        }
        onClose={() => {
          setEditingProduct(null);
          setShowAddModal(false);
        }}
      />

      <DeleteProductDialog
        open={showDeleteDialog}
        product={selectedProduct}
        onConfirm={handleDelete}
        onCancel={() => {
          setShowDeleteDialog(false);
          setSelectedProduct(null);
        }}
      />
    </>
  );
}