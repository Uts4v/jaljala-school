import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { NoticesList } from "@/components/site/Sections";
import { img } from "@/lib/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/notices")({
  head: () => seo("Notices and Announcements", "Admission, examination, event and holiday notices from Jaljala English Boarding School."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title={{ en: "Notices & Announcements", ne: "सूचना तथा घोषणाहरू" }} text={{ en: "Search and filter the latest school notices.", ne: "पछिल्ला विद्यालय सूचनाहरू खोज्नुहोस् र छान्नुहोस्।" }} image={img.classroom} />
      <section className="container-x py-16"><NoticesList filters /></section>
    </>
  );
}
