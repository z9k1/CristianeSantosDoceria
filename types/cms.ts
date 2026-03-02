export type CtaType =
  | "whatsapp_primary"
  | "whatsapp_quote"
  | "external_ifood"
  | "external_instagram";

export type BrandSettings = {
  businessName: string;
  tagline: string;
  summary: string;
  whatsappNumber: string;
  instagramUrl: string;
  ifoodUrl: string;
  menuPdfUrl: string;
  coverage: string;
  address: string;
  phoneDisplay: string;
  minOrderNoticeDays: number;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  priceRange: string;
  minOrder?: string;
  imageHint: string;
};

export type EventPackage = {
  id: string;
  title: string;
  details: string;
  price: string;
};

export type Testimonial = {
  id: string;
  author: string;
  role: string;
  text: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type CtaConfig = {
  id: string;
  label: string;
  type: CtaType;
  message?: string;
  href?: string;
};
