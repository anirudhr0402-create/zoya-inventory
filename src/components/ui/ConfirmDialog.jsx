import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
    >
      <p
        style={{
          marginBottom: 24
        }}
      >
        {message}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10
        }}
      >
        <Button
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
}