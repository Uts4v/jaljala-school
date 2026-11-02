import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { CalendarDays, Download, FileText, Quote, Search, UserRound, X, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { features, facilities, noticeCategories, principal, programs, testimonials, ui, welcome } from "@/content/site";
import { facilityImage, gallery, img } from "@/lib/images";
import { PlaceholderTag, Reveal, SectionHeading } from "./Bits";

export function WelcomeSection() {
  const { t } = useLang();
  return (
    <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <Reveal className="relative">
        <img src={img.classroom} alt={t({ en: "Students learning in a classroom", ne: "कक्षाकोठामा सिक्दै विद्यार्थीहरू" })} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
        <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-lift sm:block">
          <p className="font-display text-3xl text-gold">“</p>
          <p className="max-w-[14rem] text-sm">{t({ en: "Knowledge, discipline and kindness — together.", ne: "ज्ञान, अनुशासन र दयालुता — सँगसँगै।" })}</p>
        </div>
      </Reveal>
      <div>
        <SectionHeading eyebrow={welcome.eyebrow} title={welcome.title} text={welcome.body} />
        <Reveal delay={120} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {welcome.values.map((v) => (
            <div key={v.en} className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold text-primary">{t(v)}</div>
          ))}
        </Reveal>
        <Reveal delay={200} className="mt-8">
          <Button asChild variant="navy" size="xl"><Link to="/about">{t(ui.readMore)}</Link></Button>
        </Reveal>
      </div>
    </section>
  );
}

export function PrincipalSection({ full = false }: { full?: boolean }) {
  const { t } = useLang();
  return (
    <section className="bg-secondary">
      <div className="container-x grid items-center gap-10 py-20 md:grid-cols-[18rem_1fr]">
        <Reveal>
          <div className="mx-auto flex aspect-[4/5] w-60 items-center justify-center rounded-3xl border-4 border-card bg-primary/10 shadow-lift md:w-full">
            <UserRound className="h-24 w-24 text-primary/40" aria-label={t({ en: "Principal photo placeholder", ne: "प्रधानाध्यापकको फोटो नमुना" })} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="eyebrow">{t({ en: "Message from the Principal", ne: "प्रधानाध्यापकको सन्देश" })}</span>
          <Quote className="mt-4 h-10 w-10 text-gold" />
          <p className={`mt-2 font-display text-primary ${full ? "text-xl" : "text-xl sm:text-2xl"} leading-relaxed`}>{t(principal.message)}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div>
              <p className="font-semibold text-primary">{t(principal.name)}</p>
              <p className="text-sm text-muted-foreground">{t(principal.role)}</p>
            </div>
            <PlaceholderTag />
          </div>
          {!full && <Button asChild variant="link" className="mt-4 px-0"><Link to="/principal">{t(ui.readMore)} →</Link></Button>}
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const { t } = useLang();
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading center eyebrow={{ en: "Why choose us", ne: "किन हामी" }} title={{ en: "Why Choose Our School?", ne: "हाम्रो विद्यालय किन रोज्ने?" }} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[f.icon];
          return (
            <Reveal key={f.icon} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-primary transition-colors group-hover:bg-primary group-hover:text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{t(f.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(f.text)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function ProgramsSection() {
  const { t } = useLang();
  return (
    <section className="bg-navy-deep text-on-navy">
      <div className="container-x py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{t({ en: "Academics", ne: "शैक्षिक" })}</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t({ en: "Academic Programs", ne: "शैक्षिक कार्यक्रमहरू" })}</h2>
          <p className="mt-4 text-on-navy/70">{t({ en: "Grade ranges shown are placeholders until confirmed by the school.", ne: "देखाइएका कक्षा दायरा विद्यालयबाट पुष्टि नभएसम्म नमुना हुन्।" })}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 80}>
              <div className="h-full rounded-2xl border border-on-navy/10 bg-on-navy/5 p-7 transition hover:border-gold/60">
                <p className="font-display text-4xl text-gold">0{i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{t(p.title)}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold/90">{t(p.grades)}</p>
                <p className="mt-3 text-sm text-on-navy/70">{t(p.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  const { t } = useLang();
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading eyebrow={{ en: "Campus", ne: "परिसर" }} title={{ en: "School Facilities", ne: "विद्यालयका सुविधाहरू" }} text={{ en: "Facilities marked “to be confirmed” will be updated once verified by the school.", ne: "“पुष्टि हुन बाँकी” भनिएका सुविधाहरू विद्यालयले प्रमाणित गरेपछि अद्यावधिक गरिनेछ।" }} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((f, i) => (
          <Reveal key={f.key} delay={i * 60}>
            <article className="group relative overflow-hidden rounded-2xl shadow-soft">
              <img src={facilityImage[f.key]} alt={t(f.title)} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-on-navy">
                <h3 className="text-xl font-semibold">{t(f.title)}</h3>
                <p className="mt-1 text-sm text-on-navy/80">{t(f.text)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type Notice = { id: string; title_en: string; title_ne: string; summary_en: string; summary_ne: string; category: string; published_on: string; attachment_url: string | null };

export function useNotices() {
  return useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const { data, error } = await supabase.from("notices").select("id,title_en,title_ne,summary_en,summary_ne,category,published_on,attachment_url").order("published_on", { ascending: false });
      if (error) throw error;
      return data as Notice[];
    },
  });
}

export function NoticeCard({ n }: { n: Notice }) {
  const { t, lang } = useLang();
  const cat = noticeCategories.find((c) => c.key === n.category);
  const date = new Date(n.published_on).toLocaleDateString(lang === "ne" ? "ne-NP" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-lift">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="rounded-full bg-gold-soft px-3 py-1 font-semibold text-primary">{cat ? t(cat.label) : n.category}</span>
        <span className="flex items-center gap-1.5 text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" />{date}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{lang === "ne" ? n.title_ne : n.title_en}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{lang === "ne" ? n.summary_ne : n.summary_en}</p>
      <div className="mt-5">
        {n.attachment_url ? (
          <Button asChild variant="outline" size="sm" className="rounded-full"><a href={n.attachment_url} target="_blank" rel="noreferrer"><Download />{t({ en: "Download PDF", ne: "PDF डाउनलोड" })}</a></Button>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><FileText className="h-3.5 w-3.5" />{t({ en: "No attachment", ne: "संलग्न फाइल छैन" })}</span>
        )}
      </div>
    </article>
  );
}

export function NoticesList({ limit, filters = false }: { limit?: number; filters?: boolean }) {
  const { t, lang } = useLang();
  const { data, isLoading, isError } = useNotices();
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    let l = data ?? [];
    if (cat !== "all") l = l.filter((n) => n.category === cat);
    if (q.trim()) {
      const s = q.toLowerCase();
      l = l.filter((n) => (lang === "ne" ? n.title_ne + n.summary_ne : n.title_en + n.summary_en).toLowerCase().includes(s));
    }
    return limit ? l.slice(0, limit) : l;
  }, [data, cat, q, limit, lang]);

  return (
    <div>
      {filters && (
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {noticeCategories.map((c) => (
              <button key={c.key} onClick={() => setCat(c.key)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c.key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}>{t(c.label)}</button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t({ en: "Search notices…", ne: "सूचना खोज्नुहोस्…" })} className="h-11 w-full rounded-full border border-input bg-card pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring" />
          </label>
        </div>
      )}
      {isLoading && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[0, 1, 2].map((i) => <div key={i} className="h-52 animate-pulse rounded-2xl bg-muted" />)}</div>}
      {isError && <p className="text-destructive">{t({ en: "Notices could not be loaded. Please try again later.", ne: "सूचनाहरू लोड हुन सकेनन्। पछि फेरि प्रयास गर्नुहोस्।" })}</p>}
      {data && list.length === 0 && <p className="text-muted-foreground">{t({ en: "No notices found.", ne: "कुनै सूचना भेटिएन।" })}</p>}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((n) => <NoticeCard key={n.id} n={n} />)}
      </div>
    </div>
  );
}

export function NoticesSection() {
  const { t } = useLang();
  return (
    <section className="bg-secondary">
      <div className="container-x py-20 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={{ en: "Notice board", ne: "सूचना पाटी" }} title={{ en: "Latest Notices & Announcements", ne: "पछिल्ला सूचना तथा घोषणाहरू" }} />
          <Button asChild variant="navy" className="rounded-full"><Link to="/notices">{t(ui.viewAll)}</Link></Button>
        </div>
        <NoticesList limit={3} />
      </div>
    </section>
  );
}

export function Gallery({ limit }: { limit?: number }) {
  const { t } = useLang();
  const items = limit ? gallery.slice(0, limit) : gallery;
  const [open, setOpen] = useState<number | null>(null);
  const go = (d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length));
  return (
    <>
      <div className="grid auto-rows-[14rem] grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((g, i) => (
          <button key={i} onClick={() => setOpen(i)} className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <img src={g.src} alt={t(g.alt)} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-navy-deep/0 transition group-hover:bg-navy-deep/30" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 rounded-full p-2 text-on-navy hover:text-gold" aria-label="Close"><X className="h-7 w-7" /></button>
          <button className="absolute left-3 rounded-full p-2 text-on-navy hover:text-gold" aria-label="Previous" onClick={(e) => { e.stopPropagation(); go(-1); }}><ChevronLeft className="h-9 w-9" /></button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img src={items[open].src} alt={t(items[open].alt)} className="max-h-[80vh] w-auto rounded-xl" />
            <figcaption className="mt-3 text-center text-sm text-on-navy/80">{t(items[open].alt)}</figcaption>
          </figure>
          <button className="absolute right-3 rounded-full p-2 text-on-navy hover:text-gold" aria-label="Next" onClick={(e) => { e.stopPropagation(); go(1); }}><ChevronRight className="h-9 w-9" /></button>
        </div>
      )}
    </>
  );
}

export function EventsSection() {
  const { t } = useLang();
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow={{ en: "Student life", ne: "विद्यार्थी जीवन" }} title={{ en: "Events & Activities", ne: "कार्यक्रम तथा गतिविधिहरू" }} />
        <Button asChild variant="outline" className="rounded-full"><Link to="/gallery">{t(ui.viewAll)}</Link></Button>
      </div>
      <Gallery limit={6} />
    </section>
  );
}

export function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-secondary">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading center eyebrow={{ en: "Voices", ne: "भनाइहरू" }} title={{ en: "What Our Community Says", ne: "हाम्रो समुदाय के भन्छ" }} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((x, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="h-full rounded-2xl bg-card p-7 shadow-soft">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-3 text-foreground/80">{t(x.quote)}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10"><UserRound className="h-5 w-5 text-primary/60" /></span>
                  <span><span className="block font-semibold text-primary">{t(x.name)}</span><span className="text-sm text-muted-foreground">{t(x.role)}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
