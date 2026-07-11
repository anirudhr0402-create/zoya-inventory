import ConfirmDialog from "../../../components/ui/ConfirmDialog";

export default function DeleteProductDialog({
  open,
  product,
  onConfirm,
  onCancel
}) {
  return (
    <ConfirmDialog
      open={open}
      title="Delete Product"
      message={
        product
          ? `Are you sure you want to delete "${product.name}"?`
          : ""
      }
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}