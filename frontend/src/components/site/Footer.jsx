import Section from "@/components/site/Section";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative pt-20 pb-10 mt-8"
            style={{
                background: "hsl(var(--oas-ink))",
                color: "hsl(var(--oas-bg))",
            }}
        >
            {/* Top accent hairline */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px"
                style={{
                    background:
                        "linear-gradient(to right, transparent, hsl(var(--oas-lime) / 0.7), transparent)",
                }}
            />

            <Section>
                <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src="/oas-logo-clean.png"
                                alt="Open Agri Stack"
                                className="h-11 w-11 rounded-md object-contain bg-black/40 p-1"
                            />
                            <span className="font-serif-display text-[24px]">
                                Open Agri Stack
                            </span>
                        </div>
                        <p className="mt-5 max-w-[380px] text-[14.5px] leading-[1.6] text-oas-bg/70">
                            Open Agri Stack is an open Digital Public Infrastructure
                            initiative that enables interoperable agricultural
                            ecosystems through reusable building blocks, shared
                            standards, and open collaboration.
                        </p>
                        <p
                            className="mt-8 mono text-[10.5px] tracking-[0.16em]"
                            style={{ color: "hsl(var(--oas-lime))" }}
                        >
                            REVEAL THE STACK · BUILD UNDERSTANDING
                        </p>
                    </div>

                    <FooterCol
                        title="Explore"
                        links={[
                            { label: "Overview", href: "#hero" },
                            { label: "Reference Architecture", href: "#architecture" },
                            { label: "Explore the Stack", href: "#stack" },
                            { label: "Core Registries", href: "#registries" },
                        ]}
                    />
                    <FooterCol
                        title="Build"
                        links={[
                            { label: "Composable Applications", href: "#build" },
                            { label: "Documentation", href: "#" },
                            { label: "GitHub", href: "#" },
                        ]}
                    />
                    <FooterCol
                        title="Ecosystem"
                        links={[
                            { label: "OpenAgriNet", href: "#" },
                            { label: "DPI", href: "#" },
                            { label: "Partners", href: "#" },
                            { label: "Contact", href: "#" },
                        ]}
                    />
                </div>

                <div className="mt-16 pt-6 border-t border-oas-bg/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="mono text-[10.5px] tracking-[0.16em] text-oas-bg/50">
                        © OPEN AGRI STACK 2026
                    </div>
                    <div className="flex items-center gap-5 text-[13px] text-oas-bg/70">
                        <a href="#" className="hover:text-oas-bg">
                            Governance
                        </a>
                        <a href="#" className="hover:text-oas-bg">
                            License
                        </a>
                        <a href="#" className="hover:text-oas-bg">
                            Contribute
                        </a>
                    </div>
                </div>
            </Section>
        </footer>
    );
}

function FooterCol({ title, links }) {
    return (
        <div>
            <div
                className="mono text-[10.5px] tracking-[0.16em] mb-4"
                style={{ color: "hsl(var(--oas-lime))" }}
            >
                {title.toUpperCase()}
            </div>
            <ul className="space-y-2.5">
                {links.map((l) => (
                    <li key={l.label}>
                        <a
                            href={l.href}
                            className="text-[14px] text-oas-bg/85 hover:text-oas-bg transition-colors"
                        >
                            {l.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
