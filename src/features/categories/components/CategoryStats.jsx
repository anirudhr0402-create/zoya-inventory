import Card from "../../../components/ui/Card";

export default function CategoryStats({
  categories
}) {
  const active = categories.filter(
    c => c.status === "Active"
  ).length;

  const inactive =
    categories.length - active;

  return (
    <div className="mb-6 grid gap-6 md:grid-cols-3">

      <Card className="p-5">
        <p>Total Categories</p>

        <h2 className="mt-2 text-3xl font-bold">
          {categories.length}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Active</p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          {active}
        </h2>
      </Card>

      <Card className="p-5">
        <p>Inactive</p>

        <h2 className="mt-2 text-3xl font-bold text-red-600">
          {inactive}
        </h2>
      </Card>

    </div>
  );
}