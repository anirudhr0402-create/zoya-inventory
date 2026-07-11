import Card from "../ui/Card";

export default function SalesOverview() {
  return (
    <Card>
      <h3 style={{ marginBottom: 20 }}>Sales Overview</h3>

      <div
        style={{
          height: 240,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px dashed #d1d5db",
          borderRadius: 10,
          color: "#6b7280"
        }}
      >
        Sales Chart Placeholder
      </div>
    </Card>
  );
}