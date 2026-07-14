import {
  TrendingUp,
  Boxes,
  Users,
  IndianRupee,
  ShoppingBag,
  Activity
} from "lucide-react";

const stats = [
  {
    title: "Today's Revenue",
    value: "₹ 2.48L",
    icon: IndianRupee,
    color: "text-emerald-400",
    bg: "from-emerald-500/20 to-green-500/10"
  },
  {
    title: "Products",
    value: "1,284",
    icon: Boxes,
    color: "text-indigo-400",
    bg: "from-indigo-500/20 to-violet-500/10"
  },
  {
    title: "Customers",
    value: "3,872",
    icon: Users,
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-blue-500/10"
  },
  {
    title: "Today's Sales",
    value: "248",
    icon: ShoppingBag,
    color: "text-orange-400",
    bg: "from-orange-500/20 to-amber-500/10"
  }
];

function StatCard({
  title,
  value,
  icon: Icon,
  color,
  bg,
  delay
}) {
  return (
    <div
      className={`group rounded-3xl border border-white/10 bg-gradient-to-br ${bg} backdrop-blur-2xl p-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/30`}
      style={{
        animation: `float 6s ease-in-out ${delay}s infinite`
      }}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-400">

            {title}

          </p>

          <h3 className="mt-3 text-3xl font-black text-white">

            {value}

          </h3>

        </div>

        <div
          className={`rounded-2xl bg-white/10 p-4 ${color}`}
        >

          <Icon size={30} />

        </div>

      </div>

      <div className="mt-6 flex items-center gap-2">

        <TrendingUp
          size={16}
          className="text-emerald-400"
        />

        <span className="text-sm font-semibold text-emerald-300">

          +18.6% this month

        </span>

      </div>

    </div>
  );
}

export default function FloatingStats() {
  return (
    <>
      <style>
        {`
          @keyframes float{
            0%,100%{
              transform:translateY(0px);
            }
            50%{
              transform:translateY(-10px);
            }
          }
        `}
      </style>

      <div className="grid grid-cols-2 gap-6">

        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            {...stat}
            delay={index * 0.3}
          />
        ))}

      </div>

      <div className="mt-10 rounded-3xl border border-indigo-500/20 bg-white/5 p-6 backdrop-blur-xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-indigo-500/20 p-4">

            <Activity
              size={30}
              className="text-indigo-400"
            />

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">

              Live Business Monitoring

            </h3>

            <p className="mt-2 leading-7 text-slate-400">

              Track inventory, sales, purchases,
              profit and customer growth from a
              single enterprise dashboard.

            </p>

          </div>

        </div>

      </div>
    </>
  );
}