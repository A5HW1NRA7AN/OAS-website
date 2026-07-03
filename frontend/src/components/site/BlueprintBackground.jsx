import { motion } from "framer-motion";

/**
 * Living blueprint background — a fixed, ultra-low-opacity technical
 * topology that stays visible behind every section. It's intentionally
 * quiet: subtle grid, a few nodes, a couple of slow connection paths.
 *
 * z-index sits below all content. Never interactive.
 */
export default function BlueprintBackground() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            data-testid="blueprint-bg"
        >
            {/* Grid */}
            <div className="absolute inset-0 oas-grid-fine opacity-[0.35]" />

            {/* Soft radial spot — anchors the eye near the top */}
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
                style={{
                    background:
                        "radial-gradient(closest-side, hsl(74 55% 82% / 0.45), transparent 70%)",
                }}
            />

            {/* Topology SVG — nodes + a couple of slow connection lines */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Connection paths — animated dashed */}
                <g
                    stroke="hsl(90 40% 35%)"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                >
                    <path d="M 120 220 C 400 180, 700 320, 1020 260 S 1360 300, 1420 240" className="oas-flow-line" />
                    <path
                        d="M 60 560 C 320 620, 620 500, 900 620 S 1240 560, 1420 620"
                        className="oas-flow-line"
                        style={{ animationDuration: "9s" }}
                    />
                    <path
                        d="M 180 800 C 460 720, 800 860, 1080 780 S 1300 820, 1420 780"
                        className="oas-flow-line"
                        style={{ animationDuration: "12s" }}
                    />
                </g>

                {/* Nodes — very quiet lime dots that pulse gently */}
                <g fill="hsl(68 51% 45%)">
                    {NODES.map((n, i) => (
                        <motion.circle
                            key={i}
                            cx={n.x}
                            cy={n.y}
                            r={n.r}
                            initial={{ opacity: 0.08 }}
                            animate={{ opacity: [0.08, 0.22, 0.08] }}
                            transition={{
                                duration: 4 + (i % 5),
                                repeat: Infinity,
                                delay: i * 0.35,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </g>

                {/* Node halos — extremely subtle */}
                <g fill="none" stroke="hsl(68 51% 45%)" strokeOpacity="0.12">
                    {NODES.filter((_, i) => i % 3 === 0).map((n, i) => (
                        <circle key={`h-${i}`} cx={n.x} cy={n.y} r={n.r + 6} />
                    ))}
                </g>
            </svg>

            {/* Vignette to keep edges calm */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 40%, hsl(var(--oas-bg) / 0.65) 100%)",
                }}
            />
        </div>
    );
}

const NODES = [
    { x: 120, y: 220, r: 3 },
    { x: 300, y: 160, r: 2 },
    { x: 480, y: 280, r: 2.5 },
    { x: 720, y: 200, r: 3 },
    { x: 960, y: 260, r: 2 },
    { x: 1180, y: 180, r: 2.5 },
    { x: 1380, y: 260, r: 3 },
    { x: 60, y: 560, r: 2.5 },
    { x: 260, y: 620, r: 2 },
    { x: 480, y: 540, r: 3 },
    { x: 720, y: 640, r: 2 },
    { x: 960, y: 580, r: 2.5 },
    { x: 1200, y: 640, r: 3 },
    { x: 1400, y: 580, r: 2 },
    { x: 200, y: 800, r: 2.5 },
    { x: 460, y: 780, r: 2 },
    { x: 720, y: 820, r: 3 },
    { x: 980, y: 780, r: 2 },
    { x: 1240, y: 820, r: 2.5 },
];
