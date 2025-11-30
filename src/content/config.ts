// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Se elimina el `loader` experimental y se usa la configuración estándar.
const projectsCollection = defineCollection({
    // `type: 'content'` es el valor por defecto para colecciones en `src/content`
    // y le indica a Astro que procesará los archivos (md, mdx) para obtener un slug y cuerpo.
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
        image: image().optional(),
        github: z.string().url().optional(),
        link: z.string().url().optional(),
    }),
});

export const collections = {
    'projects': projectsCollection
};
