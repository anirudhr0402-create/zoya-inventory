import ConfirmDialog from "../../../components/ui/ConfirmDialog";

export default function DeleteSupplierDialog({
  open,
  supplier,
  onConfirm,
  onCancel
}) {
  return (
    <ConfirmDialog
      open={open}
      title="Delete Supplier"
      message={`Delete "${supplier?.name}"?`}
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}