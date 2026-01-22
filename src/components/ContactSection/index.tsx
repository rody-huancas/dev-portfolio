import Title from "../Title";
import { BsArrowRight } from "react-icons/bs";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-24 w-full">
      <div className="space-y-5">
        <Title label="Contacto" title="Hablemos" subtitle="ahora" />

        <div className="space-y-10">
          <p className="space-y-6 text-text-muted text-lg md:text-xl font-light">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy
            disponible para nuevas oportunidades y retos técnicos.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono uppercase tracking-widest text-hero-muted"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#1f1e1e] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-status transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono uppercase tracking-widest text-hero-muted"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1f1e1e] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-status transition-colors"
                  placeholder="email@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-mono uppercase tracking-widest text-hero-muted"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#1f1e1e] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-status transition-colors resize-none"
                placeholder="¿En qué puedo ayudarte?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="group relative w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95"
            >
              <span className="relative z-10 text-sm uppercase tracking-widest">
                Enviar mensaje
              </span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-xl">
                <BsArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
