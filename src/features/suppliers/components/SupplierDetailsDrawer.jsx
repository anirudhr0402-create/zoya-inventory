import Modal from "../../../components/ui/Modal";

export default function SupplierDetailsDrawer({
  open,
  supplier,
  onClose
}) {
  if (!supplier) return null;

  return (
    <Modal
      open={open}
      title="Supplier Details"
      onClose={onClose}
    >
      <div className="space-y-4">

        <div>
          <strong>Supplier</strong>
          <p>{supplier.name}</p>
        </div>

        <div>
          <strong>Contact Person</strong>
          <p>{supplier.contactPerson}</p>
        </div>

        <div>
          <strong>Phone</strong>
          <p>{supplier.phone}</p>
        </div>

        <div>
          <strong>Email</strong>
          <p>{supplier.email}</p>
        </div>

        <div>
          <strong>GST Number</strong>
          <p>{supplier.gstNumber}</p>
        </div>

        <div>
          <strong>Address</strong>
          <p>{supplier.address}</p>
        </div>

        <div>
          <strong>City</strong>
          <p>{supplier.city}</p>
        </div>

        <div>
          <strong>State</strong>
          <p>{supplier.state}</p>
        </div>

        <div>
          <strong>Pincode</strong>
          <p>{supplier.pincode}</p>
        </div>

      </div>
    </Modal>
  );
}