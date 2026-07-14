import Modal from "../../../components/ui/Modal";
import SaleForm from "./SaleForm";

export default function SaleModal({
  open,
  initialValues,
  onSubmit,
  onClose
}) {
  if (!open) return null;

  return (
    <Modal
      open={open}
      title=""
      size="4xl"
      onClose={onClose}
    >
      <SaleForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}