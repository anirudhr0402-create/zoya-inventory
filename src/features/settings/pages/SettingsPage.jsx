import { toast } from "sonner";

import PageHeader from "../../../components/ui/PageHeader";

import useSettings from "../hooks/useSettings";
import SettingsForm from "../components/SettingsForm";
import CompanyCard from "../components/CompanyCard";
import SystemInfoCard from "../components/SystemInfoCard";

export default function SettingsPage() {
  const {
    data,
    isLoading,
    updateSettings
  } = useSettings();

  async function handleSave(values) {
    await updateSettings(values);

    toast.success("Settings saved.");
  }

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <>
  <PageHeader
    title="Settings"
    subtitle="Application Configuration"
  />

  <div className="grid gap-6 lg:grid-cols-3">

    <div className="lg:col-span-2">
      <SettingsForm
        settings={data}
        onSave={handleSave}
      />
    </div>

    <div className="space-y-6">
      <CompanyCard />

      <SystemInfoCard />
    </div>

  </div>
</>
  );
}