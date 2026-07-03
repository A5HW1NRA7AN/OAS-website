import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { NAV_SECTIONS } from "@/data/architecture";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("hero");
    const [open, setOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 12);
            const y = window.scrollY + 140;
            let current = "hero";
            for (const s of NAV_SECTIONS) {
                const el = document.getElementById(s.id);
                if (el && el.offsetTop <= y) current = s.id;
            }
            setActive(current);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
        setOpen(false);
    };

    return (
        <header
            data-testid="site-nav"
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-oas-bg/80 backdrop-blur-md border-b border-oas-border"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
                <button
                    data-testid="nav-logo"
                    onClick={() => scrollTo("hero")}
                    className="flex items-center gap-3 group"
                    aria-label="Open Agri Stack — home"
                >
                    <img
                        src="/oas-logo.png"
                        alt="Open Agri Stack"
                        className="h-9 w-9 rounded-md object-contain bg-oas-ink p-1"
                    />
                    <span className="hidden sm:inline font-serif-display text-[22px] leading-none text-oas-ink">
                        Open Agri Stack
                    </span>
                </button>

                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_SECTIONS.map((s) => (
                        <button
                            key={s.id}
                            data-testid={`nav-item-${s.id}`}
                            onClick={() => scrollTo(s.id)}
                            className="relative px-3 py-2 text-[13.5px] text-oas-ink-soft hover:text-oas-ink transition-colors flex items-center gap-1.5"
                        >
                            <span className="mono text-[9.5px] text-oas-ink-soft/60">
                                {s.chapter}
                            </span>
                            {s.label}
                            {active === s.id && (
                                <motion.span
                                    layoutId="nav-active"
                                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                                    style={{ background: "hsl(var(--oas-lime))" }}
                                />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-2">
                    <a
                        data-testid="nav-github"
                        href="#"
                        className="oas-chip hover:oas-chip-accent transition-colors"
                    >
                        GitHub ↗
                    </a>
                    <a
                        data-testid="nav-gitbook"
                        href="#"
                        className="oas-btn-primary !py-2 !text-[13px]"
                    >
                        Documentation
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>

                <button
                    data-testid="nav-mobile-toggle"
                    className="lg:hidden w-10 h-10 grid place-items-center border border-oas-border rounded-full"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle navigation"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            <motion.div
                className="h-[2px] origin-left"
                style={{
                    scaleX: scrollYProgress,
                    background: "hsl(var(--oas-lime))",
                }}
            />

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden bg-oas-bg border-t border-oas-border"
                    >
                        <div className="px-6 py-4 flex flex-col">
                            {NAV_SECTIONS.map((s) => (
                                <button
                                    key={s.id}
                                    data-testid={`nav-mobile-${s.id}`}
                                    onClick={() => scrollTo(s.id)}
                                    className="text-left py-3 border-b border-oas-border text-oas-ink flex items-center gap-3"
                                >
                                    <span className="mono text-[10.5px] text-oas-ink-soft">
                                        {s.chapter}
                                    </span>
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
