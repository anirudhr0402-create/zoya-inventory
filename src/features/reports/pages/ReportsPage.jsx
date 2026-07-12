import PageHeader from "../../../components/ui/PageHeader";
import ReportCard from "../components/ReportCard";

import useProducts from "../../products/hooks/useProducts";
import useCustomers from "../../customers/hooks/useCustomers";
import useSuppliers from "../../suppliers/hooks/useSuppliers";
import useInventory from "../../inventory/hooks/useInventory";
import usePurchases from "../../purchases/hooks/usePurchases";
import useSales from "../../sales/hooks/useSales";

import { getDashboardReport } from "../services/reportService";

export default function ReportsPage() {
  const { data: products = [] } = useProducts();
  const { data: customers = [] } = useCustomers();
  const { data: suppliers = [] } = useSuppliers();
  const { data: inventory = [] } = useInventory();
  const { data: purchases = [] } = usePurchases();
  const { data: sales = [] } = useSales();

  const report = getDashboardReport({
    products,
    customers,
    suppliers,
    inventory,
    purchases,
    sales
  });

  return (
    <>
      <PageHeader
        title="Reports"
        subtitle="Business Reports & Analytics"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <ReportCard
          title="Products"
          value={report.totalProducts}
        />

        <ReportCard
          title="Customers"
          value={report.totalCustomers}
        />

        <ReportCard
          title="Suppliers"
          value={report.totalSuppliers}
        />

        <ReportCard
          title="Inventory Value"
          value={`INR ${report.inventoryValue.toFixed(2)}`}
          color="text-blue-600"
        />

        <ReportCard
          title="Revenue"
          value={`INR ${report.revenue.toFixed(2)}`}
          color="text-green-600"
        />

        <ReportCard
          title="Profit"
          value={`INR ${report.profit.toFixed(2)}`}
          color="text-emerald-600"
        />

        <ReportCard
          title="Purchases"
          value={report.totalPurchases}
          color="text-orange-600"
        />

        <ReportCard
          title="Low Stock"
          value={report.lowStock}
          color="text-red-600"
        />

      </div>
    </>
  );
}