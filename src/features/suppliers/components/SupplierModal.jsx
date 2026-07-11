import Modal from "../../../components/ui/Modal";
import SupplierForm from "./SupplierForm";

export default function SupplierModal({
  open,
  title,
  initialValues,
  onSubmit,
  onClose
}) {
  if (!open) return null;

  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
    >
      <SupplierForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}