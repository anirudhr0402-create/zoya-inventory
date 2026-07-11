import Card from "../ui/Card";
import Button from "../ui/Button";

export default function QuickActions() {
  return (
    <Card>
      <h3 style={{ marginBottom: 20 }}>Quick Actions</h3>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap"
        }}
      >
        <Button>Add Product</Button>
        <Button variant="secondary">Create Purchase</Button>
        <Button variant="secondary">Record Sale</Button>
      </div>
    </Card>
  );
}