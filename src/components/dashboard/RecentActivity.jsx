import Card from "../ui/Card";

const activities = [
  "New product added",
  "Inventory updated",
  "Purchase order created",
  "Supplier modified",
  "Stock adjusted"
];

export default function RecentActivity() {
  return (
    <Card>
      <h3
        style={{
          marginBottom: 16
        }}
      >
        Recent Activity
      </h3>

      {activities.map((activity, index) => (
        <div
          key={index}
          style={{
            padding: "12px 0",
            borderBottom:
              index !== activities.length - 1
                ? "1px solid #f1f5f9"
                : "none"
          }}
        >
          {activity}
        </div>
      ))}
    </Card>
  );
}