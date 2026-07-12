import Modal from "../../../components/ui/Modal";
import CategoryForm from "./CategoryForm";

export default function CategoryModal({
  open,
  title,
  initialValues,
  onSubmit,
  onClose
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
    >
      <CategoryForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}