/**
 * Editable school content in English (en) and Nepali (ne).
 * Items marked `placeholder: true` are NOT confirmed school information —
 * replace them with official details before publishing.
 */
import type { T } from "@/lib/i18n";

export const school = {
  name: { en: "Jaljala English Boarding School", ne: "जलजला इङ्लिस बोर्डिङ स्कूल" },
  short: { en: "JEBS", ne: "जेईबीएस" },
  address: { en: "Sunil Smriti-4, Sulichaur, Rolpa, Nepal", ne: "सुनिल स्मृति-४, सुलिचौर, रोल्पा, नेपाल" },
  email: "jebsrolpa2064@gmail.com",
  phone: "", // add official phone number, e.g. "+977 98XXXXXXXX"
  whatsapp: "", // add official WhatsApp number in international format, digits only
  mapQuery: "Sulichaur, Rolpa, Nepal", // replace with verified coordinates when available
  social: { facebook: "", youtube: "" },
};

export const nav: { to: string; label: T }[] = [
  { to: "/", label: { en: "Home", ne: "गृहपृष्ठ" } },
  { to: "/about", label: { en: "About Us", ne: "हाम्रो बारेमा" } },
  { to: "/academics", label: { en: "Academics", ne: "शैक्षिक कार्यक्रम" } },
  { to: "/facilities", label: { en: "Facilities", ne: "सुविधाहरू" } },
  { to: "/gallery", label: { en: "Gallery", ne: "फोटो ग्यालेरी" } },
  { to: "/notices", label: { en: "Notices", ne: "सूचनाहरू" } },
  { to: "/contact", label: { en: "Contact", ne: "सम्पर्क" } },
];

export const morePages: { to: string; label: T }[] = [
  { to: "/principal", label: { en: "Principal's Message", ne: "प्रधानाध्यापकको सन्देश" } },
  { to: "/mission", label: { en: "Mission, Vision & Values", ne: "लक्ष्य, दृष्टि र मूल्यहरू" } },
  { to: "/faculty", label: { en: "Teaching Faculty", ne: "शिक्षक समूह" } },
  { to: "/admission", label: { en: "Admission", ne: "भर्ना" } },
  { to: "/events", label: { en: "Events & Activities", ne: "कार्यक्रम तथा गतिविधि" } },
  { to: "/videos", label: { en: "Video Gallery", ne: "भिडियो ग्यालेरी" } },
];

export const ui = {
  apply: { en: "Apply for Admission", ne: "भर्नाका लागि आवेदन" },
  explore: { en: "Explore Our School", ne: "हाम्रो विद्यालय हेर्नुहोस्" },
  inquiry: { en: "Admission Inquiry", ne: "भर्ना सोधपुछ" },
  heroTitle: { en: "Building Bright Futures Through Quality Education.", ne: "गुणस्तरीय शिक्षामार्फत उज्ज्वल भविष्य निर्माण।" },
  heroText: {
    en: "A caring English-medium school in the hills of Rolpa, nurturing curious minds, good character and a love of learning.",
    ne: "रोल्पाका पहाडहरूमा रहेको स्नेहपूर्ण अङ्ग्रेजी माध्यम विद्यालय, जिज्ञासु मन, असल चरित्र र सिकाइप्रतिको प्रेम विकास गर्दै।",
  },
  readMore: { en: "Read more", ne: "थप पढ्नुहोस्" },
  viewAll: { en: "View all", ne: "सबै हेर्नुहोस्" },
  placeholderNote: { en: "Editable placeholder — to be confirmed by the school", ne: "सम्पादनयोग्य नमुना — विद्यालयबाट पुष्टि हुन बाँकी" },
  backTop: { en: "Back to top", ne: "माथि जानुहोस्" },
  contactUs: { en: "Contact us", ne: "सम्पर्क गर्नुहोस्" },
  more: { en: "More", ne: "थप" },
  menu: { en: "Menu", ne: "मेनु" },
};

