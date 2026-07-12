import Card from "../../../components/ui/Card";

export default function SystemInfoCard() {
  return (
    <Card className="p-6">
      <h2 className="mb-5 text-xl font-semibold">
        System Information
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Application</span>
          <span className="font-semibold">
            AIMS
          </span>
        </div>

        <div className="flex justify-between">
          <span>App Name</span>
          <span className="font-semibold">
            Alwaris Inventory Management System
          </span>
        </div>

        <div className="flex justify-between">
          <span>Version</span>
          <span className="font-semibold">
            v1.0.0
          </span>
        </div>

        <div className="flex justify-between">
          <span>Country</span>
          <span className="font-semibold">
            India
          </span>
        </div>

        <div className="flex justify-between">
          <span>Currency</span>
          <span className="font-semibold">
            INR (₹)
          </span>
        </div>

      </div>
    </Card>
  );
}