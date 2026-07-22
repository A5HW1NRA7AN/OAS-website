import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";
import { REFERENCE_LAYERS } from "@/data/architecture";

/**
 * Reference Architecture — presented as three named, stacked layer cards.
 * No invented diagrams, no L1/L2/L3 labels. Canonical Mermaid supersedes
 * this rendering when supplied.
 */
export default function ReferenceArchitecture() {
    return (
        <section
            id="architecture"
            data-testid="section-architecture"
            className="relative py-24 lg:py-32 oas-band-tint"
        >
            <Section>
                <SectionHeader
                    eyebrow="Reference Architecture"
                    title={<>Reference Architecture</>}
                    description="The Open Agri Stack Reference Architecture is organized into three interoperable layers. Each layer builds upon the one below it, creating a modular foundation for digital agriculture applications."
                />

                <div className="mt-14 lg:mt-20 relative">
                    {/* Vertical connector thread */}
                    <div
                        aria-hidden
                        className="absolute left-8 lg:left-10 top-6 bottom-6 w-px"
                        style={{
                            background:
                                "linear-gradient(to bottom, transparent, hsl(var(--oas-lime-soft)) 20%, hsl(var(--oas-lime-soft)) 80%, transparent)",
                        }}
                    />

                    <div className="flex flex-col gap-4 lg:gap-5">
                        {REFERENCE_LAYERS.map((layer, i) => (
                            <LayerCard key={layer.id} layer={layer} index={i} />
                        ))}
                    </div>
                </div>
            </Section>
        </section>
    );
}

function LayerCard({ layer, index }) {
    return (
        <motion.article
            data-testid={`layer-${layer.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative pl-16 lg:pl-20"
        >
            {/* Node marker on the thread */}
            <div className="absolute left-8 lg:left-10 top-8 -translate-x-1/2 flex flex-col items-center">
                <div
                    className="w-3.5 h-3.5 rounded-full border-2 bg-oas-bg"
                    style={{
                        borderColor: "hsl(var(--oas-forest))",
                    }}
                >
                    <div
                        className="w-full h-full rounded-full scale-[0.5]"
                        style={{ background: "hsl(var(--oas-lime))" }}
                    />
                </div>
            </div>

            <div className="oas-card p-7 lg:p-9 relative overflow-hidden group hover:border-oas-forest/40 transition-colors">
                {/* Accent strip */}
                <div
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: "hsl(var(--oas-lime))" }}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <h3 className="font-serif-display text-[30px] lg:text-[36px] leading-none text-oas-ink">
                        {layer.title}
                    </h3>
                </div>

                <p className="text-[15.5px] leading-[1.65] text-oas-ink-soft max-w-[820px]">
                    {layer.summary}
                </p>

                <div className="mt-6 pt-5 border-t border-oas-border">
                    <div className="mono text-[10.5px] tracking-[0.16em] text-oas-forest-soft mb-3">
                        INCLUDES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {layer.modules.map((m) => (
                            <span
                                key={m}
                                className="oas-chip transition-all group-hover:oas-chip-accent"
                            >
                                {m}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