export const welcome = {
  eyebrow: { en: "Welcome", ne: "स्वागत छ" },
  title: { en: "A school where every child is known and valued", ne: "जहाँ हरेक बालबालिकालाई चिनिन्छ र मूल्य दिइन्छ" },
  body: {
    en: "Jaljala English Boarding School serves families of Sulichaur and the wider Rolpa community. We believe education is more than examinations — it is the steady shaping of knowledge, discipline, creativity and kindness.",
    ne: "जलजला इङ्लिस बोर्डिङ स्कूलले सुलिचौर तथा रोल्पाका परिवारहरूलाई सेवा दिँदै आएको छ। हामी विश्वास गर्छौं कि शिक्षा परीक्षाभन्दा बढी हो — यो ज्ञान, अनुशासन, सिर्जनशीलता र दयालुताको निरन्तर निर्माण हो।",
  },
  values: [
    { en: "Respect", ne: "सम्मान" },
    { en: "Discipline", ne: "अनुशासन" },
    { en: "Curiosity", ne: "जिज्ञासा" },
    { en: "Integrity", ne: "इमानदारी" },
  ] as T[],
};

export const principal = {
  placeholder: true,
  name: { en: "[Principal's Name]", ne: "[प्रधानाध्यापकको नाम]" },
  role: { en: "Principal", ne: "प्रधानाध्यापक" },
  message: {
    en: "Dear parents, guardians and students — welcome. Our aim is to provide a safe, disciplined and joyful environment where children grow in knowledge and character. We work closely with families, because a child learns best when home and school walk together. (Editable placeholder message.)",
    ne: "आदरणीय अभिभावक, संरक्षक तथा विद्यार्थीहरू — हार्दिक स्वागत छ। हाम्रो उद्देश्य बालबालिकालाई ज्ञान र चरित्रमा विकास गर्न सुरक्षित, अनुशासित र आनन्ददायी वातावरण प्रदान गर्नु हो। घर र विद्यालय सँगै हिँड्दा बालबालिकाले सबैभन्दा राम्रो सिक्छन्। (सम्पादनयोग्य नमुना सन्देश।)",
  },
};

export const mission = {
  mission: {
    en: "To provide quality, values-based English-medium education that prepares students for further study and responsible citizenship.",
    ne: "विद्यार्थीलाई उच्च शिक्षा र जिम्मेवार नागरिकताका लागि तयार पार्ने गुणस्तरीय, मूल्यमा आधारित अङ्ग्रेजी माध्यम शिक्षा प्रदान गर्नु।",
  },
  vision: {
    en: "To be a trusted centre of learning in Rolpa where every child discovers their potential.",
    ne: "रोल्पामा हरेक बालबालिकाले आफ्नो क्षमता पत्ता लगाउने भरपर्दो शिक्षाकेन्द्र बन्नु।",
  },
};

export const features: { icon: string; title: T; text: T }[] = [
  { icon: "GraduationCap", title: { en: "Quality Education", ne: "गुणस्तरीय शिक्षा" }, text: { en: "Clear foundations in language, mathematics and science.", ne: "भाषा, गणित र विज्ञानमा बलियो आधार।" } },
  { icon: "Users", title: { en: "Experienced Teachers", ne: "अनुभवी शिक्षकहरू" }, text: { en: "Dedicated teachers who know each student.", ne: "हरेक विद्यार्थीलाई चिन्ने समर्पित शिक्षकहरू।" } },
  { icon: "Lightbulb", title: { en: "Student-Centered Learning", ne: "विद्यार्थी-केन्द्रित सिकाइ" }, text: { en: "Lessons that invite questions and participation.", ne: "प्रश्न र सहभागितालाई प्रोत्साहन गर्ने पाठहरू।" } },
  { icon: "ShieldCheck", title: { en: "Discipline & Character", ne: "अनुशासन र चरित्र निर्माण" }, text: { en: "Good habits, manners and responsibility.", ne: "असल बानी, शिष्टाचार र जिम्मेवारी।" } },
  { icon: "Trophy", title: { en: "Extracurricular Activities", ne: "अतिरिक्त क्रियाकलाप" }, text: { en: "Sports, culture and creative programs.", ne: "खेलकुद, संस्कृति र सिर्जनात्मक कार्यक्रम।" } },
  { icon: "HeartHandshake", title: { en: "Safe & Supportive", ne: "सुरक्षित र सहयोगी" }, text: { en: "A caring environment where children feel at home.", ne: "बालबालिकाले घरजस्तै महसुस गर्ने स्नेहपूर्ण वातावरण।" } },
];

