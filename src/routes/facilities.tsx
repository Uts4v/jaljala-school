import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { FacilitiesSection } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/facilities")({
  head: () => seo("School Facilities", "Classrooms, sports and campus facilities at Jaljala English Boarding School, Rolpa."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "School Facilities", ne: "विद्यालयका सुविधाहरू" }} image={img.reading} />
      <FacilitiesSection />
    </>
  );
}
