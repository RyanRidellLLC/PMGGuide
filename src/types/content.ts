// /types/content.ts
export type Availability = 'in_stock' | 'backorder' | 'discontinued';
export type Finish = 'honed' | 'polished' | 'brushed' | 'leathered';
export type ColorFamily = 'white' | 'gray' | 'beige' | 'black' | 'other';
export type Industry = 'residential' | 'commercial' | 'hospitality' | 'public';

export interface StoneSeries {
  title: string;
  slug: string;
  summary?: string;
  color_family: ColorFamily;
  finish: Finish;
  dimensions?: string;
  origin?: string;
  availability_status: Availability;
  datasheet_url?: string;
  gallery: { url: string; alt: string }[];
  tags?: string[];
  featured?: boolean;
  seo?: { title?: string; description?: string };
}

export interface Project {
  title: string;
  slug: string;
  summary?: string;
  location?: string;
  industry: Industry;
  year?: number;
  stones_used: string[]; // slugs that map to StoneSeries
  specs?: Record<string, string>;
  hero_image?: { url: string; alt: string };
  gallery: { url: string; alt: string }[];
  body_md?: string;
  seo?: { title?: string; description?: string };
}

export interface Asset {
  file: string; // image/pdf URL
  alt?: string;
  credit?: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface SeriesQueryParams {
  q?: string;
  color_family?: ColorFamily;
  finish?: Finish;
  availability?: Availability;
  page?: number;
  limit?: number;
}

export interface ProjectQueryParams {
  q?: string;
  industry?: Industry;
  year?: number;
  stone?: string; // slug
  page?: number;
  limit?: number;
}
