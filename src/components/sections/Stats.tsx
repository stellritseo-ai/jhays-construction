import { Hammer, Users, Award } from "lucide-react";

const stats = [
  { icon: Hammer, label: "Projects Completed", value: "5000+" },
  { icon: Users, label: "Happy Clients", value: "4900" },
  { icon: Award, label: "Expert Members", value: "10+" },
];

export function Stats() {
  return (
    <section className="py-[60px] px-4 gradient-primary text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/80">Numbers Speak</div>
          <div className="font-display text-3xl font-bold mt-1">Everything</div>
        </div>
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="size-14 rounded-xl glass grid place-items-center">
              <s.icon className="size-7" />
            </div>
            <div>
              <div className="font-display text-3xl font-bold">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/85">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
