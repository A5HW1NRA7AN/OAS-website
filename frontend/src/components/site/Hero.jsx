import { motion } from "framer-motion";
import Section from "@/components/site/Section";

/**
 * Hero — logo becomes the primary visual anchor.
 * No invented per-hero diagram. The living blueprint background is the
 * ambient technical layer, per Design Review Round 1.
 */
export default function Hero() {
    return (
        <section
            id="hero"
            data-testid="section-hero"
            className="relative pt-[128px] pb-24 lg:pt-[168px] lg:pb-32"
        >
            <Section className="relative">
                <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-center">
                    {/* Copy column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="oas-chip oas-chip-accent">
                                <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: "hsl(var(--oas-forest))" }}
                                />
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
                            Building the Digital{" "}
                            <span className="italic text-oas-forest-soft">
                                Public
                            </span>{" "}
                            Infrastructure for{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Agriculture.</span>
                                <span
                                    className="absolute inset-x-0 bottom-1 h-[10px] -z-0 rounded-sm"
                                    style={{
                                        background:
                                            "hsl(var(--oas-lime) / 0.45)",
                                    }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="mt-6 text-[17px] lg:text-[19px] leading-[1.55] text-oas-ink-soft max-w-[560px]"
                        >
                            Open Agri Stack (OAS) is an open, modular Digital Public
                            Infrastructure (DPI) initiative that provides interoperable
                            building blocks for agriculture. It enables governments,
                            ecosystem partners, and developers to build scalable
                            digital agricultural services on a shared,
                            standards-based foundation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="mt-10 flex flex-wrap items-center gap-3"
                        >
                            <a
                                href="#architecture"
                                data-testid="hero-cta-architecture"
                                className="oas-btn-primary"
                            >
                                Explore the Architecture
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                data-testid="hero-cta-docs"
                                className="oas-btn-ghost"
                            >
                                View Documentation ↗
                            </a>
                        </motion.div>
                    </div>

                    {/* Logo column — primary visual anchor */}
                    <LogoAnchor />
                </div>
            </Section>
        </section>
    );
}

function LogoAnchor() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative mx-auto lg:mx-0 w-full max-w-[520px] aspect-square"
        >
            {/* Soft green halo behind logo */}
            <div
                className="absolute inset-0 rounded-[36px]"
                style={{
                    background:
                        "radial-gradient(closest-side, hsl(74 55% 82% / 0.7), transparent 75%)",
                }}
            />
            {/* Corner framing marks */}
            <CornerMarks />
            <div
                className="absolute inset-4 lg:inset-6 rounded-[24px] overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, hsl(var(--oas-ink)) 0%, hsl(200 22% 18%) 100%)",
                    boxShadow:
                        "0 20px 60px -20px hsl(var(--oas-ink) / 0.35), 0 6px 18px -8px hsl(var(--oas-ink) / 0.25)",
                }}
            >
                {/* Subtle inner grid */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06]"
                    viewBox="0 0 400 400"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <pattern id="oas-hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#oas-hero-grid)" />
                </svg>

                <img
                    src="/oas-logo-clean.png"
                    alt="Open Agri Stack logo"
                    className="absolute inset-0 w-full h-full object-contain p-8 lg:p-12"
                />

                {/* Bottom metadata band */}
                <div className="absolute inset-x-6 bottom-5 flex items-center justify-between mono text-[10px] tracking-[0.18em] text-oas-bg/60">
                    <span>OAS · OFFICIAL MARK</span>
                    <span>v1.0</span>
                </div>
            </div>
        </motion.div>
    );
}

function CornerMarks() {
    const corner = "absolute w-4 h-4 border-oas-forest/40";
    return (
        <>
            <span className={`${corner} top-0 left-0 border-t border-l`} />
            <span className={`${corner} top-0 right-0 border-t border-r`} />
            <span className={`${corner} bottom-0 left-0 border-b border-l`} />
            <span className={`${corner} bottom-0 right-0 border-b border-r`} />
        </>
    );
}
