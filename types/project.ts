export type Project = {
  slug: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  tech: string[];
  media: string[];
  thumnail: string;
};