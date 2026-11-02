import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { school, ui } from "@/content/site";
import { img } from "@/lib/images";
import { EventsSection, FacilitiesSection, FeaturesSection, NoticesSection, ProgramsSection, WelcomeSection } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/Forms";

const heroSlides = [img.classroom, img.hero, img.culture, img.sports, img.science];

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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (offset: number) => {
    setActiveSlide((current) => (current + offset + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      <section aria-roledescription="carousel" aria-label={t({ en: "School life slideshow", ne: "विद्यालय जीवनको स्लाइड शो" })} className="relative isolate overflow-hidden bg-navy-deep text-on-navy">
        {heroSlides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt=""
            aria-hidden="true"
            width={1280}
            height={960}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-20 sm:min-h-[82vh] sm:py-24">
          <div className="max-w-3xl border-l-2 border-gold pl-5 sm:pl-8">
            <span className="animate-rise text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">{t(school.address)}</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-on-navy animate-rise [animation-delay:100ms] sm:text-6xl lg:text-7xl">{t(ui.heroTitle)}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-navy/90 animate-rise [animation-delay:200ms] sm:text-lg">{t(ui.heroText)}</p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:300ms]">
              <Button asChild variant="gold" size="xl" className="rounded-md"><Link to="/about">{t(ui.explore)}</Link></Button>
              <Button asChild variant="heroOutline" size="xl" className="rounded-md"><Link to="/admission">{t(ui.inquiry)}</Link></Button>
            </div>
          </div>
          <div className="absolute bottom-7 right-5 flex items-center gap-2 sm:bottom-10 sm:right-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${t({ en: "Show slide", ne: "स्लाइड देखाउनुहोस्" })} ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${index === activeSlide ? "w-8 bg-gold" : "w-2 bg-white/70 hover:bg-white"}`}
              />
            ))}
            <button type="button" aria-label={t({ en: "Previous slide", ne: "अघिल्लो स्लाइड" })} onClick={() => showSlide(-1)} className="ml-3 grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/15">
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button type="button" aria-label={t({ en: "Next slide", ne: "अर्को स्लाइड" })} onClick={() => showSlide(1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/15">
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
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
