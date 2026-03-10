import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useInView} from "framer-motion";
import {Button} from "@/components/ui/button.tsx";
import {ArrowUp, ArrowUpRight, Github, Linkedin, Moon, Sun} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";

import {skills} from '@/assets/json/skills.json';
import {experience} from '@/assets/json/experience.json';
import {projects} from '@/assets/json/projects.json';

// Light  → bg:cream-white  · text:#0C2C55  · accent:#629FAD
// Dark   → bg:deep-navy    · text:#EDEDCE  · accent:#629FAD

const skillCategories = [
  {
    type: 'Frontend',
    chipClass: 'bg-foreground/5 text-foreground border border-foreground/20 hover:bg-foreground/10',
  },
  {
    type: 'Backend',
    chipClass: 'bg-secondary/10 text-secondary dark:text-[#629FAD] border border-secondary/30 hover:bg-secondary/20',
  },
  {
    type: 'Database',
    chipClass: 'bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20',
  },
  {
    type: 'AI Tools',
    chipClass: 'bg-muted text-muted-foreground border border-muted-foreground/30 hover:bg-accent/10 hover:text-accent hover:border-accent/30',
  },
  {
    type: 'JetBrains',
    chipClass: 'bg-foreground/[0.04] text-foreground border border-accent/20 hover:bg-accent/10 hover:border-accent/40',
  },
];

