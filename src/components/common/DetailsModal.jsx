import Modal from "../ui/Modal";

export default function DetailsModal({
  open,
  title,
  fields,
  onClose
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
    >
      <div className="space-y-4">

        {fields.map(field => (

          <div key={field.label}>

            <strong>
              {field.label}
            </strong>

            <p>
              {field.value}
            </p>

          </div>

        ))}

      </div>
    </Modal>
  );
}