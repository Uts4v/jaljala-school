import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLang } from "@/lib/i18n";
import { nav, morePages, school, ui } from "@/content/site";
import { Logo } from "./Logo";

export function LangSwitch({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex rounded-full border p-0.5 text-xs font-semibold ${dark ? "border-white/20 bg-white/10" : "border-border bg-card"} ${className}`} role="group" aria-label="Language">
      {(["en", "ne"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-gold text-primary" : dark ? "text-on-navy/75 hover:text-on-navy" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l === "en" ? "EN" : "नेपाली"}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "border-border bg-background/90 shadow-soft backdrop-blur" : "border-transparent bg-background"}`}>
      <div className="container-x flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <Logo className="h-11 w-11 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-semibold text-primary sm:text-lg">{t(school.name)}</span>
            <span className="block truncate text-xs text-muted-foreground">{t({ en: "Sulichaur, Rolpa", ne: "सुलिचौर, रोल्पा" })}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {t(item.label)}
            </Link>
          ))}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {t(ui.more)} <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-2 rounded-xl border border-border bg-popover p-2 text-popover-foreground opacity-0 shadow-lift transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {morePages.map((item) => (
                <Link key={item.to} to={item.to} className="block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-primary">
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="rounded-full p-2 text-primary transition-colors hover:bg-secondary lg:hidden" aria-label={t(ui.menu)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full max-w-none flex-col gap-0 border-white/10 bg-navy-deep p-0 text-on-navy sm:max-w-[28rem] [&>button]:right-6 [&>button]:top-6 [&>button]:text-on-navy [&>button]:opacity-80 [&>button]:hover:opacity-100">
            <SheetHeader className="border-b border-white/10 px-6 pb-5 pt-7 pr-16 text-left">
              <div className="flex items-center gap-3">
                <Logo className="h-12 w-12 shrink-0" />
                <div>
                  <SheetTitle className="font-display text-lg text-on-navy">{t({ en: "Explore Jaljala", ne: "जलजलालाई चिन्नुहोस्" })}</SheetTitle>
                  <SheetDescription className="mt-1 text-on-navy/60">{t(school.address)}</SheetDescription>
                </div>
              </div>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto px-6 py-5" aria-label={t({ en: "All pages", ne: "सबै पृष्ठहरू" })}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{t({ en: "Discover our school", ne: "हाम्रो विद्यालयबारे" })}</p>
              <div className="divide-y divide-white/10">
                {[...nav, ...morePages].map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="group flex items-center justify-between py-3.5 text-sm font-medium text-on-navy/80 transition-colors hover:text-gold data-[status=active]:text-gold"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-display text-xs text-on-navy/35">{String(index + 1).padStart(2, "0")}</span>
                      {t(item.label)}
                    </span>
                    <ChevronRight className="h-4 w-4 text-on-navy/35 transition-transform group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="border-t border-white/10 px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-on-navy/70">{t({ en: "Choose language", ne: "भाषा छान्नुहोस्" })}</span>
                <LangSwitch dark />
              </div>
              <Button asChild variant="gold" className="w-full rounded-md">
                <Link to="/admission" onClick={() => setOpen(false)}>{t(ui.apply)}</Link>
              </Button>
              <a href={`mailto:${school.email}`} className="mt-4 block text-center text-xs text-on-navy/55 transition-colors hover:text-gold">{school.email}</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