function FadeIn({
                  children,
                  delay = 0,
                  className = "",
                }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-80px"});
  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 24}}
      animate={isInView ? {opacity: 1, y: 0} : {}}
      transition={{duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1]}}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  );
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* ── Navigation ── */}
      <header
        className="fixed top-0 w-full z-50 px-6 lg:px-16 h-16 flex items-center bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="ml-auto flex items-center gap-6 sm:gap-8">
          {(['Habilidades', 'Experiencia', 'Proyectos', 'Contacto'] as const).map((label, i) => {
            const ids = ['skills', 'experience', 'projects', 'contact'];
            return (
              <a
                key={label}
                href={`#${ids[i]}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide font-medium hidden sm:block"
              >
                {label}
              </a>
            );
          })}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
          </button>
        </nav>
      </header>

      <main className="flex-1 pt-16">

        {/* ── Hero ── */}
        <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden bg-background">
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse 90% 80% at 15% 50%, #000 50%, transparent 100%)',
            }}
          />
          {/* Soft glow */}
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none"/>

          <div className="container px-6 md:px-16 relative">
            <motion.div
              initial={{opacity: 0, y: 36}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: [0.25, 0.1, 0.25, 1]}}
            >
              <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-6">
                Hola, soy
              </p>
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-none mb-5">
                <span className="text-foreground">Martin</span>
                <br/>
                <span className="text-secondary dark:text-accent">Medina</span>
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-accent"/>
                <p className="text-sm text-accent font-medium tracking-widest uppercase">
                  Desarrollador Full Stack
                </p>
              </div>
              <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-sm sm:text-base">
                4 años construyendo aplicaciones web con React, Angular, Java y Go.
                Apasionado por la arquitectura limpia y la experiencia de usuario.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 border-0 font-semibold px-6"
                >
                  <a href="#contact">Contacto</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:bg-muted font-medium px-6"
                >
                  <a href="#projects">Ver proyectos</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-28 border-t border-border bg-muted/50">
          <div className="container px-6 md:px-16">
            <FadeIn>
              <p className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-2">Stack</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
                Habilidades
              </h2>
            </FadeIn>

            <div className="space-y-10">
              {skillCategories.map(({type, chipClass}) => {
                const categorySkills = skills.filter((s) => s.type === type);
                if (!categorySkills.length) return null;
                return (
                  <FadeIn key={type}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <span
                        className="font-mono text-xs text-accent/70 uppercase tracking-[0.2em] sm:w-32 pt-1.5 shrink-0">
                        {type}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <motion.span
                            key={skill.id}
                            whileHover={{scale: 1.05, y: -2}}
                            transition={{duration: 0.15}}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default transition-colors ${chipClass}`}
                          >
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-28 border-t border-border bg-background">
          <div className="container px-6 md:px-16">
            <FadeIn>
              <p className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-2">Carrera</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
                Experiencia
              </h2>
            </FadeIn>

            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-accent/30 hidden md:block"/>

              {experience.map((exp, i) => (
                <FadeIn key={exp.id} delay={i * 0.1}>
                  <div className="md:pl-12 relative pb-14 last:pb-0">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full border-2 border-accent bg-background hidden md:block"/>

                    <div className="flex flex-col sm:flex-row sm:gap-12">
                      <div className="sm:w-44 shrink-0 mb-2 sm:mb-0">
                        <p className="font-mono text-xs text-accent/80 tracking-wide">
                          {exp.duration}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                        <p className="text-sm text-secondary dark:text-accent font-medium mb-3">{exp.position}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-28 border-t border-border bg-muted/50">
          <div className="container px-6 md:px-16">
            <FadeIn>
              <p className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-2">Trabajo</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
                Proyectos
              </h2>
            </FadeIn>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <FadeIn key={project.id} delay={(i % 6) * 0.05}>
                  <motion.div
                    whileHover={{y: -5}}
                    transition={{duration: 0.2}}
                    className="group relative border border-border rounded-2xl flex flex-col h-full bg-card overflow-hidden hover:border-accent/50 hover:shadow-md transition-all duration-200"
                  >
                    {/* Accent top bar that grows on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] bg-accent/0 group-hover:bg-accent/60 transition-all duration-300"/>

                    <div className="p-6 flex flex-col h-full">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="font-bold text-card-foreground leading-snug">{project.name}</h3>
                        {project.url && (
                          <button
                            onClick={() => window.open(project.url, '_blank')}
                            className="shrink-0 p-1.5 rounded-lg text-muted-foreground/50 hover:text-accent hover:bg-accent/10 transition-colors"
                            aria-label={`Abrir ${project.name}`}
                          >
                            <ArrowUpRight className="h-4 w-4"/>
                          </button>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      {/* Divider */}
                      <div className="border-t border-border/60 pt-4">
                        <div className="flex flex-wrap gap-3">
                          {project.stack?.map((stack) => (
                            <TooltipProvider key={stack.name}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <img
                                    className="h-5 w-auto opacity-40 hover:opacity-90 transition-all grayscale hover:grayscale-0"
                                    src={stack.img}
                                    alt={stack.name}
                                  />
                                </TooltipTrigger>
                                <TooltipContent className="bg-foreground text-background border-border">
                                  <p>{stack.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-28 border-t border-border bg-foreground">
          <div className="container px-6 md:px-16">
            <FadeIn className="max-w-xl">
              <p className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-2">Contacto</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-background mb-4">
                Trabajemos juntos
              </h2>
              <p className="text-background/60 mb-10 leading-relaxed">
                Estoy disponible para proyectos freelance y nuevas oportunidades laborales.
                No dudes en escribirme.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="gap-2 border-accent/50 text-accent bg-transparent hover:bg-accent/10 hover:border-accent font-medium"
                  variant="outline"
                  onClick={() => window.open('https://github.com/MacroHEX', '_blank')}
                >
                  <Github className="h-4 w-4"/>
                  GitHub
                </Button>
                <Button
                  className="gap-2 border-accent/50 text-accent bg-transparent hover:bg-accent/10 hover:border-accent font-medium"
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/memedinapy', '_blank')}
                >
                  <Linkedin className="h-4 w-4"/>
                  LinkedIn
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <footer className="bg-foreground border-t border-background/10 px-6 md:px-16 py-5 flex items-center">
        <p className="text-xs text-background/30">© {new Date().getFullYear()} Martin Medina. Todos los derechos
          reservados.</p>
      </footer>

      {/* ── Back to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{opacity: 0, scale: 0.8, y: 10}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.8, y: 10}}
            transition={{duration: 0.2}}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4"/>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}