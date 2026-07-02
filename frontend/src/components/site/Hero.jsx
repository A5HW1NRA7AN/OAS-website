import { motion } from "framer-motion";
import Section from "@/components/site/Section";

export default function Hero() {
    return (
        <section
            id="hero"
            data-testid="section-hero"
            className="relative pt-[112px] pb-24 lg:pt-[152px] lg:pb-32 overflow-hidden"
        >
            <div className="absolute inset-0 oas-dot-bg opacity-[0.55] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-oas-bg via-oas-bg to-transparent pointer-events-none" />

            <Section className="relative">
                <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="oas-chip">
                                <span className="w-1.5 h-1.5 rounded-full bg-oas-accent animate-oas-pulse" />
                                Part of the OpenAgriNet ecosystem
                            </span>
                            <span className="oas-eyebrow hidden sm:inline">
                                00 · Overview
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.05 }}
                            className="font-serif-display text-[46px] sm:text-[58px] lg:text-[72px] leading-[0.98] tracking-[-0.02em] text-oas-ink"
                        >
                            The open, composable{" "}
                            <span className="italic text-oas-ink-soft">
                                stack
                            </span>{" "}
                            for the digital agriculture{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">era.</span>
                                <span className="absolute inset-x-0 bottom-1 h-[10px] bg-oas-accent/40 -z-0 rounded-sm" />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="mt-6 text-[17px] lg:text-[19px] leading-[1.55] text-oas-ink-soft max-w-[560px]"
                        >
                            Open Agri Stack is public digital infrastructure for
                            agriculture — a layered set of registries, catalogues
                            and protocols that lets governments, institutions and
                            builders assemble applications instead of rebuilding them.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="mt-9 flex flex-wrap items-center gap-3"
                        >
                            <a
                                href="#architecture"
                                data-testid="hero-cta-architecture"
                                className="inline-flex items-center gap-2 rounded-full bg-oas-ink text-oas-bg px-5 py-3 text-[14px] font-medium hover:bg-oas-ink-soft transition-colors"
                            >
                                Explore the architecture
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                data-testid="hero-cta-docs"
                                className="inline-flex items-center gap-2 rounded-full border border-oas-border bg-oas-surface text-oas-ink px-5 py-3 text-[14px] font-medium hover:bg-oas-section transition-colors"
                            >
                                View documentation ↗
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.55 }}
                            className="mt-14 grid grid-cols-3 gap-6 max-w-[520px]"
                        >
                            {[
                                ["L1", "Foundational DPI"],
                                ["L2", "Agri Building Blocks"],
                                ["L3", "Applications"],
                            ].map(([code, label]) => (
                                <div key={code} className="border-t border-oas-border pt-3">
                                    <div className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                                        {code}
                                    </div>
                                    <div className="mt-1 text-[13.5px] text-oas-ink">
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <HeroBlueprint />
                </div>
            </Section>
        </section>
    );
}

function HeroBlueprint() {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.22, delayChildren: 0.4 } },
            }}
            className="relative aspect-[5/6] lg:aspect-[4/5] w-full oas-card p-6 lg:p-8 overflow-hidden"
        >
            <div className="absolute inset-0 oas-grid-bg opacity-40 pointer-events-none" />
            <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
                <span className="mono text-[10.5px] tracking-[0.14em] text-oas-ink-soft">
                    OAS · REFERENCE BLUEPRINT
                </span>
                <span className="oas-chip !py-0.5 !text-[10px]">v1.0</span>
            </div>

            <svg viewBox="0 0 400 500" className="relative w-full h-full mt-3" aria-hidden>
                <motion.g
                    stroke="hsl(var(--oas-ink))"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    fill="none"
                    variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        show: { pathLength: 1, opacity: 1, transition: { duration: 1.2, delay: 1.1 } },
                    }}
                >
                    <path d="M80,380 L120,290" />
                    <path d="M160,380 L180,290" />
                    <path d="M240,380 L240,290" />
                    <path d="M320,380 L300,290" />
                    <path d="M120,240 L150,150" />
                    <path d="M200,240 L200,150" />
                    <path d="M280,240 L260,150" />
                </motion.g>

                <Layer y={110} label="L3 · APPLICATIONS">
                    {[110, 200, 290].map((x, i) => (
                        <Node
                            key={i}
                            x={x}
                            y={130}
                            label={["Advisory", "Credit", "Market"][i]}
                            accent={i === 1}
                        />
                    ))}
                </Layer>

                <Layer y={250} label="L2 · AGRICULTURE">
                    {[110, 200, 290].map((x, i) => (
                        <Node key={i} x={x} y={270} label={["Farmer", "Plot", "Crop"][i]} />
                    ))}
                </Layer>

                <Layer y={390} label="L1 · FOUNDATION">
                    {[80, 160, 240, 320].map((x, i) => (
                        <Node
                            key={i}
                            x={x}
                            y={410}
                            label={["ID", "Consent", "UASI", "Payments"][i]}
                            small
                        />
                    ))}
                </Layer>
            </svg>

            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <span className="mono text-[10px] tracking-[0.14em] text-oas-ink-soft">
                    scroll to reveal →
                </span>
                <span className="mono text-[10px] tracking-[0.14em] text-oas-ink-soft">
                    03 LAYERS
                </span>
            </div>
        </motion.div>
    );
}

function Layer({ children, label, y }) {
    return (
        <motion.g
            variants={{
                hidden: { opacity: 0, y: 6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
        >
            <line x1="20" x2="380" y1={y - 34} y2={y - 34} stroke="hsl(var(--oas-border))" />
            <text
                x="20"
                y={y - 40}
                fontSize="9.5"
                letterSpacing="1.5"
                fill="hsl(var(--oas-ink-soft))"
                fontFamily="JetBrains Mono, monospace"
            >
                {label}
            </text>
            {children}
        </motion.g>
    );
}

function Node({ x, y, label, accent, small }) {
    const w = small ? 62 : 76;
    const h = small ? 26 : 34;
    return (
        <motion.g
            variants={{
                hidden: { opacity: 0, y: 6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
        >
            <rect
                x={x - w / 2}
                y={y - h / 2}
                width={w}
                height={h}
                rx="6"
                fill={accent ? "hsl(var(--oas-accent))" : "hsl(var(--oas-surface))"}
                stroke="hsl(var(--oas-border))"
            />
            <text
                x={x}
                y={y + 3.5}
                textAnchor="middle"
                fontSize={small ? "9.5" : "11"}
                fontFamily="Inter Tight, sans-serif"
                fill="hsl(var(--oas-ink))"
                fontWeight="500"
            >
                {label}
            </text>
        </motion.g>
    );
}
