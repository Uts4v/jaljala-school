import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { school, ui } from "@/content/site";
import { img } from "@/lib/images";
import { EventsSection, FacilitiesSection, FeaturesSection, NoticesSection, PrincipalSection, ProgramsSection, TestimonialsSection, WelcomeSection } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/Forms";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaljala English Boarding School | Sulichaur, Rolpa, Nepal" },
      { name: "description", content: "Jaljala English Boarding School in Sunil Smriti-4, Sulichaur, Rolpa — quality English-medium education. Admission inquiries, notices and school life." },
      { property: "og:title", content: "Jaljala English Boarding School | Sulichaur, Rolpa" },
      { property: "og:description", content: "Building bright futures through quality education in Sulichaur, Rolpa, Nepal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "School", name: "Jaljala English Boarding School", email: "jebsrolpa2064@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "Sunil Smriti-4", addressLocality: "Sulichaur", addressRegion: "Rolpa", addressCountry: "NP" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep text-on-navy">
        <img src={img.hero} alt={t({ en: "Students walking to school in the hills of Rolpa", ne: "रोल्पाका पहाडमा विद्यालय जाँदै विद्यार्थीहरू" })} width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-24">
          <span className="eyebrow animate-rise">{t(school.address)}</span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] animate-rise [animation-delay:100ms] sm:text-6xl">{t(ui.heroTitle)}</h1>
          <p className="mt-6 max-w-xl text-lg text-on-navy/85 animate-rise [animation-delay:200ms]">{t(ui.heroText)}</p>
          <div className="mt-9 flex flex-wrap gap-3 animate-rise [animation-delay:300ms]">
            <Button asChild variant="gold" size="xl"><Link to="/about">{t(ui.explore)}</Link></Button>
            <Button asChild variant="heroOutline" size="xl"><Link to="/admission">{t(ui.inquiry)}</Link></Button>
          </div>
        </div>
      </section>
      <WelcomeSection />
      <PrincipalSection />
      <FeaturesSection />
      <ProgramsSection />
      <FacilitiesSection />
      <NoticesSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
