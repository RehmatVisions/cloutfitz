import { categoryImages, niches as nichesConfig, categories as categoriesConfig, clients } from "./assets-config";
import { portfolioItems } from "./portfolio-template";

export type WorkItem = {
  id: string;
  title: string;
  client: string;
  niche: string;
  category: string;
  image: string;
};

export const niches = [...nichesConfig];
export const categories = [...categoriesConfig];

/**
 * PORTFOLIO DATA - USES YOUR REAL ASSETS!
 * 
 * Ab portfolioItems (aapke real assets) use hote hain
 * + fallback categoryImages use hote hain jab real image nahi ho
 */
export const works: WorkItem[] = portfolioItems.map((item) => ({
  id: item.id,
  title: item.title,
  client: item.client,
  niche: item.niche,
  category: item.category,
  image: item.image,
}));
