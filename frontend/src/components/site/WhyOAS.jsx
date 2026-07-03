import { motion } from "framer-motion";
import { CircuitBoard, Layers, Landmark } from "lucide-react";
import Section, { SectionHeader } from "@/components/site/Section";
import { WHY_PILLARS } from "@/data/architecture";

const ICON_MAP = {
    open: CircuitBoard,
    modular: Layers,
    dpi: Landmark,
};

export default function WhyOAS() {
    return (
        <section id="why" data-testid="section-why" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="01 · Why Open Agri Stack"
                    title={<>Why Open Agri Stack?</>}
                    description="Open Agri Stack provides a shared digital foundation for agriculture by combining foundational Digital Public Infrastructure with agriculture-specific building blocks. Instead of building isolated systems from scratch, organizations can compose interoperable services using reusable components, open standards, and common registries."
                />

                <div className="mt-14 lg:mt-20 grid md:grid-cols-3 gap-4 lg:gap-5">
                    {WHY_PILLARS.map((p, i) => {
                        const Icon = ICON_MAP[p.id] || CircuitBoard;
                        return (
                            <motion.article
                                key={p.id}
                                data-testid={`why-card-${p.id}`}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="oas-card p-7 lg:p-8 flex flex-col min-h-[300px] relative overflow-hidden group hover:border-oas-forest/40 transition-colors"
                            >
                                <div
                                    aria-hidden
                                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                    style={{ background: "hsl(var(--oas-lime))" }}
                                />
                                <div className="flex items-center justify-between mb-8">
                                    <div
                                        className="w-11 h-11 rounded-xl grid place-items-center transition-transform duration-300 group-hover:-translate-y-0.5"
                                        style={{
                                            background: "hsl(var(--oas-lime-tint))",
                                            color: "hsl(var(--oas-forest))",
                                            border: "1px solid hsl(var(--oas-lime-soft))",
                                        }}
                                    >
                                        <Icon size={20} strokeWidth={1.6} />
                                    </div>
                                    <span className="mono text-[10.5px] tracking-[0.16em] text-oas-forest-soft">
                                        0{i + 1} / 03
                                    </span>
                                </div>
                                <h3 className="font-serif-display text-[28px] leading-[1.05] text-oas-ink">
                                    {p.title}
                                </h3>
                                <p className="mt-3 text-[14.5px] leading-[1.6] text-oas-ink-soft">
                                    {p.body}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </Section>
        </section>
    );
}
