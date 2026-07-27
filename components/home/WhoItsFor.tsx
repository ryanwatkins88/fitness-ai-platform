import {
  Store,
  Users,
  Wrench,
  Briefcase,
  ShoppingBag,
  Building2,
} from "lucide-react";

const audiences = [
  { icon: Store, label: "Local & brick-and-mortar businesses" },
  { icon: Users, label: "Solopreneurs & freelancers" },
  { icon: Wrench, label: "Service businesses & tradespeople" },
  { icon: Briefcase, label: "Coaches & consultants" },
  { icon: ShoppingBag, label: "E-commerce & online sellers" },
  { icon: Building2, label: "Small teams & agencies" },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who this is for</h2>
          <p className="mt-4 text-ink/60">
            Any business that wants to save time and money with AI — whether you&apos;ve
            never touched it or you&apos;re already using a tool or two and want to go
            further.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-line bg-paper p-5"
            >
              <item.icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-ink/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
