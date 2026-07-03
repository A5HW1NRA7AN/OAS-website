import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import WhyOAS from "@/components/site/WhyOAS";
import ReferenceArchitecture from "@/components/site/ReferenceArchitecture";
import StackExplorer from "@/components/site/StackExplorer";
import RegistryAtlas from "@/components/site/RegistryAtlas";
import BuildWithOAS from "@/components/site/BuildWithOAS";
import Resources from "@/components/site/Resources";
import Footer from "@/components/site/Footer";
import { ChapterTransition } from "@/components/site/Section";

/**
 * The site is one continuous scroll-driven narrative.
 *
 * Chapter flow:
 *   00 Overview        → sets the thesis
 *   01 Why             → explains the problem OAS solves
 *   02 Architecture    → zooms in on the three-layer reference
 *   03 Stack           → drills into the six layers of the stack
 *   04 Registries      → focuses on the reusable modules
 *   05 Build           → invites the visitor to compose
 *   06 Resources       → hands off to GitBook and GitHub
 *
 * ChapterTransition strips act as connective tissue so sections don't
 * feel like isolated blocks — they read like turning a page.
 */
export default function Home() {
    return (
        <main data-testid="oas-home" className="relative">
            <Nav />

            <Hero />

            <ChapterTransition
                from="00 · Overview"
                to="01 · Why"
                note="From what OAS is → to why it must exist."
            />
            <WhyOAS />

            <ChapterTransition
                from="01 · Why"
                to="02 · Reference Architecture"
                note="From principles → to the three-layer reference architecture."
            />
            <ReferenceArchitecture />

            <ChapterTransition
                from="02 · Reference Architecture"
                to="03 · Explore the Stack"
                note="From layers → to the specific implementation of each layer."
            />
            <StackExplorer />

            <ChapterTransition
                from="03 · Explore the Stack"
                to="04 · Core Registries"
                note="From the stack → to the registries that make it real."
            />
            <RegistryAtlas />

            <ChapterTransition
                from="04 · Core Registries"
                to="05 · Composable Applications"
                note="From what exists → to how you assemble it into applications."
            />
            <BuildWithOAS />

            <ChapterTransition
                from="05 · Composable Applications"
                to="06 · Resources"
                note="From understanding → to shipping in the open."
            />
            <Resources />

            <Footer />
        </main>
    );
}
