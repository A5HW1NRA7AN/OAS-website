import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/site/Section";

const RESOURCES = [
    {
        id: "gitbook",
        eyebrow: "DOCUMENTATION",
        title: "GitBook",
        body: "Specifications, architecture references, integration guides and the full narrative of Open Agri Stack.",
        cta: "Read the docs",
        href: "#",
    },
    {
        id: "github",
        eyebrow: "SOURCE",
        title: "GitHub",
        body: "Open source reference implementations, schemas, SDKs, and the open governance for every building block.",
        cta: "Browse the repositories",
        href: "#",
    },
];

export default function Resources() {
    return (
        <section
            id="resources"
            data-testid="section-resources"
            className="relative py-24 lg:py-32"
        >
            <Section>
                <SectionHeader
                    eyebrow="06 · Resources"
                    title={<>Continue building.</>}
                    description="Everything from specifications to reference code lives in the open. Pick the door that suits how you learn best."
                />

                <div className="mt-14 lg:mt-20 grid md:grid-cols-2 gap-5">
                    {RESOURCES.map((r, i) => (
                        <motion.a
                            key={r.id}
                            data-testid={`resource-${r.id}`}
                            href={r.href}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group relative oas-card p-8 lg:p-10 flex flex-col min-h-[280px] overflow-hidden hover:border-oas-ink transition-colors"
                        >
                            <div className="absolute inset-0 oas-grid-bg opacity-30 pointer-events-none" />
                            <div className="relative">
                                <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                                    {r.eyebrow}
                                </div>
                                <h3 className="mt-4 font-serif-display text-[46px] lg:text-[56px] leading-none text-oas-ink">
                                    {r.title}
                                </h3>
                                <p className="mt-4 text-[15.5px] leading-[1.6] text-oas-ink-soft max-w-[440px]">
                                    {r.body}
                                </p>
                            </div>
                            <div className="mt-auto relative flex items-center gap-2 text-[14px] text-oas-ink font-medium">
                                <span className="group-hover:mr-1 transition-all">{r.cta}</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="group-hover:translate-x-0.5 transition-transform"
                                >
                                    <path
                                        d="M3 8h10M9 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Section>
        </section>
    );
}
