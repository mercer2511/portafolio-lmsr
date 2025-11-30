// src/components/react/Hero.tsx
import { motion, type Variants } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
// 1. Importa la imagen desde la carpeta `assets`.
// `avatarSrc` es un objeto con información de la imagen optimizada.
import avatarSrc from '../../assets/images/avatar.jpg';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
};

const avatarVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
};

export default function Hero() {
    return (
        <motion.section
            id="hero-section"
            className="relative py-20 md:py-32"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div variants={itemVariants} className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                            </span>
                            Disponible para trabajar
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Hola, soy <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] via-purple-500 to-indigo-500">
                                Leonardo
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-lg leading-relaxed">
                            Desarrollador Full Stack especializado en crear experiencias digitales rápidas y accesibles. Transformo ideas complejas en código limpio.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://github.com/mercer2511" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-colors">
                                <IconBrandGithub className="size-5" />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/leonardo-sanchez-is/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-card)] rounded-full font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                                <IconBrandLinkedin className="size-5" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={avatarVariants} className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-purple-500 rounded-full blur-[80px] opacity-40"></div>
                            <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-[var(--color-bg-card)]/80 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                                {/* CORRECCIÓN: Usamos `avatarSrc.src` para obtener la URL de la imagen. */}
                                <img
                                    src={avatarSrc.src}
                                    alt="Foto de perfil de Leonardo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}
