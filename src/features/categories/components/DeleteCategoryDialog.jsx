import ConfirmDialog from "../../../components/ui/ConfirmDialog";

export default function DeleteCategoryDialog({
  open,
  category,
  onConfirm,
  onCancel
}) {
  return (
    <ConfirmDialog
      open={open}
      title="Delete Category"
      message={`Delete "${category?.name}"?`}
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}