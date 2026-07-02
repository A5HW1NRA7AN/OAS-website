export default function Section({ children, className = "", id }) {
    return (
        <div id={id} className={`max-w-[1240px] mx-auto px-6 lg:px-10 ${className}`}>
            {children}
        </div>
    );
}

/**
 * Consistent header shared by every chapter — gives the site rhythm.
 */
export function SectionHeader({ eyebrow, title, description, align = "left" }) {
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
    return (
        <div className={`max-w-[720px] ${alignClass}`}>
            {eyebrow && (
                <div
                    className="oas-eyebrow mb-4 flex items-center gap-2"
                    style={align === "center" ? { justifyContent: "center" } : {}}
                >
                    <span className="w-4 h-px bg-oas-ink-soft" />
                    {eyebrow}
                </div>
            )}
            <h2 className="font-serif-display text-[38px] sm:text-[46px] lg:text-[54px] leading-[1.02] tracking-[-0.015em] text-oas-ink">
                {title}
            </h2>
            {description && (
                <p className="mt-5 text-[16.5px] leading-[1.6] text-oas-ink-soft max-w-[620px]">
                    {description}
                </p>
            )}
        </div>
    );
}

/**
 * Chapter transition — the connective tissue between sections.
 * Renders a labelled hairline that visually "hands off" from one chapter
 * to the next, reinforcing the "continuous scroll narrative" mandate.
 */
export function ChapterTransition({ from, to, note }) {
    return (
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
            <div className="flex items-center gap-5">
                <span className="oas-eyebrow whitespace-nowrap">{from}</span>
                <span className="flex-1 h-px bg-oas-border relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-oas-accent" />
                </span>
                {note && (
                    <span className="hidden md:inline text-[12.5px] text-oas-ink-soft max-w-[380px]">
                        {note}
                    </span>
                )}
                <span className="flex-1 h-px bg-oas-border" />
                <span className="oas-eyebrow whitespace-nowrap text-oas-ink">
                    {to} ↓
                </span>
            </div>
        </div>
    );
}
