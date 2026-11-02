import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useLang, type T } from "@/lib/i18n";
import { school } from "@/content/site";

const inputCls = "h-11 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40";

function Field({ label, error, children, required }: { label: string; error?: string; children: ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-primary">{label}{required && <span className="text-destructive"> *</span>}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

const msg = {
  required: { en: "This field is required", ne: "यो विवरण आवश्यक छ" },
  email: { en: "Enter a valid email", ne: "मान्य इमेल लेख्नुहोस्" },
  phone: { en: "Enter a valid phone number", ne: "मान्य फोन नम्बर लेख्नुहोस्" },
  sendFail: { en: "Sorry, your submission could not be sent. Please try again or email us.", ne: "माफ गर्नुहोस्, पठाउन सकिएन। फेरि प्रयास गर्नुहोस् वा इमेल गर्नुहोस्।" },
};

const phoneRe = /^[+\d][\d\s-]{6,19}$/;

const admissionSchema = z.object({
  student_name: z.string().trim().min(2).max(120),
  date_of_birth: z.string().min(1),
  gender: z.enum(["male", "female", "other"]),
  applying_grade: z.string().trim().min(1).max(40),
  guardian_name: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(phoneRe),
  email: z.union([z.literal(""), z.string().trim().email().max(255)]),
  previous_school: z.string().trim().max(160),
  message: z.string().trim().max(2000),
});

const grades = ["Nursery", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function AdmissionForm() {
  const { t } = useLang();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = admissionSchema.safeParse(fd);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) {
        const k = String(i.path[0]);
        errs[k] = t(k === "email" ? msg.email : k === "phone" ? msg.phone : msg.required);
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const v = parsed.data;
    const { error } = await supabase.from("admission_inquiries").insert({
      ...v,
      email: v.email || null,
      previous_school: v.previous_school || null,
      message: v.message || null,
    });
    setLoading(false);
    if (error) { toast.error(t(msg.sendFail)); return; }
    setDone(true);
    toast.success(t({ en: "Inquiry submitted", ne: "सोधपुछ पठाइयो" }));
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
        <h3 className="mt-4 text-2xl font-semibold text-primary">{t({ en: "Thank you!", ne: "धन्यवाद!" })}</h3>
        <p className="mt-2 text-muted-foreground">{t({ en: "Your admission inquiry has been received. The school office will contact you soon.", ne: "तपाईंको भर्ना सोधपुछ प्राप्त भयो। विद्यालय कार्यालयले छिट्टै सम्पर्क गर्नेछ।" })}</p>
        <Button variant="outline" className="mt-6 rounded-full" onClick={() => setDone(false)}>{t({ en: "Submit another", ne: "अर्को पठाउनुहोस्" })}</Button>
      </div>
    );
  }

  const L = (x: T) => t(x);
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8">
      <Field required label={L({ en: "Student's Full Name", ne: "विद्यार्थीको पूरा नाम" })} error={errors.student_name}><input name="student_name" maxLength={120} className={inputCls} /></Field>
      <Field required label={L({ en: "Date of Birth", ne: "जन्म मिति" })} error={errors.date_of_birth}><input type="date" name="date_of_birth" className={inputCls} /></Field>
      <Field required label={L({ en: "Gender", ne: "लिङ्ग" })} error={errors.gender}>
        <select name="gender" defaultValue="" className={inputCls}>
          <option value="" disabled>—</option>
          <option value="male">{L({ en: "Male", ne: "पुरुष" })}</option>
          <option value="female">{L({ en: "Female", ne: "महिला" })}</option>
          <option value="other">{L({ en: "Other", ne: "अन्य" })}</option>
        </select>
      </Field>
      <Field required label={L({ en: "Applying for Grade", ne: "भर्ना हुन चाहेको कक्षा" })} error={errors.applying_grade}>
        <select name="applying_grade" defaultValue="" className={inputCls}>
          <option value="" disabled>—</option>
          {grades.map((g) => <option key={g} value={g}>{/^\d+$/.test(g) ? L({ en: `Grade ${g}`, ne: `कक्षा ${g}` }) : g}</option>)}
        </select>
      </Field>
      <Field required label={L({ en: "Parent/Guardian Name", ne: "अभिभावक/संरक्षकको नाम" })} error={errors.guardian_name}><input name="guardian_name" maxLength={120} className={inputCls} /></Field>
      <Field required label={L({ en: "Contact Number", ne: "सम्पर्क नम्बर" })} error={errors.phone}><input name="phone" type="tel" maxLength={20} className={inputCls} /></Field>
      <Field label={L({ en: "Email Address", ne: "इमेल ठेगाना" })} error={errors.email}><input name="email" type="email" maxLength={255} className={inputCls} /></Field>
      <Field label={L({ en: "Previous School (optional)", ne: "पहिलेको विद्यालय (ऐच्छिक)" })}><input name="previous_school" maxLength={160} className={inputCls} /></Field>
      <div className="sm:col-span-2">
        <Field label={L({ en: "Message", ne: "सन्देश" })}><textarea name="message" rows={4} maxLength={2000} className={`${inputCls} h-auto py-3`} /></Field>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
        <p className="text-xs text-muted-foreground">{L({ en: "Your information is kept private and only seen by the school office.", ne: "तपाईंको जानकारी गोप्य राखिन्छ र विद्यालय कार्यालयले मात्र हेर्छ।" })}</p>
        <Button type="submit" variant="gold" size="xl" disabled={loading}>{loading && <Loader2 className="animate-spin" />}{L({ en: "Submit Inquiry", ne: "सोधपुछ पठाउनुहोस्" })}</Button>
      </div>
    </form>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.union([z.literal(""), z.string().trim().regex(phoneRe)]),
  message: z.string().trim().min(5).max(2000),
});

