import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { REGISTRIES } from "@/data/architecture";

export default function RegistryAtlas() {
    const [selected, setSelected] = useState("plot");
    const active = useMemo(
        () => REGISTRIES.find((r) => r.id === selected) || REGISTRIES[0],
        [selected]
    );
    const connectedIds = useMemo(() => new Set(active.connects), [active]);

    return (
        <section
            id="registries"
            data-testid="section-registries"
            className="relative py-24 lg:py-32 oas-section-sunken"
        >
            <Section>
                <SectionHeader
                    eyebrow="04 · Registry Atlas"
                    title={<>Core Registries.</>}
                    description="Registries provide the trusted foundation for interoperability within Open Agri Stack. Each registry is designed as a reusable, standards-based building block that can integrate with compliant implementations."
                />

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
                    <div className="oas-card p-4 lg:p-6 relative">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                                REGISTRY GRAPH
                            </span>
                            <span className="oas-chip !text-[10px]">6 NODES</span>
                        </div>
                        <div className="relative aspect-square oas-dot-bg rounded-[10px] overflow-hidden">
                            <AtlasGraph
                                selectedId={selected}
                                connectedIds={connectedIds}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="oas-card p-7 lg:p-8"
                            data-testid={`registry-detail-${active.id}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="oas-chip !text-[10px]">{active.kind}</span>
                                <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                                    REGISTRY
                                </span>
                            </div>
                            <h3 className="mt-3 font-serif-display text-[38px] leading-[1.02] text-oas-ink">
                                {active.title}
                            </h3>
                            <p className="mt-3 text-[15.5px] leading-[1.6] text-oas-ink-soft">
                                {active.purpose}
                            </p>

                            <div className="mt-7 grid sm:grid-cols-2 gap-6">
                                <div>
                                    <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft mb-3">
                                        COMPONENTS
                                    </div>
                                    <ul className="space-y-2">
                                        {active.components.map((c) => (
                                            <li
                                                key={c}
                                                className="text-[14px] text-oas-ink flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-oas-ink" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft mb-3">
                                        CONNECTS TO
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {active.connects.map((id) => {
                                            const r = REGISTRIES.find((x) => x.id === id);
                                            return (
                                                <button
                                                    key={id}
                                                    onClick={() => setSelected(id)}
                                                    data-testid={`connect-${id}`}
                                                    className="oas-chip hover:border-oas-ink transition-colors"
                                                >
                                                    ↳ {r?.title || id}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {REGISTRIES.map((r) => (
                                <button
                                    key={r.id}
                                    data-testid={`registry-pill-${r.id}`}
                                    onClick={() => setSelected(r.id)}
                                    className={`text-left rounded-[10px] border px-3 py-3 transition-colors ${
                                        selected === r.id
                                            ? "border-oas-ink bg-oas-surface"
                                            : "border-oas-border bg-oas-bg/60 hover:border-oas-ink/40"
                                    }`}
                                >
                                    <div className="mono text-[10px] text-oas-ink-soft">
                                        {r.kind}
                                    </div>
                                    <div className="text-[13.5px] text-oas-ink mt-1">
                                        {r.title}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </section>
    );
}

function AtlasGraph({ selectedId, connectedIds, onSelect }) {
    const positions = {
        farmer: { x: 50, y: 20 },
        plot: { x: 80, y: 40 },
        crop: { x: 80, y: 72 },
        advisory: { x: 50, y: 88 },
        trade: { x: 20, y: 72 },
        credit: { x: 20, y: 40 },
    };
    const selectedPos = positions[selectedId];

    return (
        <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
        >
            {REGISTRIES.map((r) =>
                r.connects.map((cid) => {
                    const a = positions[r.id];
                    const b = positions[cid];
                    if (!a || !b) return null;
                    const isActive = r.id === selectedId || cid === selectedId;
                    return (
                        <line
                            key={`${r.id}-${cid}`}
                            x1={a.x}
                            y1={a.y}
                            x2={b.x}
                            y2={b.y}
                            stroke={
                                isActive
                                    ? "hsl(var(--oas-accent-ink))"
                                    : "hsl(var(--oas-ink))"
                            }
                            strokeOpacity={isActive ? 0.7 : 0.14}
                            strokeWidth={isActive ? 0.4 : 0.25}
                        />
                    );
                })
            )}
            {REGISTRIES.map((r) => {
                const p = positions[r.id];
                const isSelected = r.id === selectedId;
                const isConnected = connectedIds.has(r.id);
                const dim = !isSelected && !isConnected;
                return (
                    <g
                        key={r.id}
                        transform={`translate(${p.x}, ${p.y})`}
                        onClick={() => onSelect(r.id)}
                        style={{ cursor: "pointer" }}
                        opacity={dim ? 0.45 : 1}
                    >
                        <circle
                            r={isSelected ? 5 : 4}
                            fill={isSelected ? "hsl(var(--oas-accent))" : "hsl(var(--oas-surface))"}
                            stroke={isSelected ? "hsl(var(--oas-ink))" : "hsl(var(--oas-border))"}
                            strokeWidth="0.4"
                        />
                        <text
                            y="10"
                            textAnchor="middle"
                            fontSize="2.4"
                            fontFamily="Inter Tight, sans-serif"
                            fill="hsl(var(--oas-ink))"
                            fontWeight={isSelected ? 600 : 500}
                        >
                            {r.title
                                .replace(" Registry", "")
                                .replace(" Catalogue", "")
                                .replace(" Ledger", "")}
                        </text>
                    </g>
                );
            })}
            {selectedPos && (
                <motion.circle
                    initial={false}
                    animate={{ cx: selectedPos.x, cy: selectedPos.y }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    r="7"
                    fill="none"
                    stroke="hsl(var(--oas-accent))"
                    strokeOpacity="0.45"
                    strokeWidth="0.4"
                    strokeDasharray="1.4 1.2"
                />
            )}
        </svg>
    );
}
