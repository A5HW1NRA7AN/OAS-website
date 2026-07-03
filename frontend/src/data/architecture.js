/**
 * Open Agri Stack — architecture data (brand-approved copy).
 * Chapter-numbered so the entire site reads as a continuous narrative.
 */

export const NAV_SECTIONS = [
    { id: "hero", label: "Overview", chapter: "00" },
    { id: "why", label: "Why", chapter: "01" },
    { id: "architecture", label: "Architecture", chapter: "02" },
    { id: "stack", label: "Stack", chapter: "03" },
    { id: "registries", label: "Registries", chapter: "04" },
    { id: "build", label: "Applications", chapter: "05" },
    { id: "resources", label: "Resources", chapter: "06" },
];

export const REFERENCE_LAYERS = [
    {
        id: "applications",
        code: "L3",
        title: "Applications & Services",
        summary:
            "Composable applications including Digital Agri-Finance, Farmer Profiles, Market Discovery, Traceability, and AI-enabled Advisory Services built on reusable infrastructure.",
        detail:
            "Applications are assembled from the same open building blocks — enabling faster implementation, consistent interoperability, and long-term sustainability across programs and geographies.",
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
        code: "L2",
        title: "Agriculture Building Blocks",
        summary:
            "Agriculture-specific registries, standards, terminology services, agricultural data platforms, and AI assets that provide reusable capabilities for agricultural applications.",
        detail:
            "The shared semantics of digital agriculture: registries, catalogues, terminology services, and agricultural data & AI assets that every downstream application can rely on.",
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
        code: "L1",
        title: "Foundational Digital Public Infrastructure",
        summary:
            "Shared cross-sector capabilities including digital identity, payments, trust frameworks, data exchange, discovery, foundational data services, and language localization.",
        detail:
            "The cross-sector DPI substrate — verifiable identity, payments, trust frameworks, secure data exchange, discovery, and language localization — inherited from the wider DPI ecosystem.",
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

export const STACK_LAYERS = [
    {
        id: "uasi",
        code: "S6",
        title: "UASI",
        subtitle: "Unified Agriculture Service Interface",
        detail:
            "Provides the unified interface through which applications discover and securely access agricultural services.",
        modules: ["Discovery", "Access", "Secure Interfaces", "Service Contracts"],
    },
    {
        id: "consent",
        code: "S5",
        title: "Consent Framework",
        subtitle: "Trusted, transparent, consent-driven data sharing",
        detail:
            "Ensures trusted, transparent, and consent-driven data sharing across the ecosystem — every data movement is anchored in an auditable, revocable consent artefact.",
        modules: ["Consent Artefacts", "Purpose Binding", "Revocation", "Audit"],
    },
    {
        id: "identity",
        code: "S4",
        title: "Agri Identity Registry",
        subtitle: "Trusted identities across the ecosystem",
        detail:
            "Maintains trusted identities for farmers, extension agents, producer organizations, market participants, and other agricultural stakeholders.",
        modules: [
            "Farmer Identity",
            "Extension Agents",
            "Producer Organizations",
            "Market Participants",
        ],
    },
    {
        id: "catalogues",
        code: "S3",
        title: "Catalogues",
        subtitle: "Standardized agricultural reference data",
        detail:
            "Provides standardized agricultural reference data including crops, livestock, inputs, locations, seasons, schemes, soil, and related catalogues.",
        modules: [
            "Crops",
            "Livestock",
            "Inputs",
            "Locations",
            "Seasons",
            "Schemes",
            "Soil",
        ],
    },
    {
        id: "transactional",
        code: "S2",
        title: "Transactional Registries",
        subtitle: "Operational agricultural records",
        detail:
            "Captures operational agricultural records such as crop sown, plot ownership, and livestock holdings — the ground-truth of what is actually happening on the farm.",
        modules: ["Crop Sown", "Plot Ownership", "Livestock Holdings", "Events"],
    },
    {
        id: "foundational",
        code: "S1",
        title: "Foundational Registries",
        subtitle: "Foundational digital infrastructure",
        detail:
            "Integrates foundational digital infrastructure including national identity systems and payment ecosystems — the sovereign DPI on which agriculture builds.",
        modules: ["National Identity", "Payment Ecosystems", "Trust Anchors"],
    },
];

/**
 * Registries surfaced in the atlas. The site's brand copy speaks about two
 * families — Identity and Transactional — plus Catalogues. Each concrete
 * registry below is a reusable, standards-based building block.
 */
export const REGISTRIES = [
    {
        id: "farmer",
        title: "Farmer Registry",
        kind: "Identity",
        purpose:
            "Trusted, portable digital identity for farmers — designed as a pluggable interface that connects with existing identity solutions while maintaining interoperability.",
        components: ["Farmer Identity", "Household", "Roles", "Consent History"],
        connects: ["plot", "trade", "credit"],
    },
    {
        id: "plot",
        title: "Plot Ownership Registry",
        kind: "Transactional",
        purpose:
            "Operational record of cultivable land — parcels, boundaries, tenure and use — captured using common specifications for consistent implementation.",
        components: ["Geometry", "Tenure", "Soil", "Water Access"],
        connects: ["farmer", "crop", "advisory"],
    },
    {
        id: "crop",
        title: "Crop Catalogue",
        kind: "Catalogue",
        purpose:
            "Standardized agricultural reference data for crops, varieties, and cultivation calendars — a shared, open vocabulary.",
        components: ["Taxonomy", "Varieties", "Calendars", "Practices"],
        connects: ["plot", "advisory", "trade"],
    },
    {
        id: "advisory",
        title: "Advisory Catalogue",
        kind: "Catalogue",
        purpose:
            "Interoperable advisory content — agronomy, weather, pest, market — with source, confidence and language attribution.",
        components: ["Providers", "Content", "Confidence", "Language"],
        connects: ["farmer", "crop", "plot"],
    },
    {
        id: "trade",
        title: "Trade Registry",
        kind: "Transactional",
        purpose:
            "Operational records of transactions between farmers, aggregators and buyers — captured using common specifications with quality events attached.",
        components: ["Orders", "Fulfillment", "Quality", "Settlement"],
        connects: ["farmer", "crop", "credit"],
    },
    {
        id: "credit",
        title: "Agri-Finance Registry",
        kind: "Transactional",
        purpose:
            "Farm-aware finance rails — disbursements, repayments and outcomes tied to verifiable productive activity.",
        components: ["Underwriting Signals", "Disbursements", "Repayments"],
        connects: ["farmer", "trade"],
    },
];

export const APPLICATIONS = [
    {
        id: "finance",
        title: "Digital Agri-Finance",
        blurb: "Production-linked credit and insurance underwritten from verifiable farm and transaction signals.",
        needs: ["farmer", "plot", "trade", "credit"],
    },
    {
        id: "profiles",
        title: "Farmer Profiles",
        blurb: "Portable, consented farmer profiles that follow the farmer across every program and service.",
        needs: ["farmer", "plot"],
    },
    {
        id: "market",
        title: "Market Discovery & Linkages",
        blurb: "Open discovery between growers and buyers with consented data and standardized quality proofs.",
        needs: ["farmer", "crop", "trade"],
    },
    {
        id: "traceability",
        title: "Traceability",
        blurb: "Farm-to-shelf provenance built from open registries — not proprietary silos.",
        needs: ["plot", "crop", "trade"],
    },
    {
        id: "advisory",
        title: "AI-enabled Advisory Services",
        blurb: "Hyper-local, source-attributed advisory delivered through farmer-preferred channels.",
        needs: ["farmer", "plot", "crop", "advisory"],
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
