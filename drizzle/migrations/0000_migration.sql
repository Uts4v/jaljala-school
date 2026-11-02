CREATE TABLE public.admission_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL CHECK (char_length(student_name) BETWEEN 2 AND 120),
  date_of_birth date NOT NULL,
  gender text NOT NULL CHECK (gender IN ('male','female','other')),
  applying_grade text NOT NULL CHECK (char_length(applying_grade) BETWEEN 1 AND 40),
  guardian_name text NOT NULL CHECK (char_length(guardian_name) BETWEEN 2 AND 120),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text CHECK (email IS NULL OR char_length(email) <= 255),
  previous_school text CHECK (previous_school IS NULL OR char_length(previous_school) <= 160),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.admission_inquiries TO anon, authenticated;
GRANT ALL ON public.admission_inquiries TO service_role;
ALTER TABLE public.admission_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an inquiry" ON public.admission_inquiries FOR INSERT TO anon, authenticated WITH CHECK (status = 'new');

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 20),
  message text NOT NULL CHECK (char_length(message) BETWEEN 5 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a message" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.notices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_ne text NOT NULL,
  summary_en text NOT NULL,
  summary_ne text NOT NULL,
  category text NOT NULL CHECK (category IN ('admission','exam','event','holiday','general')),
  published_on date NOT NULL DEFAULT current_date,
  attachment_url text,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.notices TO anon, authenticated;
GRANT ALL ON public.notices TO service_role;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published notices are public" ON public.notices FOR SELECT TO anon, authenticated USING (is_published);

INSERT INTO public.notices (title_en, title_ne, summary_en, summary_ne, category, published_on) VALUES
('[Sample] Admission open for the new academic session', '[नमुना] नयाँ शैक्षिक सत्रका लागि भर्ना खुला', 'Sample notice — replace with the official admission notice and dates.', 'नमुना सूचना — आधिकारिक भर्ना सूचना र मितिहरूले प्रतिस्थापन गर्नुहोस्।', 'admission', '2026-10-28'),
('[Sample] Terminal examination schedule', '[नमुना] त्रैमासिक परीक्षा तालिका', 'Sample notice — replace with the official examination routine.', 'नमुना सूचना — आधिकारिक परीक्षा तालिकाले प्रतिस्थापन गर्नुहोस्।', 'exam', '2026-10-20'),
('[Sample] Annual sports week', '[नमुना] वार्षिक खेलकुद सप्ताह', 'Sample notice — replace with confirmed event details.', 'नमुना सूचना — पुष्टि भएका कार्यक्रम विवरणले प्रतिस्थापन गर्नुहोस्।', 'event', '2026-10-12'),
('[Sample] Tihar holiday notice', '[नमुना] तिहार बिदा सूचना', 'Sample notice — replace with the official holiday dates.', 'नमुना सूचना — आधिकारिक बिदाका मितिहरूले प्रतिस्थापन गर्नुहोस्।', 'holiday', '2026-10-05');