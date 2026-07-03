import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { APPLICATIONS, REGISTRIES } from "@/data/architecture";

const ALL_BLOCKS = REGISTRIES.map((r) => ({ id: r.id, title: r.title, kind: r.kind }));

export default function BuildWithOAS() {
    const [selected, setSelected] = useState(new Set(["farmer", "plot", "crop"]));

    const toggle = (id) => {
        const next = new Set(selected);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setSelected(next);
    };

    const matches = useMemo(() => {
        return APPLICATIONS.map((app) => {
            const has = app.needs.filter((n) => selected.has(n)).length;
            return { ...app, coverage: has / app.needs.length };
        }).sort((a, b) => b.coverage - a.coverage);
    }, [selected]);

    return (
        <section id="build" data-testid="section-build" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="05 · Build with Open Agri Stack"
                    title={<>Composable Applications.</>}
                    description="Applications are created by combining reusable infrastructure rather than building isolated systems. Open Agri Stack enables organizations to assemble solutions using interoperable building blocks."
                />

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start">
                    <div className="oas-card p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-5">
                            <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                                COMPOSER · SELECT BUILDING BLOCKS
                            </span>
                            <span className="oas-chip !text-[10px]">
                                {selected.size}/{ALL_BLOCKS.length}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {ALL_BLOCKS.map((b) => {
                                const on = selected.has(b.id);
                                return (
                                    <button
                                        key={b.id}
                                        data-testid={`block-${b.id}`}
                                        onClick={() => toggle(b.id)}
                                        className={`text-left rounded-[10px] border px-4 py-3.5 transition-all ${
                                            on
                                                ? "border-oas-ink bg-oas-accent/25"
                                                : "border-oas-border bg-oas-bg/60 hover:border-oas-ink/40"
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span
                                                className={`w-3 h-3 rounded-[3px] border ${
                                                    on
                                                        ? "bg-oas-accent border-oas-ink"
                                                        : "border-oas-border"
                                                }`}
                                            />
                                            <span className="mono text-[10px] text-oas-ink-soft">
                                                {b.kind}
                                            </span>
                                        </div>
                                        <div className="text-[14px] text-oas-ink">{b.title}</div>
                                    </button>
                                );
                            })}
                        </div>

                        <p className="mt-6 mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                            → SELECTED BLOCKS PROJECT INTO EACH APPLICATION ↓
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <AnimatePresence>
                            {matches.map((app) => (
                                <ApplicationCard key={app.id} app={app} selected={selected} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </Section>
        </section>
    );
}

function ApplicationCard({ app, selected }) {
    const pct = Math.round(app.coverage * 100);
    const complete = app.coverage === 1;
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`oas-card p-6 lg:p-7 relative overflow-hidden ${
                complete ? "border-oas-ink" : ""
            }`}
            data-testid={`application-${app.id}`}
        >
            <div className="flex items-start justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h3 className="font-serif-display text-[28px] leading-none text-oas-ink">
                            {app.title}
                        </h3>
                        {complete && (
                            <span className="oas-chip !bg-oas-accent/40 !border-oas-accent-ink !text-oas-accent-ink">
                                READY
                            </span>
                        )}
                    </div>
                    <p className="mt-2 text-[14.5px] leading-[1.55] text-oas-ink-soft max-w-[520px]">
                        {app.blurb}
                    </p>
                </div>
                <div className="text-right shrink-0">
                    <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                        COVERAGE
                    </div>
                    <div className="font-serif-display text-[30px] leading-none text-oas-ink mt-1">
                        {pct}
                        <span className="text-[16px] text-oas-ink-soft">%</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
                {app.needs.map((n) => {
                    const r = REGISTRIES.find((x) => x.id === n);
                    const on = selected.has(n);
                    return (
                        <span
                            key={n}
                            className={`oas-chip !text-[10.5px] ${
                                on
                                    ? "!bg-oas-accent/30 !border-oas-accent-ink !text-oas-accent-ink"
                                    : ""
                            }`}
                        >
                            {on ? "✓" : "○"} {r?.title || n}
                        </span>
                    );
                })}
            </div>

            <div className="mt-5 h-[3px] w-full rounded-full bg-oas-border/70 overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{ width: `${pct}%` }}
                    transition={{ type: "spring", stiffness: 140, damping: 22 }}
                    className="h-full bg-oas-accent"
                />
            </div>
        </motion.div>
    );
}
