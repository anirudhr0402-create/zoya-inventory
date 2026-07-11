import Modal from "../../../components/ui/Modal";
import ProductForm from "./ProductForm";

export default function ProductModal({
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
      <ProductForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}