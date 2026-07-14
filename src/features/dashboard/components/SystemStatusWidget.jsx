import {
  Database,
  Wifi,
  ShieldCheck,
  HardDrive,
  Server,
  Activity,
  CheckCircle2
} from "lucide-react";

const systems = [
  {
    title: "Database",
    status: "Online",
    value: "99.99%",
    icon: Database,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "API Server",
    status: "Healthy",
    value: "32 ms",
    icon: Server,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Network",
    status: "Connected",
    value: "Stable",
    icon: Wifi,
    color: "bg-sky-100 text-sky-600"
  },
  {
    title: "Security",
    status: "Protected",
    value: "Secure",
    icon: ShieldCheck,
    color: "bg-violet-100 text-violet-600"
  },
  {
    title: "Storage",
    status: "Available",
    value: "68%",
    icon: HardDrive,
    color: "bg-amber-100 text-amber-600"
  }
];

export default function SystemStatusWidget() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            System Status
          </h2>

          <p className="mt-1 text-slate-500">
            Live application health
          </p>

        </div>

        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">

          <Activity size={24} />

        </div>

      </div>

      <div className="space-y-5">

        {systems.map(system => {

          const Icon = system.icon;

          return (

            <div
              key={system.title}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${system.color}`}
                >

                  <Icon size={24} />

                </div>

                <div>

                  <h3 className="font-bold text-slate-800">

                    {system.title}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {system.status}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <span className="font-bold text-slate-700">

                  {system.value}

                </span>

                <CheckCircle2
                  size={20}
                  className="text-emerald-500"
                />

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}