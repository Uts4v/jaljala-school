import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { nav, morePages, school, ui } from "@/content/site";
import { Logo } from "./Logo";

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex rounded-full border border-border bg-card p-0.5 text-xs font-semibold ${className}`} role="group" aria-label="Language">
      {(["en", "ne"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
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
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-11 w-11 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-semibold text-primary sm:text-lg">{t(school.name)}</span>
            <span className="block truncate text-xs text-muted-foreground">{t({ en: "Sulichaur, Rolpa", ne: "सुलिचौर, रोल्पा" })}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:bg-secondary">
              {t(n.label)}
            </Link>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary">
              {t(ui.more)} <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute right-0 top-full w-60 translate-y-2 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-lift transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {morePages.map((p) => (
                <Link key={p.to} to={p.to} className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary">{t(p.label)}</Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch className="hidden sm:inline-flex" />
          <Button asChild variant="gold" className="hidden rounded-full md:inline-flex">
            <Link to="/admission">{t(ui.apply)}</Link>
          </Button>
          <button className="rounded-full p-2 text-primary xl:hidden" onClick={() => setOpen((o) => !o)} aria-label={t(ui.menu)} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-background xl:hidden animate-rise">
          <nav className="container-x grid gap-1 py-4" aria-label="Mobile">
            {[...nav, ...morePages].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary">
                {t(n.label)}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LangSwitch />
              <Button asChild variant="gold" className="rounded-full">
                <Link to="/admission" onClick={() => setOpen(false)}>{t(ui.apply)}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
