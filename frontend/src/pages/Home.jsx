import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import WhyOAS from "@/components/site/WhyOAS";
import ReferenceArchitecture from "@/components/site/ReferenceArchitecture";
import StackExplorer from "@/components/site/StackExplorer";
import RegistryAtlas from "@/components/site/RegistryAtlas";
import BuildWithOAS from "@/components/site/BuildWithOAS";
import Resources from "@/components/site/Resources";
import Footer from "@/components/site/Footer";
import BlueprintBackground from "@/components/site/BlueprintBackground";

/**
 * The site is one continuous scroll-driven narrative.
 * Chapters (00–06) form the information architecture.
 * The living blueprint background sits behind every section.
 */
export default function Home() {
    return (
        <main data-testid="oas-home" className="relative">
            {/* Persistent blueprint background across the whole site */}
            <BlueprintBackground />

            {/* Content stack — sits above the blueprint layer */}
            <div className="relative z-10">
                <Nav />
                <Hero />
                <WhyOAS />
                <ReferenceArchitecture />
                <StackExplorer />
                <RegistryAtlas />
                <BuildWithOAS />
                <Resources />
                <Footer />
            </div>
        </main>
    );
}
