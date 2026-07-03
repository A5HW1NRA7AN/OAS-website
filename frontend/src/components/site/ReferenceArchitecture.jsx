import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { REFERENCE_LAYERS } from "@/data/architecture";

export default function ReferenceArchitecture() {
    const [active, setActive] = useState("agriculture");
    return (
        <section
            id="architecture"
            data-testid="section-architecture"
            className="relative py-24 lg:py-32 oas-section-sunken"
        >
            <Section>
                <SectionHeader
                    eyebrow="02 · Reference Architecture"
                    title={<>Reference Architecture</>}
                    description="The Open Agri Stack Reference Architecture is organized into three interoperable layers. Each layer builds upon the one below it, creating a modular foundation for digital agriculture applications."
                />

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-start">
                    <div
                        data-testid="architecture-layers"
                        className="flex flex-col gap-3"
                        onMouseLeave={() => setActive("agriculture")}
                    >
                        {REFERENCE_LAYERS.map((layer) => (
                            <LayerCard
                                key={layer.id}
                                layer={layer}
                                active={active === layer.id}
                                dim={active && active !== layer.id}
                                onEnter={() => setActive(layer.id)}
                                onClick={() => setActive(layer.id)}
                            />
                        ))}
                    </div>

                    <ArchitectureDetail active={active} />
                </div>
            </Section>
        </section>
    );
}

function LayerCard({ layer, active, dim, onEnter, onClick }) {
    return (
        <motion.button
            data-testid={`layer-${layer.id}`}
            onMouseEnter={onEnter}
            onFocus={onEnter}
            onClick={onClick}
            animate={{ opacity: dim ? 0.55 : 1, y: active ? -2 : 0 }}
            transition={{ duration: 0.35 }}
            className={`text-left oas-card p-6 lg:p-7 relative transition-colors ${
                active ? "border-oas-ink" : "hover:border-oas-ink/40"
            }`}
        >
            <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                        {layer.code}
                    </span>
                    <h3 className="font-serif-display text-[26px] leading-none text-oas-ink">
                        {layer.title}
                    </h3>
                </div>
                <motion.span
                    className="w-2 h-2 rounded-full bg-oas-accent"
                    animate={{ scale: active ? 1.2 : 0.6, opacity: active ? 1 : 0.35 }}
                />
            </div>
            <p className="mt-3 text-[14.5px] leading-[1.55] text-oas-ink-soft max-w-[520px]">
                {layer.summary}
            </p>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="mt-5 flex flex-wrap gap-1.5">
                            {layer.modules.map((m) => (
                                <span key={m} className="oas-chip !text-[10.5px]">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

function ArchitectureDetail({ active }) {
    const layer = REFERENCE_LAYERS.find((l) => l.id === active) || REFERENCE_LAYERS[1];
    return (
        <div className="oas-card p-6 lg:p-8 sticky top-24">
            <div className="flex items-center justify-between">
                <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                    {layer.code} · IN DETAIL
                </span>
                <span className="oas-chip !text-[10px]">interactive</span>
            </div>

            <div className="mt-4 aspect-[5/4] w-full rounded-[10px] border border-oas-border oas-grid-bg relative overflow-hidden">
                <ArchitectureDiagram active={active} />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                >
                    <h4 className="mt-6 font-serif-display text-[28px] leading-[1.05] text-oas-ink">
                        {layer.title}
                    </h4>
                    <p className="mt-2 text-[15px] leading-[1.6] text-oas-ink-soft">
                        {layer.detail}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function ArchitectureDiagram({ active }) {
    const layers = [
        { id: "applications", y: 30, count: 3 },
        { id: "agriculture", y: 130, count: 4 },
        { id: "foundational", y: 230, count: 5 },
    ];
    return (
        <svg viewBox="0 0 400 320" className="w-full h-full">
            {layers.map((l) => {
                const isActive = l.id === active;
                return (
                    <g key={l.id} opacity={isActive ? 1 : 0.35}>
                        <rect
                            x="24"
                            y={l.y - 6}
                            width="352"
                            height="72"
                            rx="10"
                            fill={isActive ? "hsl(var(--oas-accent) / 0.18)" : "hsl(var(--oas-surface))"}
                            stroke={isActive ? "hsl(var(--oas-accent))" : "hsl(var(--oas-border))"}
                        />
                        {Array.from({ length: l.count }).map((_, i) => {
                            const gap = 340 / l.count;
                            const x = 34 + i * gap + gap / 2 - 30;
                            return (
                                <rect
                                    key={i}
                                    x={x}
                                    y={l.y + 12}
                                    width="60"
                                    height="36"
                                    rx="5"
                                    fill="hsl(var(--oas-surface))"
                                    stroke="hsl(var(--oas-border))"
                                />
                            );
                        })}
                        <text
                            x="34"
                            y={l.y + 4}
                            fontSize="9"
                            letterSpacing="1.5"
                            fill="hsl(var(--oas-ink-soft))"
                            fontFamily="JetBrains Mono, monospace"
                        >
                            {l.id === "applications"
                                ? "L3 · APPLICATIONS"
                                : l.id === "agriculture"
                                  ? "L2 · AGRICULTURE"
                                  : "L1 · FOUNDATION"}
                        </text>
                    </g>
                );
            })}
            <g stroke="hsl(var(--oas-ink))" strokeOpacity="0.15">
                <line x1="200" y1="100" x2="200" y2="124" />
                <line x1="200" y1="200" x2="200" y2="224" />
            </g>
        </svg>
    );
}
