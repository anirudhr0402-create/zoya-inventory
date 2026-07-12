import Card from "../../../components/ui/Card";

export default function CompanyCard() {
  return (
    <Card className="p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Company Information
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Name:</strong>
          <br />
          Alwaris Industries
        </p>

        <p>
          <strong>Address:</strong>
          <br />
          Badvel,
          <br />
          YSR Kadapa District,
          <br />
          Andhra Pradesh - 516227
          <br />
          India
        </p>

        <p>
          <strong>Email:</strong>
          <br />
          admin@aims.in
        </p>

        <p>
          <strong>Phone:</strong>
          <br />
          +91 9876543210
        </p>

      </div>

    </Card>
  );
}