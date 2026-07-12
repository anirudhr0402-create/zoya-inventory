import PageHeader from "../../../components/ui/PageHeader";

import useDashboard from "../hooks/useDashboard";

import KpiCard from "../components/KpiCard";
import LowStockCard from "../components/LowStockCard";
import RecentSales from "../components/RecentSales";
import LowStockWidget from "../components/LowStockWidget";
import useSales from "../../sales/hooks/useSales";
import useInventory from "../../inventory/hooks/useInventory";

export default function DashboardPage() {
  const { data, isLoading } = useDashboard();
  const { data: sales = [] } = useSales();

const { data: inventory = [] } = useInventory();

  if (isLoading) {
    return (
      <div className="p-8">
        Loading dashboard...
        <div className="mt-8 grid gap-6 xl:grid-cols-2">

    <RecentSales sales={sales} />

    <LowStockWidget inventory={inventory} />

</div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back to AIMS"
      />

      <div className="mb-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Products"
          value={data.totalProducts}
          color="bg-blue-600"
        />

        <KpiCard
          title="Categories"
          value={data.totalCategories}
          color="bg-green-600"
        />

        <KpiCard
          title="Suppliers"
          value={data.totalSuppliers}
          color="bg-purple-600"
        />

        <KpiCard
          title="Customers"
          value={data.totalCustomers}
          color="bg-amber-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="mb-5 text-lg font-semibold">
            Business Overview
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500">
                Total Sales
              </p>

              <h2 className="mt-2 text-3xl font-bold text-green-600">
                INR {data.totalSales.toLocaleString()}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">
                Total Purchases
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-600">
                INR {data.totalPurchases.toLocaleString()}
              </h2>
            </div>
          </div>
        </div>

        <LowStockCard
          lowStock={data.lowStockItems}
          outOfStock={data.outOfStockItems}
        />
      </div>
    </>
  );
}