import Card from "./Card";

export default function StatCard({
  title,
  value
}) {
  return (
    <Card>
      <div
        style={{
          color: "#6b7280",
          fontSize: 14
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          marginTop: 12
        }}
      >
        {value}
      </div>
    </Card>
  );
}