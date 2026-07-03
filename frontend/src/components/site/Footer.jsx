import Section from "@/components/site/Section";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-oas-ink text-oas-bg pt-20 pb-10 mt-8"
        >
            <Section>
                <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 26 26"
                                fill="none"
                            >
                                <rect
                                    x="1"
                                    y="1"
                                    width="24"
                                    height="24"
                                    rx="6"
                                    fill="hsl(var(--oas-bg))"
                                    stroke="hsl(var(--oas-bg))"
                                    strokeOpacity="0.2"
                                />
                                <circle
                                    cx="13"
                                    cy="13"
                                    r="3.5"
                                    fill="hsl(var(--oas-accent))"
                                />
                                <circle
                                    cx="13"
                                    cy="13"
                                    r="6.5"
                                    stroke="hsl(var(--oas-ink))"
                                    strokeOpacity="0.4"
                                    strokeDasharray="2 2"
                                />
                            </svg>
                            <span className="font-serif-display text-[22px]">
                                Open Agri Stack
                            </span>
                        </div>
                        <p className="mt-5 max-w-[380px] text-[14.5px] leading-[1.6] text-oas-bg/70">
                            Open Agri Stack is an open Digital Public Infrastructure
                            initiative that enables interoperable agricultural
                            ecosystems through reusable building blocks, shared
                            standards, and open collaboration.
                        </p>
                        <p className="mt-8 mono text-[10.5px] tracking-[0.14em] text-oas-bg/50">
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
                    <div className="mono text-[10.5px] tracking-[0.14em] text-oas-bg/50">
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
            <div className="mono text-[10.5px] tracking-[0.14em] text-oas-bg/60 mb-4">
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
