import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";

import {Badge} from "@/components/ui/badge.tsx";
import {Github, Linkedin} from "lucide-react";

import {skills} from '@/assets/json/skills.json';
import {experience} from '@/assets/json/experience.json';
import {projects} from '@/assets/json/projects.json';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <span className="flex items-center justify-center">
          <span className="sr-only">Martin's Portfolio</span>
        </span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
            Habilidades
          </a>
          <a href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
            Experiencia
          </a>
          <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Proyectos
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contacto
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <span className='font-normal'>Hola me llamo</span> Martin
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Soy un <span className='font-bold'>Desarrollador Full Stack</span> con 3 años de experiencia
                  especializandose en PostgreSQL, Java, React y
                  Angular.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contáctame
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Proyectos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {skills.map(skill =>
                <Card key={skill.id}>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Badge className="mb-2">{skill.type}</Badge>
                    <p className="text-lg font-semibold">{skill.name}</p>
                  </CardContent>
                </Card>
              )}

            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experiencia</h2>
            <div className="space-y-8">

              {
                experience.map(exp =>
                  <div key={exp.id} className="flex flex-col md:flex-row md:space-x-4">
                    <div className="md:w-1/4">
                      <h3 className="text-2xl font-bold">
                        {exp.company}
                        <br/>
                        <span className='text-xl'>{exp.position}</span>
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
                    </div>
                    <div className="md:w-3/4">
                      <p>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Proyectos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 h-24">{project.description}</p>

                    {/* Tal vez eliminar IDK (＃°Д°) */}
                    {/*<h4 className="font-bold mb-2 text-center">Stack</h4>*/}

                    <div className='flex justify-center items-center flex-wrap gap-4 mb-4'>
                      {project.stack && project.stack.map(stack =>
                        <TooltipProvider key={stack.name}>
                          <Tooltip>
                            <TooltipTrigger>
                              <img className='h-7 w-auto grayscale-0  md:grayscale md:hover:grayscale-0'
                                   key={stack.name}
                                   src={stack.img} alt={stack.name}/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{stack.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>

                    {project.url ?
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(project.url, '_blank')}
                        rel="noopener noreferrer"
                      >
                        Ver Sitio
                      </Button> : null}

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">

          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contáctame</h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon"
                      onClick={() => window.open('https://github.com/MacroHEX', '_blank')}
                      rel="noopener noreferrer">
                <Github className="h-4 w-4"/>
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon"
                      onClick={() => window.open('https://www.linkedin.com/in/memedinapy', '_blank')}
                      rel="noopener noreferrer">
                <Linkedin className="h-4 w-4"/>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Martin. Todos los Derechos Reservados.</p>
      </footer>
    </div>
  )
}

export default App
