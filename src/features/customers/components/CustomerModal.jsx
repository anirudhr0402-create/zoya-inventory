import Modal from "../../../components/ui/Modal";
import CustomerForm from "./CustomerForm";

export default function CustomerModal(props) {

  return (

    <Modal
      open={props.open}
      title={props.title}
      onClose={props.onClose}
    >

      <CustomerForm
        initialValues={props.initialValues}
        onSubmit={props.onSubmit}
        onCancel={props.onClose}
      />

    </Modal>

  );

}