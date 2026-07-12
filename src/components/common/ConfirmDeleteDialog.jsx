import ConfirmDialog from "../ui/ConfirmDialog";

export default function ConfirmDeleteDialog({
  open,
  title,
  name,
  onConfirm,
  onCancel
}) {
  return (
    <ConfirmDialog
      open={open}
      title={title}
      message={`Delete "${name}"?`}
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}