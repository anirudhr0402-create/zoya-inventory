import PageHeader from "../../../components/ui/PageHeader";
import EmptyState from "../../../components/ui/EmptyState";

export default function InventoryPage() {
  return (
    <>
      <PageHeader
        title="Inventory"
        subtitle="Monitor stock levels"
      />

      <EmptyState
        title="Inventory"
        description="Inventory module coming soon."
      />
    </>
  );
}