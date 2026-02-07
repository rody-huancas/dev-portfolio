"use client";

import { useState } from "react";
import { toast } from "sonner";
import Title from "../Title";
import { BsArrowRight } from "react-icons/bs";

const ContactSection = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const data     = {
      name   : formData.get("name")    as string,
      email  : formData.get("email")   as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send", {
        method : "POST",
        body   : JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Error en el envío");

      toast.success("¡Mensaje enviado correctamente! Te responderé pronto.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="pt-24 w-full">
      <div className="space-y-5">
        <Title label="Contacto" title="Hablemos" subtitle="ahora" />

        <div className="space-y-10">
          <p className="text-description text-lg md:text-xl font-light">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy
            disponible para nuevas oportunidades y retos técnicos.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-hero-muted">
                  Nombre
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="w-full bg-white/40 dark:bg-input-bg border border-background/10 dark:border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-status transition-colors placeholder:text-description"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-hero-muted">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full bg-white/40 dark:bg-input-bg border border-background/10 dark:border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-status transition-colors placeholder:text-description"
                  placeholder="email@ejemplo.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-hero-muted">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full bg-white/40 dark:bg-input-bg border border-background/10 dark:border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-status transition-colors resize-none placeholder:text-description"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full md:w-auto px-10 py-4 bg-background dark:bg-foreground dark:text-background text-foreground font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 text-sm uppercase tracking-widest">
                {isPending ? "Enviando..." : "Enviar mensaje"}
              </span>

              {!isPending && (
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-xl">
                  <BsArrowRight />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
