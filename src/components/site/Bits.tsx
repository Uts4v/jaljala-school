import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { useLang, type T } from "@/lib/i18n";
import { school, ui } from "@/content/site";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: T; title: T; text?: T; center?: boolean }) {
  const { t } = useLang();
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{t(eyebrow)}</span>
      <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">{t(title)}</h2>
      {text && <p className="mt-4 text-muted-foreground">{t(text)}</p>}
    </Reveal>
  );
}

export function PageHero({ title, text, image }: { title: T; text?: T; image?: string }) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-navy-deep text-on-navy">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative py-20 sm:py-24">
        <h1 className="max-w-3xl text-4xl font-semibold animate-rise sm:text-5xl">{t(title)}</h1>
        {text && <p className="mt-4 max-w-2xl text-on-navy/80 animate-rise [animation-delay:120ms]">{t(text)}</p>}
        <div className="mt-6 h-1 w-16 rounded-full bg-gold" />
      </div>
    </section>
  );
}

export function PlaceholderTag() {
  const { t } = useLang();
  return <span className="inline-block rounded-full bg-gold-soft px-2.5 py-0.5 text-[11px] font-medium text-primary">{t(ui.placeholderNote)}</span>;
}

export function FloatingActions() {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const chat = school.whatsapp ? `https://wa.me/${school.whatsapp}` : `mailto:${school.email}`;
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <button onClick={() => window.scrollTo({ top: 0 })} aria-label={t(ui.backTop)} className="rounded-full border border-border bg-card p-3 text-primary shadow-lift transition hover:-translate-y-0.5">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a href={chat} aria-label={t(ui.contactUs)} className="flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-navy-deep shadow-lift transition hover:-translate-y-0.5">
        {school.whatsapp ? <MessageCircle className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
        <span className="hidden sm:inline">{t(ui.contactUs)}</span>
      </a>
    </div>
  );
}
