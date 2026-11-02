import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { school, ui } from "@/content/site";
import { img } from "@/lib/images";
import { EventsSection, FacilitiesSection, FeaturesSection, NoticesSection, ProgramsSection, WelcomeSection } from "@/components/site/Sections";
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
        <img src={img.classroom} alt={t({ en: "A teacher helping students learn in class", ne: "कक्षामा विद्यार्थीहरूलाई सिक्न सहयोग गर्दै शिक्षिका" })} width={1280} height={960} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-x flex min-h-[72vh] flex-col justify-center py-20 sm:min-h-[76vh] sm:py-24">
          <div className="max-w-3xl border-l-2 border-gold pl-5 sm:pl-8">
            <span className="animate-rise text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">{t(school.address)}</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-on-navy animate-rise [animation-delay:100ms] sm:text-6xl lg:text-7xl">{t(ui.heroTitle)}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-navy/90 animate-rise [animation-delay:200ms] sm:text-lg">{t(ui.heroText)}</p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:300ms]">
              <Button asChild variant="gold" size="xl" className="rounded-md"><Link to="/about">{t(ui.explore)}</Link></Button>
              <Button asChild variant="heroOutline" size="xl" className="rounded-md"><Link to="/admission">{t(ui.inquiry)}</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <WelcomeSection />
      <FeaturesSection />
      <ProgramsSection />
      <FacilitiesSection />
      <NoticesSection />
      <EventsSection />
      <ContactSection />
    </>
  );
}
