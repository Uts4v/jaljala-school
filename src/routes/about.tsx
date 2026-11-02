import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { WelcomeSection, FeaturesSection } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Our School", "Learn about Jaljala English Boarding School in Sulichaur, Rolpa — our story, values and learning environment."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "About Our School", ne: "हाम्रो विद्यालयको बारेमा" }} text={{ en: "Our story, values and learning environment.", ne: "हाम्रो कथा, मूल्य र सिकाइ वातावरण।" }} image={img.hero} />
      <WelcomeSection />
      <FeaturesSection />
    </>
  );
}
