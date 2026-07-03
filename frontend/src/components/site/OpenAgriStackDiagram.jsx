import { motion } from "framer-motion";

/**
 * Open Agri Stack diagram — native React/Tailwind rendering of the canonical
 * layout supplied in Design Review Round 1.
 *
 * Structure (top → bottom):
 *   1. UASI · Unified Agri Service Interface (full-width band)
 *   2. Consent Framework (centered band)
 *   3. Three columns: Agri Identity Registry · Catalogues · Transactional Registries
 *   4. Foundational Registries (full-width band with NationalID + Payment Integrators)
 *
 * A vertical "Open Agri stack" label sits on the left edge, mirroring the source.
 * All blocks are hoverable — a lightweight interaction reinforces the
 * "reveal the stack" philosophy without inventing new information.
 */
export default function OpenAgriStackDiagram() {
    return (
        <div
            data-testid="oas-diagram"
            className="relative oas-card p-5 lg:p-8"
        >
            {/* Diagram grid */}
            <div className="relative grid grid-cols-[24px_1fr] gap-3 lg:gap-5">
                {/* Left rail: vertical "Open Agri Stack" label */}
                <div
                    className="flex items-center justify-center"
                    aria-hidden
                >
                    <span
                        className="mono text-[10.5px] tracking-[0.24em] uppercase text-oas-forest-soft"
                        style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                        }}
                    >
                        Open Agri Stack
                    </span>
                </div>

                {/* Right side: the actual diagram */}
                <div className="flex flex-col gap-3 lg:gap-4">
                    {/* Row 1 — UASI (full width) */}
                    <StackBand
                        code="S6"
                        title="Unified Agri Service Interface (UASI)"
                        variant="primary"
                        testid="oas-block-uasi"
                    />

                    {/* Row 2 — Consent Framework (centered) */}
                    <div className="flex justify-center">
                        <div className="w-full lg:w-2/3">
                            <StackBand
                                code="S5"
                                title="Consent Framework"
                                variant="accent"
                                testid="oas-block-consent"
                            />
                        </div>
                    </div>

                    {/* Row 3 — three columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.2fr_1fr] gap-3 lg:gap-4">
                        <IdentityColumn />
                        <CataloguesColumn />
                        <TransactionalColumn />
                    </div>

                    {/* Row 4 — Foundational Registries (full width, split) */}
                    <FoundationalRow />
                </div>
            </div>
        </div>
    );
}

/* ─────────── Bands & tiles ─────────── */

function StackBand({ code, title, variant = "default", testid }) {
    const styles = {
        primary: {
            background: "hsl(var(--oas-forest))",
            color: "hsl(var(--oas-bg))",
            border: "1px solid hsl(var(--oas-forest))",
        },
        accent: {
            background: "hsl(var(--oas-lime))",
            color: "hsl(var(--oas-forest))",
            border: "1px solid hsl(var(--oas-lime-soft))",
        },
        default: {
            background: "hsl(var(--oas-surface))",
            color: "hsl(var(--oas-ink))",
            border: "1px solid hsl(var(--oas-border-strong))",
        },
    }[variant];

    return (
        <motion.div
            data-testid={testid}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            style={styles}
            className="rounded-[10px] px-5 py-4 flex items-center justify-between"
        >
            <span
                className="mono text-[10.5px] tracking-[0.18em]"
                style={{ opacity: 0.75 }}
            >
                {code}
            </span>
            <span className="font-serif-display text-[20px] lg:text-[22px] leading-none">
                {title}
            </span>
            <span
                className="mono text-[10.5px] tracking-[0.18em] opacity-0"
                aria-hidden
            >
                {code}
            </span>
        </motion.div>
    );
}

function GroupCard({ label, icon, children, testid, span = "col-span-1" }) {
    return (
        <div
            data-testid={testid}
            className={`relative oas-card-tint p-3.5 lg:p-4 ${span}`}
        >
            <div className="flex items-center gap-2.5 mb-3">
                <span
                    className="w-6 h-6 rounded-md grid place-items-center shrink-0"
                    style={{
                        background: "hsl(var(--oas-forest))",
                        color: "hsl(var(--oas-lime))",
                    }}
                >
                    {icon}
                </span>
                <span className="mono text-[10.5px] tracking-[0.14em] uppercase text-oas-forest">
                    {label}
                </span>
            </div>
            {children}
        </div>
    );
}

