import {
  Building2,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  User,
  Save,
  Sparkles
} from "lucide-react";

import PageHeader from "../../../components/ui/PageHeader";
import Card from "../../../components/ui/Card";

export default function SettingsPage() {
  const sections = [
    {
      title: "Company Information",
      icon: Building2,
      description:
        "Manage company profile and business information.",
      color:
        "from-indigo-500 to-violet-600"
    },
    {
      title: "User Profile",
      icon: User,
      description:
        "Manage administrator account.",
      color:
        "from-sky-500 to-cyan-600"
    },
    {
      title: "Notifications",
      icon: Bell,
      description:
        "Email & stock alerts.",
      color:
        "from-amber-500 to-orange-500"
    },
    {
      title: "Security",
      icon: Shield,
      description:
        "Password & access control.",
      color:
        "from-emerald-500 to-green-600"
    },
    {
      title: "Database",
      icon: Database,
      description:
        "Backup & restore application data.",
      color:
        "from-rose-500 to-pink-600"
    },
    {
      title: "Appearance",
      icon: Palette,
      description:
        "Customize application theme.",
      color:
        "from-fuchsia-500 to-purple-600"
    }
  ];

  return (
    <div className="space-y-8">

      <PageHeader
        title="Settings"
        subtitle="Application Configuration"
      />

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Globe size={34} />

              <h2 className="text-3xl font-bold">
                Application Settings
              </h2>

              <Sparkles size={20} />

            </div>

            <p className="mt-3 text-indigo-100">
              Configure every aspect of your
              inventory management system.
            </p>

          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-indigo-700 shadow-lg">

            <Save size={18} />

            Save Settings

          </button>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {sections.map(section => {

          const Icon = section.icon;

          return (

            <Card
              key={section.title}
              className="group cursor-pointer overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`bg-gradient-to-r ${section.color} p-6 text-white`}
              >

                <div className="flex items-center justify-between">

                  <Icon size={34} />

                  <Sparkles size={18} />

                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {section.title}
                </h2>

              </div>

              <div className="p-6">

                <p className="leading-7 text-slate-600">
                  {section.description}
                </p>

                <button className="mt-6 rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 transition hover:bg-indigo-600 hover:text-white">

                  Open Settings

                </button>

              </div>

            </Card>

          );

        })}

      </div>

    </div>
  );
}