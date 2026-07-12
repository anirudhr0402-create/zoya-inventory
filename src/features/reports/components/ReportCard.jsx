import Card from "../../../components/ui/Card";

export default function ReportCard({
  title,
  value,
  color = "text-gray-900"
}) {
  return (
    <Card className="p-6">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h2>
    </Card>
  );
}