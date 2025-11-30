// src/components/react/ProjectCard.tsx
import { motion, type Variants } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

// Interfaz simplificada para las props.
// Ya no usamos CollectionEntry, sino un objeto plano con los datos que necesitamos.
interface ProjectProps {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    github?: string;
    link?: string;
}

interface Props {
    project: ProjectProps;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function ProjectCard({ project }: Props) {
    // Ahora podemos desestructurar las propiedades directamente desde `project`.
    const { slug, title, description, tags, github, link } = project;

    return (
        <motion.a
            href={`/projects/${slug}`} // Usamos el slug directamente.
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative block rounded-xl bg-[var(--color-bg-card)] p-6 border border-transparent hover:border-[var(--color-accent)]/50 transition-colors duration-300 h-full"
        >
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-body)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                        {title}
                    </h3>

                    <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-3">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--color-text-body)]/10">
                    {github && (
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(github, '_blank'); // Lógica simplificada
                            }}
                            className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] transition-colors cursor-pointer"
                        >
                            <IconBrandGithub className="size-5" />
                            <span>Código</span>
                        </div>
                    )}

                    {link && (
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(link, '_blank'); // Lógica simplificada
                            }}
                            className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors ml-auto cursor-pointer"
                        >
                            <span>Demo</span>
                            <IconExternalLink className="size-5" />
                        </div>
                    )}
                </div>
            </div>
        </motion.a>
    );
}
