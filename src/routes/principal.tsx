import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { PrincipalSection } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/principal")({
  head: () => seo("Message from the Principal", "A welcome message from the principal of Jaljala English Boarding School, Rolpa."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "Message from the Principal", ne: "प्रधानाध्यापकको सन्देश" }} image={img.classroom} />
      <PrincipalSection full />
    </>
  );
}
