import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { REGISTRY_FAMILIES } from "@/data/architecture";

/**
 * Core Registries — three canonical families, each an expandable module.
 * No diagram in this section per Design Review Round 1.
 * The three tabs behave like a tab selector: only one open at a time on
 * desktop; on mobile, each is an accordion.
 */
export default function CoreRegistries() {
    const [openId, setOpenId] = useState("identity");

    return (
        <section
            id="registries"
            data-testid="section-registries"
            className="relative py-24 lg:py-32 oas-band-strong"
        >
            <Section>
                <SectionHeader
                    eyebrow="04 · Registry Atlas"
                    title={<>Core Registries.</>}
                    description="Registries provide the trusted foundation for interoperability within Open Agri Stack. Each registry is designed as a reusable, standards-based building block that can integrate with compliant implementations."
                />

                {/* Tabs — desktop */}
                <div
                    className="hidden lg:flex mt-14 lg:mt-20 items-stretch gap-2 p-1.5 rounded-full oas-card w-fit"
                    role="tablist"
                >
                    {REGISTRY_FAMILIES.map((f) => (
                        <button
                            key={f.id}
                            role="tab"
                            aria-selected={openId === f.id}
                            data-testid={`registry-tab-${f.id}`}
                            onClick={() => setOpenId(f.id)}
                            className={`relative px-5 py-2.5 rounded-full text-[13.5px] font-medium transition-colors ${
                                openId === f.id
                                    ? "text-oas-bg"
                                    : "text-oas-ink hover:text-oas-forest"
                            }`}
                        >
                            {openId === f.id && (
                                <motion.span
                                    layoutId="registry-tab-pill"
                                    className="absolute inset-0 rounded-full -z-0"
                                    style={{
                                        background: "hsl(var(--oas-forest))",
                                    }}
                                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                                />
                            )}
                            <span className="relative z-10">{f.title}</span>
                        </button>
                    ))}
                </div>

                {/* Desktop tab content */}
                <div className="hidden lg:block mt-8">
                    <AnimatePresence mode="wait">
                        {REGISTRY_FAMILIES.filter((f) => f.id === openId).map((f) => (
                            <FamilyPanel key={f.id} family={f} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Mobile: stacked accordions */}
                <div className="lg:hidden mt-12 flex flex-col gap-3">
                    {REGISTRY_FAMILIES.map((f) => (
                        <MobileAccordion
                            key={f.id}
                            family={f}
                            isOpen={openId === f.id}
                            onToggle={() =>
                                setOpenId((cur) => (cur === f.id ? null : f.id))
                            }
                        />
                    ))}
                </div>
            </Section>
        </section>
    );
}

function FamilyPanel({ family }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="oas-card p-8 lg:p-10"
            data-testid={`registry-panel-${family.id}`}
        >
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-14 items-start">
                <div>
                    <div className="oas-eyebrow oas-eyebrow-accent mb-4">
                        Registry family
                    </div>
                    <h3 className="font-serif-display text-[36px] lg:text-[44px] leading-[1.02] text-oas-ink">
                        {family.title}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-[1.65] text-oas-ink-soft max-w-[420px]">
                        {family.blurb}
                    </p>
                    <div className="mt-6 mono text-[10.5px] tracking-[0.16em] text-oas-forest-soft">
                        {String(family.items.length).padStart(2, "0")} REGISTRIES
                    </div>
                </div>

                <div>
                    <ItemGrid items={family.items} familyId={family.id} />
                </div>
            </div>
        </motion.div>
    );
}

function ItemGrid({ items, familyId }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {items.map((label, i) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    data-testid={`registry-item-${familyId}-${slug(label)}`}
                    className="group relative rounded-[10px] border border-oas-border bg-oas-surface px-4 py-3.5 hover:border-oas-forest/50 hover:bg-oas-lime-tint transition-colors cursor-default"
                >
                    <div className="flex items-center gap-2 mb-1.5">
                        <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "hsl(var(--oas-lime))" }}
                        />
                        <span className="mono text-[9.5px] tracking-[0.16em] text-oas-forest-soft">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                    </div>
                    <div className="text-[14px] text-oas-ink leading-snug">
                        {label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function MobileAccordion({ family, isOpen, onToggle }) {
    return (
        <div
            className="oas-card overflow-hidden"
            data-testid={`registry-mobile-${family.id}`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={isOpen}
            >
                <div>
                    <div className="oas-eyebrow oas-eyebrow-accent mb-1.5">
                        {String(family.items.length).padStart(2, "0")} registries
                    </div>
                    <h3 className="font-serif-display text-[24px] leading-none text-oas-ink">
                        {family.title}
                    </h3>
                </div>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="w-8 h-8 rounded-full border border-oas-border grid place-items-center"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-0">
                            <p className="text-[14px] leading-[1.6] text-oas-ink-soft mb-4">
                                {family.blurb}
                            </p>
                            <ItemGrid items={family.items} familyId={family.id} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
