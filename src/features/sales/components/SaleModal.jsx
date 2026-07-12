import Modal from "../../../components/ui/Modal";
import SaleForm from "./SaleForm";

export default function SaleModal(props) {
  if (!props.open) return null;

  return (
    <Modal
      open={props.open}
      title={props.title}
      onClose={props.onClose}
    >
      <SaleForm
        initialValues={props.initialValues}
        onSubmit={props.onSubmit}
        onCancel={props.onClose}
      />
    </Modal>
  );
}