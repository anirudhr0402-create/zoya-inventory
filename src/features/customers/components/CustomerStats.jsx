import StatsCards from "../../../components/common/StatsCards";

export default function CustomerStats({
  customers
}) {

  const active =
    customers.filter(
      c => c.status === "Active"
    ).length;

  return (

    <StatsCards

      cards={[

        {
          title: "Customers",
          value: customers.length
        },

        {
          title: "Active",
          value: active,
          color: "text-green-600"
        },

        {
          title: "Inactive",
          value:
            customers.length - active,
          color: "text-red-600"
        }

      ]}

    />

  );

}