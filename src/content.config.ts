import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/listings' }),
  // 1. Pass { image } into the schema function
  schema: ({ image }) => z.object({
    name: z.string(),
    category: z.enum([
      'Eat & Drink',
      'Places to Stay',
      'Places to Explore',
      'Places to Shop',
      'Music & Nightlife'
    ]),
    area: z.string(),
    description: z.string(),
    // 2. Make phone and whatsapp optional individually, 
    // or keep phone required and whatsapp optional:
    phone: z.string().optional(),
    whatsapp: z.string().optional(),
    address: z.string().optional(),
    map_link: z.string().optional(),
    // 3. Use image() inside z.array() for automatic WebP compression
    photos: z.array(image()).default([]),
    featured: z.boolean().default(false),
    featured_until: z.coerce.date().optional(),
    status: z.enum(['pending', 'live', 'expired']).default('pending'),
    date_added: z.coerce.date(),
  }),
});

export const collections = { listings };