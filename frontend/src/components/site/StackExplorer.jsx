import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { STACK_LAYERS } from "@/data/architecture";

export default function StackExplorer() {
    const [openId, setOpenId] = useState("catalogues");

    return (
        <section id="stack" data-testid="section-stack" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="03 · OAS Stack"
                    title={<>The stack, layer by layer.</>}
                    description="Six precisely-scoped layers, each with a single job. Click a layer to expand its modules and see how the stack composes upward."
                />

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start">
                    <div
                        data-testid="stack-visual"
                        className="relative oas-card p-6 lg:p-8 sticky top-24"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                                OAS · STACK
                            </span>
                            <span className="oas-chip !text-[10px]">06 LAYERS</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {STACK_LAYERS.map((layer, idx) => (
                                <StackBar
                                    key={layer.id}
                                    layer={layer}
                                    index={idx}
                                    total={STACK_LAYERS.length}
                                    active={openId === layer.id}
                                    onClick={() => setOpenId(layer.id)}
                                />
                            ))}
                        </div>
                        <p className="mt-5 mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                            ↑ APPLICATIONS DEPEND ON · CATALOGUES · REGISTRIES · CONSENT · DISCOVERY
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <AnimatePresence mode="wait">
                            {STACK_LAYERS.filter((l) => l.id === openId).map((layer) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35 }}
                                    className="oas-card p-7 lg:p-9"
                                    data-testid={`stack-detail-${layer.id}`}
                                >
                                    <div className="flex items-baseline gap-4">
                                        <span className="mono text-[11px] tracking-[0.14em] text-oas-ink-soft">
                                            {layer.code}
                                        </span>
                                        <h3 className="font-serif-display text-[36px] leading-none text-oas-ink">
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-[14px] mono text-oas-accent-ink">
                                        {layer.subtitle}
                                    </p>
                                    <p className="mt-5 text-[16px] leading-[1.6] text-oas-ink-soft max-w-[560px]">
                                        {layer.detail}
                                    </p>
                                    <div className="mt-8 border-t border-oas-border pt-6">
                                        <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft mb-3">
                                            MODULES
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {layer.modules.map((m) => (
                                                <div
                                                    key={m}
                                                    className="flex items-center gap-3 border border-oas-border rounded-[8px] px-3 py-2.5 bg-oas-bg/60"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-oas-accent" />
                                                    <span className="text-[13.5px] text-oas-ink">{m}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </Section>
        </section>
    );
}

function StackBar({ layer, index, total, active, onClick }) {
    const widthPct = 60 + (index / (total - 1)) * 30;
    return (
        <button
            data-testid={`stack-bar-${layer.id}`}
            onClick={onClick}
            className="group w-full"
        >
            <motion.div
                animate={{
                    backgroundColor: active
                        ? "rgba(192, 207, 82, 0.22)"
                        : "rgb(255, 255, 255)",
                    borderColor: active ? "rgb(31, 41, 51)" : "rgb(228, 231, 235)",
                }}
                initial={{
                    backgroundColor: "rgb(255, 255, 255)",
                    borderColor: "rgb(228, 231, 235)",
                }}
                transition={{ duration: 0.3 }}
                className="relative border rounded-[10px] px-4 py-3.5 text-left flex items-center gap-4 mx-auto"
                style={{ width: `${widthPct}%` }}
            >
                <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft w-6">
                    {layer.code}
                </span>
                <span className="text-[15px] font-medium text-oas-ink">{layer.title}</span>
                <span className="ml-auto mono text-[10.5px] text-oas-ink-soft hidden sm:inline">
                    {layer.modules.length} mod
                </span>
            </motion.div>
        </button>
    );
}
