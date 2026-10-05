import { FadeIn } from "../components/FadeIn";
import { stats } from "../data/content";

export function StatsSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-14 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} y={20}>
            <div className="border-t border-[#D7E2EA]/30 pt-4">
              <p className="hero-heading font-black uppercase leading-tight text-2xl sm:text-3xl md:text-4xl">{s.value}</p>
              <p className="text-[#D7E2EA] font-light uppercase tracking-wider text-xs sm:text-sm mt-2 opacity-70">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
