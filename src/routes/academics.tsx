import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { ProgramsSection } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/academics")({
  head: () => seo("Academic Programs", "Early childhood, primary, basic and secondary education at Jaljala English Boarding School, Sulichaur."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "Academic Programs", ne: "शैक्षिक कार्यक्रमहरू" }} text={{ en: "From early childhood to secondary education.", ne: "प्रारम्भिक बाल शिक्षादेखि माध्यमिक शिक्षासम्म।" }} image={img.science} />
      <ProgramsSection />
    </>
  );
}
