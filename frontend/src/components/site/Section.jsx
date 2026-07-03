export default function Section({ children, className = "", id }) {
    return (
        <div id={id} className={`max-w-[1240px] mx-auto px-6 lg:px-10 ${className}`}>
            {children}
        </div>
    );
}

/**
 * Consistent header for every chapter.
 */
export function SectionHeader({ eyebrow, title, description, align = "left" }) {
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
    return (
        <div className={`max-w-[760px] ${alignClass}`}>
            {eyebrow && (
                <div
                    className="oas-eyebrow oas-eyebrow-accent mb-5 flex items-center gap-2"
                    style={align === "center" ? { justifyContent: "center" } : {}}
                >
                    <span
                        className="w-4 h-px"
                        style={{ background: "hsl(var(--oas-forest))" }}
                    />
                    {eyebrow}
                </div>
            )}
            <h2 className="font-serif-display text-[38px] sm:text-[46px] lg:text-[56px] leading-[1.02] tracking-[-0.015em] text-oas-ink">
                {title}
            </h2>
            {description && (
                <p className="mt-5 text-[16.5px] leading-[1.6] text-oas-ink-soft max-w-[640px]">
                    {description}
                </p>
            )}
        </div>
    );
}
