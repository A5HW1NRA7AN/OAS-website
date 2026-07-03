import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { STACK_LAYERS } from "@/data/architecture";

/**
 * Stack — six named layers presented as a clean vertical list.
 * No fabricated pyramid; canonical Mermaid supersedes when supplied.
 * Click a layer to expand its subtitle + description inline.
 */
export default function StackExplorer() {
    const [openId, setOpenId] = useState("catalogues");

    return (
        <section id="stack" data-testid="section-stack" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="03 · The Open Agri Stack"
                    title={<>Explore the Stack.</>}
                    description="The Open Agri Stack implementation organizes core infrastructure into reusable layers that work together through secure interfaces, shared registries, and standardized data exchange."
                />

                <div className="mt-14 lg:mt-20 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
                    {/* Left: stacked list */}
                    <div className="flex flex-col gap-3">
                        {STACK_LAYERS.map((layer, i) => (
                            <StackRow
                                key={layer.id}
                                layer={layer}
                                index={i}
                                total={STACK_LAYERS.length}
                                active={openId === layer.id}
                                onClick={() => setOpenId(layer.id)}
                            />
                        ))}
                    </div>

                    {/* Right: detail card — sticky */}
                    <div className="lg:sticky lg:top-24">
                        <AnimatePresence mode="wait">
                            {STACK_LAYERS.filter((l) => l.id === openId).map((layer) => (
                                <motion.article
                                    key={layer.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.3 }}
                                    className="oas-card p-8 lg:p-10"
                                    data-testid={`stack-detail-${layer.id}`}
                                >
                                    <div className="oas-eyebrow mb-5">
                                        Open Agri Stack · Layer
                                    </div>
                                    <h3 className="font-serif-display text-[40px] lg:text-[48px] leading-[1.02] text-oas-ink">
                                        {layer.title}
                                    </h3>
                                    <p
                                        className="mt-3 mono text-[13px]"
                                        style={{ color: "hsl(var(--oas-forest))" }}
                                    >
                                        {layer.subtitle}
                                    </p>
                                    <p className="mt-7 text-[16.5px] leading-[1.65] text-oas-ink-soft max-w-[520px]">
                                        {layer.detail}
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-oas-border flex items-center justify-between">
                                        <span className="mono text-[10.5px] tracking-[0.16em] text-oas-forest-soft">
                                            LAYER
                                        </span>
                                        <span className="font-serif-display text-[22px] text-oas-ink">
                                            {String(STACK_LAYERS.findIndex((l) => l.id === layer.id) + 1).padStart(2, "0")}
                                            <span className="text-[14px] text-oas-ink-soft">
                                                {" "}/ {String(STACK_LAYERS.length).padStart(2, "0")}
                                            </span>
                                        </span>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </Section>
        </section>
    );
}

function StackRow({ layer, index, total, active, onClick }) {
    return (
        <button
            data-testid={`stack-bar-${layer.id}`}
            onClick={onClick}
            className="text-left group"
        >
            <motion.div
                animate={{
                    borderColor: active ? "hsl(90 40% 22%)" : "hsl(90 15% 89%)",
                    backgroundColor: active
                        ? "hsl(74 55% 92%)"
                        : "hsl(0 0% 100%)",
                }}
                transition={{ duration: 0.25 }}
                className="relative border rounded-[12px] p-5 lg:p-6 flex items-center gap-5"
            >
                <span className="mono text-[10.5px] tracking-[0.16em] text-oas-forest-soft w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-serif-display text-[22px] leading-none text-oas-ink">
                            {layer.title}
                        </span>
                        {active && (
                            <motion.span
                                layoutId="stack-active"
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: "hsl(var(--oas-forest))" }}
                            />
                        )}
                    </div>
                    <p className="mt-1 text-[13.5px] text-oas-ink-soft truncate">
                        {layer.subtitle}
                    </p>
                </div>

                <svg
                    className="w-4 h-4 text-oas-ink-soft group-hover:text-oas-forest transition-colors shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </button>
    );
}
