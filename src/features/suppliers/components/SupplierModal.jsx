import Modal from "../../../components/ui/Modal";
import SupplierForm from "./SupplierForm";

export default function SupplierModal(props) {
  return (
    <Modal
      open={props.open}
      title={props.title}
      onClose={props.onClose}
    >
      <SupplierForm
        initialValues={props.initialValues}
        onSubmit={props.onSubmit}
        onCancel={props.onClose}
      />
    </Modal>
  );
}