import { motion } from "framer-motion";
import { Landmark, IdCard, Network, Route, Sparkles } from "lucide-react";
import Section, { SectionHeader } from "@/components/site/Section";
import { APPLICATIONS } from "@/data/architecture";

const ICON_MAP = {
    Landmark,
    IdCard,
    Network,
    Route,
    Sparkles,
};

/**
 * Composable Applications — premium value-prop cards.
 * No composer, no coverage %, no progress bars.
 * This section communicates what OAS enables, not project progress.
 */
export default function ComposableApplications() {
    return (
        <section id="build" data-testid="section-build" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="Build with Open Agri Stack"
                    title={<>Composable Applications.</>}
                    description="Applications are created by combining reusable infrastructure rather than building isolated systems. Open Agri Stack enables organizations to assemble solutions using interoperable building blocks."
                />

                <div className="mt-14 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {APPLICATIONS.map((app, i) => (
                        <AppCard key={app.id} app={app} index={i} />
                    ))}
                    {/* Bookend card — invitation to compose */}
                    <ComposeCard />
                </div>
            </Section>
        </section>
    );
}

function AppCard({ app, index }) {
    const Icon = ICON_MAP[app.icon] || Sparkles;
    return (
        <motion.article
            data-testid={`application-${app.id}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative oas-card p-7 lg:p-8 flex flex-col min-h-[280px] overflow-hidden hover:border-oas-forest/40 transition-colors"
        >
            {/* Accent underline on hover */}
            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: "hsl(var(--oas-lime))" }}
            />

            {/* Icon */}
            <div
                className="w-11 h-11 rounded-xl grid place-items-center mb-6 transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                    background: "hsl(var(--oas-lime-tint))",
                    color: "hsl(var(--oas-forest))",
                    border: "1px solid hsl(var(--oas-lime-soft))",
                }}
            >
                <Icon size={20} strokeWidth={1.6} />
            </div>

            <h3 className="font-serif-display text-[24px] lg:text-[26px] leading-[1.1] text-oas-ink">
                {app.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-oas-ink-soft flex-1">
                {app.blurb}
            </p>

            <div className="mt-6 pt-5 border-t border-oas-border flex items-center justify-between">
                <span className="mono text-[10px] tracking-[0.16em] text-oas-forest-soft">
                    OAS · APPLICATION
                </span>
                <svg
                    className="w-4 h-4 text-oas-ink-soft group-hover:translate-x-1 group-hover:text-oas-forest transition-all"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </motion.article>
    );
}

function ComposeCard() {
    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="relative rounded-[14px] overflow-hidden min-h-[280px] p-7 lg:p-8 flex flex-col"
            style={{
                background:
                    "linear-gradient(135deg, hsl(var(--oas-ink)) 0%, hsl(200 22% 18%) 100%)",
                color: "hsl(var(--oas-bg))",
            }}
            data-testid="application-compose"
        >
            {/* Subtle grid */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.05]"
                viewBox="0 0 400 400"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <pattern id="oas-compose-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#oas-compose-grid)" />
            </svg>

            <div className="relative">
                <div
                    className="oas-eyebrow"
                    style={{ color: "hsl(var(--oas-lime))" }}
                >
                    Compose your own
                </div>
                <h3 className="mt-4 font-serif-display text-[26px] lg:text-[30px] leading-[1.05]">
                    Assemble applications from the shared stack.
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-oas-bg/70 max-w-[280px]">
                    Explore the registries, catalogues and protocols that let you
                    build without rebuilding.
                </p>
            </div>

            <a
                href="#registries"
                className="mt-auto relative inline-flex items-center gap-2 text-[13.5px] font-medium"
                style={{ color: "hsl(var(--oas-lime))" }}
            >
                Explore the building blocks
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
        </motion.article>
    );
}
