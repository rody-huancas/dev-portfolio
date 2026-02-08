import Title from "../Title";
import TechSlider from "../TechSlider";

const AboutSection = () => {
  return (
    <section id="about" className="pt-24">
      <div className="space-y-5">
        <Title label="Sobre Mí" title="Un poco de mi" subtitle="historia" />

        <div className="space-y-10 text-background/60 dark:text-foreground text-lg md:text-xl leading-relaxed">
          <p>
            Soy{" "}
            <span className="dark:text-foreground text-background/80 font-medium">
              Rody Huancas
            </span>
            , Ingeniero de Sistemas de la
            <a
              href="https://www.uss.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-foreground text-background/80 font-medium hover:text-status transition-all border-b border-status/20 hover:border-status mx-1"
              title="Universidad Señor de Sipán"
            >
              USS
            </a>
            en Perú. Llevo <span className="text-status">más de tres años</span>{" "}
            transformando ideas en software real, moviéndome con la misma
            soltura entre el diseño de una interfaz fluida y la lógica que la
            hace funcionar.
          </p>

          <p>
            No me gusta dejar las cosas a medias. Como{" "}
            <span className="text-status font-medium underline decoration-status/40 underline-offset-8">
              Full Stack Developer
            </span>
            , disfruto encargarme de la{" "}
            <span className="dark:text-foreground text-background/80">
              arquitectura completa
            </span>
            : desde que el usuario hace clic hasta que el dato se guarda de
            forma segura en una base de datos bien estructurada.
          </p>

          <p>
            Mi terreno de juego es el ecosistema de{" "}
            <span className="dark:text-foreground text-background/80">
              JavaScript y TypeScript
            </span>
            . Para mí, programar no es solo "picar código" para cumplir una
            tarea; es diseñar sistemas{" "}
            <span className="text-status">escalables, limpios</span> y, sobre
            todo, que no se conviertan en un dolor de cabeza para el futuro.
          </p>

          <div className="pt-10 border-t border-background/10 dark:border-foreground/10">
            <p className="dark:text-foreground text-background/60 font-medium">
              Más allá de seguir tendencias, mi prioridad es la{" "}
              <span className="text-status">estabilidad</span>. Construyo
              software que soluciona problemas hoy, pero que está preparado para
              crecer mañana.
            </p>
          </div>
        </div>
      </div>

      <TechSlider />
    </section>
  );
};

export default AboutSection;