export function ContactForm() {
  const { t } = useLang();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) { const k = String(i.path[0]); errs[k] = t(k === "email" ? msg.email : k === "phone" ? msg.phone : msg.required); }
      setErrors(errs); return;
    }
    setErrors({}); setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({ ...parsed.data, phone: parsed.data.phone || null });
    setLoading(false);
    if (error) { toast.error(t(msg.sendFail)); return; }
    form.reset(); setDone(true);
    toast.success(t({ en: "Message sent. Thank you!", ne: "सन्देश पठाइयो। धन्यवाद!" }));
  }
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <Field required label={t({ en: "Your Name", ne: "तपाईंको नाम" })} error={errors.name}><input name="name" maxLength={120} className={inputCls} /></Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field required label={t({ en: "Email", ne: "इमेल" })} error={errors.email}><input name="email" type="email" maxLength={255} className={inputCls} /></Field>
        <Field label={t({ en: "Phone", ne: "फोन" })} error={errors.phone}><input name="phone" type="tel" maxLength={20} className={inputCls} /></Field>
      </div>
      <Field required label={t({ en: "Message", ne: "सन्देश" })} error={errors.message}><textarea name="message" rows={5} maxLength={2000} className={`${inputCls} h-auto py-3`} /></Field>
      {done && <p className="text-sm text-success">{t({ en: "We received your message.", ne: "हामीले तपाईंको सन्देश प्राप्त गर्‍यौं।" })}</p>}
      <Button type="submit" variant="navy" size="xl" disabled={loading} className="justify-self-start">{loading && <Loader2 className="animate-spin" />}{t({ en: "Send Message", ne: "सन्देश पठाउनुहोस्" })}</Button>
    </form>
  );
}

export function ContactSection() {
  const { t } = useLang();
  const q = encodeURIComponent(school.mapQuery);
  return (
    <section className="container-x grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
      <div>
        <span className="eyebrow">{t({ en: "Get in touch", ne: "सम्पर्कमा रहनुहोस्" })}</span>
        <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">{t({ en: "Contact & Location", ne: "सम्पर्क तथा स्थान" })}</h2>
        <ul className="mt-8 space-y-5">
          <li className="flex gap-4"><span className="rounded-xl bg-gold-soft p-3 text-primary"><MapPin className="h-5 w-5" /></span><span><span className="block text-sm text-muted-foreground">{t({ en: "Address", ne: "ठेगाना" })}</span><span className="font-medium text-primary">{t(school.address)}</span></span></li>
          <li className="flex gap-4"><span className="rounded-xl bg-gold-soft p-3 text-primary"><Mail className="h-5 w-5" /></span><span><span className="block text-sm text-muted-foreground">{t({ en: "Email", ne: "इमेल" })}</span><a href={`mailto:${school.email}`} className="break-all font-medium text-primary hover:underline">{school.email}</a></span></li>
          <li className="flex gap-4"><span className="rounded-xl bg-gold-soft p-3 text-primary"><Phone className="h-5 w-5" /></span><span><span className="block text-sm text-muted-foreground">{t({ en: "Phone", ne: "फोन" })}</span><span className="font-medium text-primary">{school.phone || t({ en: "To be added", ne: "थपिन बाँकी" })}</span></span></li>
        </ul>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe title="Map" src={`https://www.google.com/maps?q=${q}&output=embed`} className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <Button asChild variant="outline" className="mt-4 rounded-full"><a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer"><Navigation />{t({ en: "Get Directions", ne: "बाटो हेर्नुहोस्" })}</a></Button>
      </div>
      <ContactForm />
    </section>
  );
}
