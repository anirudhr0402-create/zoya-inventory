import PageHeader from "../../../components/ui/PageHeader";

import useProducts from "../../products/hooks/useProducts";
import useCustomers from "../../customers/hooks/useCustomers";
import usePurchases from "../../purchases/hooks/usePurchases";
import useSales from "../../sales/hooks/useSales";
import useInventory from "../../inventory/hooks/useInventory";

import DashboardWelcomeCard from "../components/DashboardWelcomeCard";
import DashboardStats from "../components/DashboardStats";
import BusinessSummary from "../components/BusinessSummary";
import QuickActions from "../components/QuickActions";
import ProfitOverviewCard from "../components/ProfitOverviewCard";
import RevenueVsExpenseWidget from "../components/RevenueVsExpenseWidget";
import SalesTrendWidget from "../components/SalesTrendWidget";
import SalesVsPurchaseChart from "../components/SalesVsPurchaseChart";
import InventoryValueWidget from "../components/InventoryValueWidget";
import StockMovementWidget from "../components/StockMovementWidget";
import LowStockWidget from "../components/LowStockWidget";
import TopProductsWidget from "../components/TopProductsWidget";
import CategoryDistributionWidget from "../components/CategoryDistributionWidget";
import RecentTransactions from "../components/RecentTransactions";
import RecentActivity from "../components/RecentActivity";
import SystemStatusWidget from "../components/SystemStatusWidget";

export default function DashboardPage() {
  const {
    data: products = []
  } = useProducts();

  const {
    data: customers = []
  } = useCustomers();

  const {
    data: purchases = []
  } = usePurchases();

  const {
    data: sales = []
  } = useSales();

  const {
    data: inventory = []
  } = useInventory();

  const totalSales = sales.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const totalPurchases = purchases.reduce(
    (sum, item) =>
      sum +
      Number(item.quantity || 0) *
        Number(item.unitPrice || 0),
    0
  );

  const inventoryValue =
    inventory.reduce(
      (sum, item) =>
        sum +
        Number(item.quantity || 0) *
          Number(item.averageCost || 0),
      0
    );

  const dashboard = {
    totalSales,
    totalPurchases,
    inventoryValue,
    profit:
      totalSales - totalPurchases,
    products: products.length,
    customers: customers.length,
    orders: sales.length,
    stock: inventory.reduce(
      (sum, item) =>
        sum +
        Number(item.quantity || 0),
      0
    )
  };

  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        subtitle="Welcome to AIMS"
      />

      <DashboardWelcomeCard />

      <BusinessSummary
        dashboard={dashboard}
      />

      <DashboardStats
        products={products}
        customers={customers}
        purchases={purchases}
        sales={sales}
        inventory={inventory}
      />

      <QuickActions />

      <ProfitOverviewCard
        sales={sales}
        purchases={purchases}
      />

      <div className="grid gap-6 xl:grid-cols-2">

        <RevenueVsExpenseWidget
          sales={sales}
          purchases={purchases}
        />

        <InventoryValueWidget
          inventory={inventory}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <SalesTrendWidget
          sales={sales}
        />

        <SalesVsPurchaseChart
          sales={sales}
          purchases={purchases}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <CategoryDistributionWidget
          products={products}
        />

        <StockMovementWidget
          sales={sales}
          purchases={purchases}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <LowStockWidget
          inventory={inventory}
        />

        <TopProductsWidget
          sales={sales}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <RecentTransactions
          sales={sales}
          purchases={purchases}
        />

        <RecentActivity />

      </div>

      <SystemStatusWidget />

    </div>
  );
}