import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";

import SalesOverview from "../components/dashboard/SalesOverview";
import InventorySummary from "../components/dashboard/InventorySummary";
import RecentActivity from "../components/dashboard/RecentActivity";
import RecentProducts from "../components/dashboard/RecentProducts";
import QuickActions from "../components/dashboard/QuickActions";

export default function DashboardPage() {
  const stats = [
    { title: "Products", value: 120 },
    { title: "Categories", value: 18 },
    { title: "Suppliers", value: 9 },
    { title: "Customers", value: 64 }
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Monitor your inventory and business performance."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
          marginBottom: 24
        }}
      >
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 20,
          marginBottom: 20
        }}
      >
        <SalesOverview />
        <InventorySummary />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20
        }}
      >
        <RecentActivity />
        <RecentProducts />
        <QuickActions />
      </div>
    </>
  );
}