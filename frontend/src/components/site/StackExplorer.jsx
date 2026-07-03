import Section, { SectionHeader } from "@/components/site/Section";
import OpenAgriStackDiagram from "@/components/site/OpenAgriStackDiagram";

/**
 * Stack section — renders the canonical Open Agri Stack diagram supplied in
 * Design Review Round 1, translated to a native React/Tailwind component.
 * No fabricated pyramid; structure follows the source diagram exactly.
 */
export default function StackExplorer() {
    return (
        <section id="stack" data-testid="section-stack" className="relative py-24 lg:py-32">
            <Section>
                <SectionHeader
                    eyebrow="03 · The Open Agri Stack"
                    title={<>Explore the Stack.</>}
                    description="The Open Agri Stack implementation organizes core infrastructure into reusable layers that work together through secure interfaces, shared registries, and standardized data exchange."
                />

                <div className="mt-14 lg:mt-20">
                    <OpenAgriStackDiagram />
                </div>

                {/* Legend / reading guide */}
                <div className="mt-8 grid sm:grid-cols-3 gap-3 lg:gap-4 max-w-[880px]">
                    <LegendItem
                        swatch="hsl(var(--oas-forest))"
                        label="Service Interface"
                        note="UASI — the single entry point for applications."
                    />
                    <LegendItem
                        swatch="hsl(var(--oas-lime))"
                        label="Consent Layer"
                        note="Consent-driven data sharing spans every registry."
                    />
                    <LegendItem
                        swatch="hsl(var(--oas-section-strong))"
                        label="Foundational Layer"
                        note="National identity and payment rails from wider DPI."
                    />
                </div>
            </Section>
        </section>
    );
}

function LegendItem({ swatch, label, note }) {
    return (
        <div className="flex items-start gap-3">
            <span
                className="mt-1 w-3 h-3 rounded-sm shrink-0 border border-oas-border-strong"
                style={{ background: swatch }}
            />
            <div>
                <div className="text-[13.5px] font-medium text-oas-ink leading-tight">
                    {label}
                </div>
                <div className="text-[12.5px] text-oas-ink-soft leading-snug mt-0.5">
                    {note}
                </div>
            </div>
        </div>
    );
}
