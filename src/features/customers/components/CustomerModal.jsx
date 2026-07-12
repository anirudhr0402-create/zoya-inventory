import Modal from "../../../components/ui/Modal";
import CustomerForm from "./CustomerForm";

export default function CustomerModal({
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
      <CustomerForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}