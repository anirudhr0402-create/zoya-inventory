import DetailsModal from "../../../components/common/DetailsModal";

export default function CustomerDetails({
  open,
  customer,
  onClose
}) {

  if (!customer) return null;

  return (

    <DetailsModal

      open={open}

      title="Customer Details"

      onClose={onClose}

      fields={[

        {
          label: "Customer",
          value: customer.name
        },

        {
          label: "Phone",
          value: customer.phone
        },

        {
          label: "Email",
          value: customer.email
        },

        {
          label: "GST",
          value: customer.gstNumber
        },

        {
          label: "Type",
          value: customer.customerType
        },

        {
          label: "Credit",
          value: `₹ ${customer.creditLimit}`
        },

        {
          label: "Address",
          value: customer.address
        }

      ]}

    />

  );

}