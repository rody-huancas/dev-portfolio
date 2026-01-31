import Title from "../Title";
import TechSlider from "../TechSlider";

const AboutSection = () => {
  return (
    <section id="about" className="pt-24">
      <div className="space-y-5">
        <Title label="Sobre Mí" title="Conoce un poco" subtitle="más de mí" />

        <div className="space-y-10 text-background/60 dark:text-foreground text-lg md:text-xl leading-relaxed">
          <p>
            Soy <span className="dark:text-foreground text-background/80 font-medium">Rody Huancas</span>, de
            Perú. Ingeniero de Sistemas de la
            <a
              href="https://www.uss.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-foreground text-background/80 font-medium hover:text-status transition-all border-b border-status/20 hover:border-status mx-1"
              title="Universidad Señor de Sipán"
            >
              Universidad Señor de Sipán.
            </a>
            Llevo poco más de <span className="text-status">tres años</span>{" "}
            trabajando en proyectos de software, involucrándome tanto en lo que
            ve el usuario como en la lógica que corre por detrás.
          </p>

          <p>
            No me quedo solo en una parte del proceso. Me gusta encargarme de la{" "}
            <span className="dark:text-foreground text-background/80">arquitectura completa</span>, desde
            armar interfaces fluidas hasta estructurar bases de datos que no den
            problemas. Mi enfoque como{" "}
            <span className="text-status font-medium underline decoration-status/40 underline-offset-8">
              Full Stack
            </span>{" "}
            es asegurar que el sistema sea sólido de principio a fin.
          </p>

          <p>
            Me especializo en el ecosistema de{" "}
            <span className="dark:text-foreground text-background/80">JavaScript/TypeScript</span>, ya sea para la web o
            para aplicaciones móviles. Para mí, programar no es solo sacar
            tareas rápido; es escribir código que sea{" "}
            <span className="text-status">fácil de leer</span>, escalable y,
            sobre todo, fácil de mantener para el futuro.
          </p>

          <div className="pt-10 border-t border-background/10 dark:border-foreground/10">
            <p className="dark:text-foreground text-background/60 font-medium">
              Más allá de las herramientas de moda, mi prioridad es la{" "}
              <span className="text-status">estabilidad</span>. Construyo
              software pensando en que debe funcionar bien hoy y seguir siendo
              útil mañana.
            </p>
          </div>
        </div>
      </div>

      <TechSlider />
    </section>
  );
};

export default AboutSection;
