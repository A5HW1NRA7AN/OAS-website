/**
 * Open Agri Stack — architecture data.
 * Chapter-numbered so the entire site reads as a continuous narrative.
 */

export const NAV_SECTIONS = [
    { id: "hero", label: "Overview", chapter: "00" },
    { id: "why", label: "Why", chapter: "01" },
    { id: "architecture", label: "Architecture", chapter: "02" },
    { id: "stack", label: "Stack", chapter: "03" },
    { id: "registries", label: "Registries", chapter: "04" },
    { id: "build", label: "Build", chapter: "05" },
    { id: "resources", label: "Resources", chapter: "06" },
];

export const REFERENCE_LAYERS = [
    {
        id: "applications",
        code: "L3",
        title: "Applications",
        summary:
            "Farmer-facing and institutional applications composed from open building blocks.",
        detail:
            "Applications such as advisory, credit, insurance, market linkages and traceability are assembled — not rebuilt — by combining reusable OAS components.",
        modules: [
            "AI Advisory",
            "Digital Credit",
            "Insurance",
            "Market Linkages",
            "Traceability",
            "Extension Services",
        ],
    },
    {
        id: "agriculture",
        code: "L2",
        title: "Agriculture Building Blocks",
        summary:
            "Sector-specific composable primitives — the shared vocabulary of digital agriculture.",
        detail:
            "Registries, catalogues, and protocols that encode the shared semantics of agriculture: farmers, plots, crops, produce, transactions, and consent.",
        modules: [
            "Farmer Registry",
            "Plot Registry",
            "Crop Catalogue",
            "Produce Catalogue",
            "Transaction Ledger",
            "Advisory Catalogue",
        ],
    },
    {
        id: "foundational",
        code: "L1",
        title: "Foundational DPI",
        summary:
            "Country-level digital public infrastructure — identity, consent, exchange, and discovery.",
        detail:
            "The base layer inherited from the wider DPI ecosystem: verifiable identity, consent, secure data exchange, and open discovery protocols.",
        modules: [
            "Digital Identity",
            "Consent Framework",
            "Data Exchange",
            "Discovery (UASI)",
            "Payments Rails",
        ],
    },
];

export const STACK_LAYERS = [
    {
        id: "uasi",
        code: "S6",
        title: "UASI",
        subtitle: "Unified Agriculture Service Interface",
        detail:
            "The discovery and interaction protocol — a common surface across networks, agents, and applications.",
        modules: ["Discovery", "Search", "Fulfillment", "Post-Fulfillment"],
    },
    {
        id: "consent",
        code: "S5",
        title: "Consent",
        subtitle: "Purpose-bound, revocable data sharing",
        detail:
            "Every data movement is anchored in an auditable, revocable consent artefact — the citizen remains in control.",
        modules: ["Consent Artefacts", "Purpose Registry", "Audit Ledger"],
    },
    {
        id: "identity",
        code: "S4",
        title: "Identity Registries",
        subtitle: "Who is participating",
        detail:
            "Verifiable, federated identity for farmers, FPOs, buyers, advisors, and institutions.",
        modules: [
            "Farmer Registry",
            "FPO Registry",
            "Advisor Registry",
            "Buyer Registry",
        ],
    },
    {
        id: "catalogues",
        code: "S3",
        title: "Catalogues",
        subtitle: "What is being described",
        detail:
            "Open, machine-readable vocabularies for crops, produce, practices, advisories and services.",
        modules: [
            "Crop Catalogue",
            "Produce Catalogue",
            "Practice Catalogue",
            "Advisory Catalogue",
        ],
    },
    {
        id: "transactional",
        code: "S2",
        title: "Transactional Registries",
        subtitle: "What is happening",
        detail:
            "Auditable records of sowing, harvest, sale, credit disbursement, and quality events.",
        modules: [
            "Sowing Ledger",
            "Harvest Ledger",
            "Trade Ledger",
            "Quality Events",
        ],
    },
    {
        id: "foundational",
        code: "S1",
        title: "Foundational Registries",
        subtitle: "What exists in the physical world",
        detail:
            "Land, plots, water bodies, and infrastructure — the geospatial ground truth for every downstream service.",
        modules: [
            "Plot Registry",
            "Land Records",
            "Water Registry",
            "Infrastructure",
        ],
    },
];

export const REGISTRIES = [
    {
        id: "farmer",
        title: "Farmer Registry",
        kind: "Identity",
        purpose:
            "Verifiable, consented, portable digital identity for farmers across programs and geographies.",
        components: ["Unique ID", "Household", "Roles", "Consent History"],
        connects: ["plot", "trade", "credit"],
    },
    {
        id: "plot",
        title: "Plot Registry",
        kind: "Foundational",
        purpose:
            "Geospatial ground truth for cultivable land — parcels, boundaries, ownership and use.",
        components: ["Geometry", "Tenure", "Soil", "Water Access"],
        connects: ["farmer", "crop", "advisory"],
    },
    {
        id: "crop",
        title: "Crop Catalogue",
        kind: "Catalogue",
        purpose:
            "Shared, open vocabulary for crops, varieties, and cultivation calendars.",
        components: ["Taxonomy", "Varieties", "Calendars", "Practices"],
        connects: ["plot", "advisory", "trade"],
    },
    {
        id: "advisory",
        title: "Advisory Catalogue",
        kind: "Catalogue",
        purpose:
            "Interoperable advisory content — agronomy, weather, pest, market — with source and confidence.",
        components: ["Providers", "Content", "Confidence", "Language"],
        connects: ["farmer", "crop", "plot"],
    },
    {
        id: "trade",
        title: "Trade Ledger",
        kind: "Transactional",
        purpose:
            "Auditable transactions between farmers, aggregators and buyers, with quality events attached.",
        components: ["Orders", "Fulfillment", "Quality", "Settlement"],
        connects: ["farmer", "crop", "credit"],
    },
    {
        id: "credit",
        title: "Credit Registry",
        kind: "Transactional",
        purpose:
            "Farm-aware credit rails — disbursements, repayments and outcomes tied to real productive activity.",
        components: ["Underwriting Signals", "Disbursements", "Repayments"],
        connects: ["farmer", "trade"],
    },
];

export const APPLICATIONS = [
    {
        id: "advisory",
        title: "AI Advisory",
        blurb: "Hyper-local, source-attributed advisory delivered through farmer-preferred channels.",
        needs: ["farmer", "plot", "crop", "advisory"],
    },
    {
        id: "credit",
        title: "Digital Credit",
        blurb: "Production-linked credit underwritten from verifiable farm and transaction signals.",
        needs: ["farmer", "plot", "trade", "credit"],
    },
    {
        id: "market",
        title: "Market Linkages",
        blurb: "Open discovery between growers and buyers with consented data and quality proofs.",
        needs: ["farmer", "crop", "trade"],
    },
    {
        id: "traceability",
        title: "Traceability",
        blurb: "Farm-to-shelf provenance built from open registries — not proprietary silos.",
        needs: ["plot", "crop", "trade"],
    },
];

export const WHY_PILLARS = [
    {
        id: "open",
        title: "Open by Design",
        body: "Open specifications, open source reference implementations, open governance. Nothing about agriculture is proprietary here.",
    },
    {
        id: "modular",
        title: "Modular Architecture",
        body: "Every capability is a composable building block — reusable, replaceable, independently governed.",
    },
    {
        id: "dpi",
        title: "Digital Public Infrastructure",
        body: "Built as public digital infrastructure — inclusive by default, safe by design, extensible for every context.",
    },
];
