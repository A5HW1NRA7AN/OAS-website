/**
 * Open Agri Stack — architecture data (brand-approved).
 * Diagrams are NOT invented here — canonical Mermaid diagrams supersede
 * anything below. The data only supplies names, descriptions and groupings.
 */

export const NAV_SECTIONS = [
    { id: "hero", label: "Overview" },
    { id: "why", label: "Why" },
    { id: "architecture", label: "Architecture" },
    { id: "stack", label: "Stack" },
    { id: "registries", label: "Registries" },
    { id: "build", label: "Applications" },
    { id: "resources", label: "Resources" },
];

/**
 * Reference architecture layers.
 * Named layers only — no invented "L1/L2/L3" codes (per design review).
 */
export const REFERENCE_LAYERS = [
    {
        id: "applications",
        title: "Applications & Services",
        summary:
            "Composable applications including Digital Agri-Finance, Farmer Profiles, Market Discovery, Traceability, and AI-enabled Advisory Services built on reusable infrastructure.",
        modules: [
            "Digital Agri-Finance",
            "Farmer Profiles",
            "Market Discovery",
            "Traceability",
            "AI Advisory Services",
        ],
    },
    {
        id: "agriculture",
        title: "Agriculture Building Blocks",
        summary:
            "Agriculture-specific registries, standards, terminology services, agricultural data platforms, and AI assets that provide reusable capabilities for agricultural applications.",
        modules: [
            "Agri Identity Registry",
            "Transactional Registries",
            "Catalogues",
            "Terminology Services",
            "Agri Data Platforms",
            "AI Assets",
        ],
    },
    {
        id: "foundational",
        title: "Foundational Digital Public Infrastructure",
        summary:
            "Shared cross-sector capabilities including digital identity, payments, trust frameworks, data exchange, discovery, foundational data services, and language localization.",
        modules: [
            "Digital Identity",
            "Payments",
            "Trust Frameworks",
            "Data Exchange",
            "Discovery",
            "Foundational Data",
            "Localization",
        ],
    },
];

/**
 * Open Agri Stack — the six stack layers.
 * Vertical order (top → bottom) reflects composition: applications on top
 * depend on layers below. No pyramid metaphor invented — that comes from
 * the canonical Mermaid.
 */
export const STACK_LAYERS = [
    {
        id: "uasi",
        title: "UASI",
        subtitle: "Unified Agriculture Service Interface",
        detail:
            "Provides the unified interface through which applications discover and securely access agricultural services.",
    },
    {
        id: "consent",
        title: "Consent Framework",
        subtitle: "Trusted, transparent, consent-driven data sharing",
        detail:
            "Ensures trusted, transparent, and consent-driven data sharing across the ecosystem.",
    },
    {
        id: "identity",
        title: "Agri Identity Registry",
        subtitle: "Trusted identities across the ecosystem",
        detail:
            "Maintains trusted identities for farmers, extension agents, producer organizations, market participants, and other agricultural stakeholders.",
    },
    {
        id: "catalogues",
        title: "Catalogues",
        subtitle: "Standardized agricultural reference data",
        detail:
            "Provides standardized agricultural reference data including crops, livestock, inputs, locations, seasons, schemes, soil, and related catalogues.",
    },
    {
        id: "transactional",
        title: "Transactional Registries",
        subtitle: "Operational agricultural records",
        detail:
            "Captures operational agricultural records such as crop sown, plot ownership, and livestock holdings.",
    },
    {
        id: "foundational",
        title: "Foundational Registries",
        subtitle: "Foundational digital infrastructure",
        detail:
            "Integrates foundational digital infrastructure including national identity systems and payment ecosystems.",
    },
];

/**
 * Core Registries — organised into three canonical families with the exact
 * component lists supplied in Design Review Round 1.
 */
export const REGISTRY_FAMILIES = [
    {
        id: "identity",
        title: "Identity Registries",
        blurb: "Trusted identities for every participant in the agricultural ecosystem.",
        items: [
            "Farmer",
            "Market Agents",
            "Extension Agents",
            "FPO",
            "Nodal Officers",
        ],
    },
    {
        id: "catalogues",
        title: "Catalogues",
        blurb: "Standardized agricultural reference data — the shared vocabulary.",
        items: [
            "Crop Category",
            "Crop Identity",
            "Crop Type",
            "Livestock",
            "Seed",
            "Fertilizer",
            "Pesticide",
            "Location",
            "Season",
            "Soil",
            "Schemes",
            "Extension Equipment",
        ],
    },
    {
        id: "transactional",
        title: "Transactional Registries",
        blurb: "Operational records of what is actually happening on the farm.",
        items: ["Crop Sown", "Plot Owning", "Livestock Holding"],
    },
];

/**
 * Composable Applications — value-prop cards (no coverage %, no composer).
 * Icon names reference lucide-react components.
 */
export const APPLICATIONS = [
    {
        id: "finance",
        title: "Digital Agri-Finance",
        blurb:
            "Production-linked credit and insurance underwritten from verifiable farm and transaction signals.",
        icon: "Landmark",
    },
    {
        id: "profiles",
        title: "Farmer Profiles",
        blurb:
            "Portable, consented farmer profiles that follow the farmer across every program and service.",
        icon: "IdCard",
    },
    {
        id: "market",
        title: "Market Discovery & Linkages",
        blurb:
            "Open discovery between growers and buyers with consented data and standardized quality proofs.",
        icon: "Network",
    },
    {
        id: "traceability",
        title: "Traceability",
        blurb:
            "Farm-to-shelf provenance built from open registries — not proprietary silos.",
        icon: "Route",
    },
    {
        id: "advisory",
        title: "AI-enabled Advisory Services",
        blurb:
            "Hyper-local, source-attributed advisory delivered through farmer-preferred channels.",
        icon: "Sparkles",
    },
];

export const WHY_PILLARS = [
    {
        id: "open",
        title: "Open by Design",
        body: "Built on open standards, reusable building blocks, and interoperable interfaces to encourage collaboration across governments, organizations, and technology providers.",
    },
    {
        id: "modular",
        title: "Modular Architecture",
        body: "Applications are assembled from reusable infrastructure rather than developed as isolated systems, enabling faster implementation and long-term sustainability.",
    },
    {
        id: "dpi",
        title: "Digital Public Infrastructure",
        body: "Combines foundational DPI with agriculture-specific components to enable trusted, scalable, and interoperable digital agriculture ecosystems.",
    },
];
