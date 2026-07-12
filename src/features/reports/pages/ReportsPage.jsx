import PageHeader from "../../../components/ui/PageHeader";

import useProducts from "../../products/hooks/useProducts";
import useCustomers from "../../customers/hooks/useCustomers";
import useSuppliers from "../../suppliers/hooks/useSuppliers";
import useInventory from "../../inventory/hooks/useInventory";
import usePurchases from "../../purchases/hooks/usePurchases";
import useSales from "../../sales/hooks/useSales";

import { getDashboardReport } from "../services/reportService";

import ReportCard from "../components/ReportCard";
import RevenueChart from "../components/RevenueChart";
import ProfitChart from "../components/ProfitChart";
import InventoryValueChart from "../components/InventoryValueChart";

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
    <div className="space-y-8">

      <PageHeader
        title="Reports"
        subtitle="Business Reports & Analytics"
      />

      {/* KPI Cards */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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
          title="Purchases"
          value={report.totalPurchases}
        />

        <ReportCard
          title="Revenue"
          value={`INR ${report.revenue.toFixed(2)}`}
          color="text-green-600"
        />

        <ReportCard
          title="Profit"
          value={`INR ${report.profit.toFixed(2)}`}
          color="text-blue-600"
        />

        <ReportCard
          title="Inventory Value"
          value={`INR ${report.inventoryValue.toFixed(2)}`}
          color="text-purple-600"
        />

        <ReportCard
          title="Low Stock"
          value={report.lowStock}
          color="text-red-600"
        />

      </div>

      {/* Charts */}

      <div className="grid gap-6 lg:grid-cols-2">

        <RevenueChart sales={sales} />

        <ProfitChart sales={sales} />

      </div>

      <InventoryValueChart inventory={inventory} />

    </div>
  );
}