export const programs: { title: T; grades: T; text: T }[] = [
  { title: { en: "Early Childhood Education", ne: "प्रारम्भिक बाल शिक्षा" }, grades: { en: "Nursery – UKG (to be confirmed)", ne: "नर्सरी – यूकेजी (पुष्टि हुन बाँकी)" }, text: { en: "Play-based learning, early literacy and numeracy.", ne: "खेलमा आधारित सिकाइ, प्रारम्भिक अक्षर र अङ्क ज्ञान।" } },
  { title: { en: "Primary Education", ne: "प्राथमिक शिक्षा" }, grades: { en: "Grades 1 – 5 (to be confirmed)", ne: "कक्षा १ – ५ (पुष्टि हुन बाँकी)" }, text: { en: "Strong basics in English, Nepali, mathematics and our environment.", ne: "अङ्ग्रेजी, नेपाली, गणित र हाम्रो वरिपरिमा बलियो आधार।" } },
  { title: { en: "Basic Education", ne: "आधारभूत शिक्षा" }, grades: { en: "Grades 6 – 8 (to be confirmed)", ne: "कक्षा ६ – ८ (पुष्टि हुन बाँकी)" }, text: { en: "Broader subjects, projects and independent study habits.", ne: "विस्तृत विषय, परियोजना कार्य र स्वाध्यायको बानी।" } },
  { title: { en: "Secondary Education", ne: "माध्यमिक शिक्षा" }, grades: { en: "Grades 9 – 10 (to be confirmed)", ne: "कक्षा ९ – १० (पुष्टि हुन बाँकी)" }, text: { en: "Focused preparation following the national curriculum.", ne: "राष्ट्रिय पाठ्यक्रम अनुसार केन्द्रित तयारी।" } },
];

export const facilities: { key: string; title: T; text: T }[] = [
  { key: "classroom", title: { en: "Classrooms", ne: "कक्षाकोठा" }, text: { en: "Bright, orderly learning spaces.", ne: "उज्यालो र व्यवस्थित सिकाइ स्थल।" } },
  { key: "library", title: { en: "Library", ne: "पुस्तकालय" }, text: { en: "To be confirmed by the school.", ne: "विद्यालयबाट पुष्टि हुन बाँकी।" } },
  { key: "science", title: { en: "Science Laboratory", ne: "विज्ञान प्रयोगशाला" }, text: { en: "To be confirmed by the school.", ne: "विद्यालयबाट पुष्टि हुन बाँकी।" } },
  { key: "computer", title: { en: "Computer Education", ne: "कम्प्युटर शिक्षा" }, text: { en: "To be confirmed by the school.", ne: "विद्यालयबाट पुष्टि हुन बाँकी।" } },
  { key: "sports", title: { en: "Sports and Games", ne: "खेलकुद" }, text: { en: "Open ground for games and sports days.", ne: "खेल र खेलकुद दिवसका लागि खुला मैदान।" } },
  { key: "campus", title: { en: "School Infrastructure", ne: "विद्यालय पूर्वाधार" }, text: { en: "Campus set among the hills of Rolpa.", ne: "रोल्पाका पहाडबीच रहेको परिसर।" } },
];

export const testimonials: { name: T; role: T; quote: T }[] = [
  { name: { en: "[Parent name]", ne: "[अभिभावकको नाम]" }, role: { en: "Parent", ne: "अभिभावक" }, quote: { en: "Placeholder testimonial — replace with a real quote from a parent.", ne: "नमुना प्रतिक्रिया — अभिभावकको वास्तविक भनाइले प्रतिस्थापन गर्नुहोस्।" } },
  { name: { en: "[Student name]", ne: "[विद्यार्थीको नाम]" }, role: { en: "Student", ne: "विद्यार्थी" }, quote: { en: "Placeholder testimonial — replace with a real quote from a student.", ne: "नमुना प्रतिक्रिया — विद्यार्थीको वास्तविक भनाइले प्रतिस्थापन गर्नुहोस्।" } },
  { name: { en: "[Alumni name]", ne: "[पूर्व विद्यार्थीको नाम]" }, role: { en: "Alumnus", ne: "पूर्व विद्यार्थी" }, quote: { en: "Placeholder testimonial — replace with a real quote from an alumnus.", ne: "नमुना प्रतिक्रिया — पूर्व विद्यार्थीको वास्तविक भनाइले प्रतिस्थापन गर्नुहोस्।" } },
];

export const noticeCategories: { key: string; label: T }[] = [
  { key: "all", label: { en: "All", ne: "सबै" } },
  { key: "admission", label: { en: "Admission", ne: "भर्ना" } },
  { key: "exam", label: { en: "Examination", ne: "परीक्षा" } },
  { key: "event", label: { en: "School Events", ne: "विद्यालय कार्यक्रम" } },
  { key: "holiday", label: { en: "Holidays", ne: "बिदा" } },
  { key: "general", label: { en: "General", ne: "सामान्य" } },
];
