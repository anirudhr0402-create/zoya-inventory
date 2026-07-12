import Modal from "../../../components/ui/Modal";
import PurchaseForm from "./PurchaseForm";

export default function PurchaseModal(props) {
  if (!props.open) return null;

  return (
    <Modal
      open={props.open}
      title={props.title}
      onClose={props.onClose}
    >
      <PurchaseForm
        initialValues={props.initialValues}
        onSubmit={props.onSubmit}
        onCancel={props.onClose}
      />
    </Modal>
  );
}