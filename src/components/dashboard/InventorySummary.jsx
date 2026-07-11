import Card from "../ui/Card";

export default function InventorySummary() {
  const rows = [
    { label: "In Stock", value: 842 },
    { label: "Low Stock", value: 16 },
    { label: "Out of Stock", value: 7 },
    { label: "Total SKUs", value: 865 }
  ];

  return (
    <Card>
      <h3 style={{ marginBottom: 20 }}>Inventory Summary</h3>

      {rows.map((row) => (
        <div
          key={row.label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #f1f5f9"
          }}
        >
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </div>
      ))}
    </Card>
  );
}