function Tile({ label, testid, size = "md" }) {
    const heights = {
        sm: "min-h-[44px]",
        md: "min-h-[52px]",
        lg: "min-h-[60px]",
    };
    return (
        <motion.div
            data-testid={testid}
            whileHover={{ y: -1, scale: 1.01 }}
            transition={{ duration: 0.18 }}
            className={`rounded-[8px] px-3 py-2.5 flex items-center justify-center text-center bg-oas-surface border border-oas-border hover:border-oas-forest/50 hover:bg-oas-lime-tint transition-colors cursor-default ${heights[size]}`}
        >
            <span className="text-[13px] leading-tight text-oas-ink font-medium">
                {label}
            </span>
        </motion.div>
    );
}

/* ─────────── Columns ─────────── */

const IDENTITY_ITEMS = [
    "Farmer",
    "Market Agents",
    "Extension Agents",
    "FPO",
    "Nodal Officers",
];

function IdentityColumn() {
    return (
        <GroupCard
            label="Agri Identity Registry"
            testid="oas-group-identity"
            icon={<StackIcon />}
        >
            <div className="flex flex-col gap-2">
                {IDENTITY_ITEMS.map((label) => (
                    <Tile
                        key={label}
                        label={label}
                        testid={`oas-tile-identity-${slug(label)}`}
                    />
                ))}
            </div>
        </GroupCard>
    );
}

const CATALOGUE_ITEMS = [
    "Crop Category",
    "Location",
    "Extension Equipment",
    "Crop Identity",
    "Seed",
    "Schemes",
    "Crop Type",
    "Fertilizer",
    "Soil",
    "Livestock",
    "Pesticide",
    "Season",
];

function CataloguesColumn() {
    return (
        <GroupCard
            label="Catalogues"
            testid="oas-group-catalogues"
            icon={<BookIcon />}
        >
            <div className="grid grid-cols-3 gap-2">
                {CATALOGUE_ITEMS.map((label) => (
                    <Tile
                        key={label}
                        label={label}
                        testid={`oas-tile-catalogue-${slug(label)}`}
                        size="sm"
                    />
                ))}
            </div>
        </GroupCard>
    );
}

const TRANSACTIONAL_ITEMS = ["Crop Sown", "Plot Owning", "Livestock Holding"];

function TransactionalColumn() {
    return (
        <GroupCard
            label="Transactional Registries"
            testid="oas-group-transactional"
            icon={<LedgerIcon />}
        >
            <div className="flex flex-col gap-2">
                {TRANSACTIONAL_ITEMS.map((label) => (
                    <Tile
                        key={label}
                        label={label}
                        testid={`oas-tile-transactional-${slug(label)}`}
                        size="lg"
                    />
                ))}
            </div>
        </GroupCard>
    );
}

/* ─────────── Foundational row ─────────── */

function FoundationalRow() {
    return (
        <div
            data-testid="oas-group-foundational"
            className="rounded-[12px] border border-oas-border-strong bg-oas-section-strong/60 p-3.5 lg:p-4"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-3 lg:gap-4 items-center">
                <div className="flex items-center gap-2.5">
                    <span
                        className="w-6 h-6 rounded-md grid place-items-center shrink-0"
                        style={{
                            background: "hsl(var(--oas-forest))",
                            color: "hsl(var(--oas-lime))",
                        }}
                    >
                        <StackIcon />
                    </span>
                    <span className="mono text-[10.5px] tracking-[0.14em] uppercase text-oas-forest">
                        Foundational
                        <br className="hidden lg:inline" /> Registries
                    </span>
                </div>
                <Tile label="NationalID" testid="oas-tile-foundational-nationalid" />
                <Tile
                    label="Payment Integrators"
                    testid="oas-tile-foundational-payments"
                />
            </div>
        </div>
    );
}

/* ─────────── Icons (inline SVG) ─────────── */

function StackIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L2 5l6 3 6-3-6-3zM2 8l6 3 6-3M2 11l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function BookIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 3h6a2 2 0 012 2v9H5a2 2 0 01-2-2V3zM11 5h2v9h-2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
    );
}
function LedgerIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="2.5" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M6 6h4M6 8h4M6 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    );
}

function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
