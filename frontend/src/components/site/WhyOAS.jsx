import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { WHY_PILLARS } from "@/data/architecture";

export default function WhyOAS() {
    return (
        <section id="why" data-testid="section-why" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="01 · Why Open Agri Stack"
                    title={
                        <>
                            Agriculture cannot be
                            <span className="italic text-oas-ink-soft"> rebuilt </span>
                            for every program.
                        </>
                    }
                    description="OAS is the shared substrate — an open, modular architecture that lets institutions and builders compose applications from the same public building blocks."
                />

                <div className="mt-14 lg:mt-20 grid md:grid-cols-3 gap-4 lg:gap-5">
                    {WHY_PILLARS.map((p, i) => (
                        <motion.article
                            key={p.id}
                            data-testid={`why-card-${p.id}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="oas-card p-7 lg:p-8 flex flex-col min-h-[320px] relative overflow-hidden group"
                        >
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-oas-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft mb-6">
                                0{i + 1} / 03
                            </div>
                            <WhyDiagram id={p.id} />
                            <h3 className="mt-8 font-serif-display text-[26px] leading-[1.05] text-oas-ink">
                                {p.title}
                            </h3>
                            <p className="mt-3 text-[14.5px] leading-[1.6] text-oas-ink-soft">
                                {p.body}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </Section>
        </section>
    );
}

function WhyDiagram({ id }) {
    if (id === "open")
        return (
            <svg viewBox="0 0 200 90" className="w-full h-[92px]" aria-hidden>
                <g stroke="hsl(var(--oas-border))" fill="none">
                    <rect x="10" y="20" width="60" height="50" rx="4" />
                    <rect x="80" y="20" width="60" height="50" rx="4" />
                    <rect x="150" y="20" width="40" height="50" rx="4" fill="hsl(var(--oas-accent))" fillOpacity="0.5" />
                </g>
                <g stroke="hsl(var(--oas-ink))" strokeOpacity="0.3">
                    <line x1="70" y1="45" x2="80" y2="45" />
                    <line x1="140" y1="45" x2="150" y2="45" />
                </g>
                <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="hsl(var(--oas-ink-soft))">
                    <text x="40" y="48" textAnchor="middle">SPEC</text>
                    <text x="110" y="48" textAnchor="middle">CODE</text>
                    <text x="170" y="48" textAnchor="middle">USE</text>
                </g>
            </svg>
        );
    if (id === "modular")
        return (
            <svg viewBox="0 0 200 90" className="w-full h-[92px]" aria-hidden>
                {[0, 1, 2].map((r) =>
                    [0, 1, 2, 3].map((c) => (
                        <rect
                            key={`${r}-${c}`}
                            x={10 + c * 46}
                            y={12 + r * 24}
                            width="40"
                            height="18"
                            rx="3"
                            fill={r === 1 && c === 2 ? "hsl(var(--oas-accent))" : "hsl(var(--oas-surface))"}
                            stroke="hsl(var(--oas-border))"
                        />
                    ))
                )}
            </svg>
        );
    return (
        <svg viewBox="0 0 200 90" className="w-full h-[92px]" aria-hidden>
            <circle cx="100" cy="45" r="30" fill="none" stroke="hsl(var(--oas-border))" strokeDasharray="3 3" />
            <circle cx="100" cy="45" r="16" fill="hsl(var(--oas-accent))" fillOpacity="0.35" stroke="hsl(var(--oas-accent))" />
            {[0, 60, 120, 180, 240, 300].map((a) => {
                const x = 100 + 30 * Math.cos((a * Math.PI) / 180);
                const y = 45 + 30 * Math.sin((a * Math.PI) / 180);
                return <circle key={a} cx={x} cy={y} r="3" fill="hsl(var(--oas-ink))" fillOpacity="0.6" />;
            })}
        </svg>
    );
}
