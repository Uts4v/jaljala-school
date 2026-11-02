import hero from "@/assets/hero.jpg";
import classroom from "@/assets/classroom.jpg";
import culture from "@/assets/culture.jpg";
import sports from "@/assets/sports.jpg";
import reading from "@/assets/reading.jpg";
import science from "@/assets/science.jpg";
import type { T } from "@/lib/i18n";

// Illustrative images — replace with authentic school photographs.
export const img = { hero, classroom, culture, sports, reading, science };

export const facilityImage: Record<string, string> = {
  classroom, library: reading, science, computer: classroom, sports, campus: hero,
};

export const gallery: { src: string; cat: string; alt: T }[] = [
  { src: culture, cat: "culture", alt: { en: "Students performing a cultural dance", ne: "सांस्कृतिक नृत्य प्रस्तुत गर्दै विद्यार्थीहरू" } },
  { src: sports, cat: "sports", alt: { en: "Football match on sports day", ne: "खेलकुद दिवसमा फुटबल खेल" } },
  { src: classroom, cat: "education", alt: { en: "Students raising hands in class", ne: "कक्षामा हात उठाउँदै विद्यार्थीहरू" } },
  { src: reading, cat: "activities", alt: { en: "Students reading together", ne: "सँगै पढ्दै विद्यार्थीहरू" } },
  { src: science, cat: "education", alt: { en: "A science activity", ne: "विज्ञान क्रियाकलाप" } },
  { src: hero, cat: "celebration", alt: { en: "Students walking to school in the hills", ne: "पहाडमा विद्यालय जाँदै विद्यार्थीहरू" } },
];
