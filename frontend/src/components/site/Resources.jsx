import { motion } from "framer-motion";
import { BookOpen, Github } from "lucide-react";
import Section, { SectionHeader } from "@/components/site/Section";

const RESOURCES = [
    {
        id: "gitbook",
        eyebrow: "DOCUMENTATION",
        title: "Documentation",
        body: "Explore technical documentation, implementation guidance, and architecture references.",
        cta: "Read the documentation",
        href: "#",
        icon: BookOpen,
    },
    {
        id: "github",
        eyebrow: "SOURCE",
        title: "GitHub",
        body: "Browse the source code, contribute to the project, and explore the open-source ecosystem.",
        cta: "Browse the repositories",
        href: "#",
        icon: Github,
    },
];

export default function Resources() {
    return (
        <section
            id="resources"
            data-testid="section-resources"
            className="relative py-24 lg:py-32 oas-band-tint"
        >
            <Section>
                <SectionHeader
                    eyebrow="Resources"
                    title={<>Continue Exploring.</>}
                    description="Open Agri Stack is developed in the open. Explore the documentation, architecture, implementation guidance, and source code."
                />

                <div className="mt-14 lg:mt-20 grid md:grid-cols-2 gap-5">
                    {RESOURCES.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <motion.a
                                key={r.id}
                                data-testid={`resource-${r.id}`}
                                href={r.href}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group relative oas-card p-8 lg:p-10 flex flex-col min-h-[300px] overflow-hidden hover:border-oas-forest/50 transition-colors"
                            >
                                {/* Green accent underline */}
                                <div
                                    aria-hidden
                                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                    style={{ background: "hsl(var(--oas-lime))" }}
                                />

                                <div className="flex items-center justify-between mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl grid place-items-center"
                                        style={{
                                            background: "hsl(var(--oas-lime-tint))",
                                            color: "hsl(var(--oas-forest))",
                                            border: "1px solid hsl(var(--oas-lime-soft))",
                                        }}
                                    >
                                        <Icon size={22} strokeWidth={1.6} />
                                    </div>
                                    <div
                                        className="mono text-[10.5px] tracking-[0.16em]"
                                        style={{ color: "hsl(var(--oas-forest-soft))" }}
                                    >
                                        {r.eyebrow}
                                    </div>
                                </div>

                                <h3 className="font-serif-display text-[42px] lg:text-[52px] leading-none text-oas-ink">
                                    {r.title}
                                </h3>
                                <p className="mt-4 text-[15.5px] leading-[1.6] text-oas-ink-soft max-w-[440px] flex-1">
                                    {r.body}
                                </p>

                                <div
                                    className="mt-6 relative flex items-center gap-2 text-[14px] font-medium"
                                    style={{ color: "hsl(var(--oas-forest))" }}
                                >
                                    <span className="group-hover:mr-1 transition-all">
                                        {r.cta}
                                    </span>
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
                        );
                    })}
                </div>
            </Section>
        </section>
    );
}
