import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Youtube } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { nav, morePages, school } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-on-navy">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <p className="font-display text-lg font-semibold">{t(school.name)}</p>
          </div>
          <p className="mt-4 text-sm text-on-navy/70">
            {t({ en: "Quality English-medium education for the children of Sulichaur and Rolpa.", ne: "सुलिचौर र रोल्पाका बालबालिकाका लागि गुणस्तरीय अङ्ग्रेजी माध्यम शिक्षा।" })}
          </p>
          <div className="mt-5 flex gap-3">
            {school.social.facebook && <a href={school.social.facebook} aria-label="Facebook" className="rounded-full border border-on-navy/20 p-2 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>}
            {school.social.youtube && <a href={school.social.youtube} aria-label="YouTube" className="rounded-full border border-on-navy/20 p-2 hover:border-gold hover:text-gold"><Youtube className="h-4 w-4" /></a>}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">{t({ en: "Quick Links", ne: "छिटो लिङ्क" })}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-on-navy/75 hover:text-gold">{t(n.label)}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">{t({ en: "Important Pages", ne: "महत्त्वपूर्ण पृष्ठ" })}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {morePages.map((n) => <li key={n.to}><Link to={n.to} className="text-on-navy/75 hover:text-gold">{t(n.label)}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">{t({ en: "Contact", ne: "सम्पर्क" })}</h3>
          <ul className="mt-4 space-y-3 text-sm text-on-navy/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{t(school.address)}</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${school.email}`} className="break-all hover:text-gold">{school.email}</a></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{school.phone || t({ en: "Phone: to be added", ne: "फोन: थपिन बाँकी" })}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-navy/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-on-navy/60 sm:flex-row">
          <p>© {year} {t(school.name)}. {t({ en: "All rights reserved.", ne: "सर्वाधिकार सुरक्षित।" })}</p>
          <Link to="/privacy" className="hover:text-gold">{t({ en: "Privacy Policy", ne: "गोपनीयता नीति" })}</Link>
        </div>
      </div>
    </footer>
  );
}
