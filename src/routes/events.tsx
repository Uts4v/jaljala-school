import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { EventsSection } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: () => seo("Events and Activities", "School celebrations, sports, cultural programs and student activities at Jaljala English Boarding School."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "Events & Activities", ne: "कार्यक्रम तथा गतिविधिहरू" }} image={img.culture} />
      <EventsSection />
    </>
  );
}
