import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { Gallery } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Photo Gallery", "Photos of school life at Jaljala English Boarding School, Sulichaur, Rolpa."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "Photo Gallery", ne: "फोटो ग्यालेरी" }} text={{ en: "Illustrative photos — authentic school photographs coming soon.", ne: "नमुना तस्बिरहरू — विद्यालयका वास्तविक तस्बिरहरू छिट्टै।" }} image={img.sports} />
      <section className="container-x py-16"><Gallery /></section>
    </>
  );
}
