"use client";

import { useState } from "react";
import { toast } from "sonner";
import Title from "../Title";
import { useI18n } from "@/i18n/I18nProvider";
import { BsArrowRight } from "react-icons/bs";

const ContactSection = () => {
  const { dictionary } = useI18n();
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

      if (!response.ok) throw new Error(dictionary.contact.submitError);

      toast.success(dictionary.contact.success);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(dictionary.contact.error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="pt-24 w-full">
      <div className="space-y-5">
        <Title
          label={dictionary.contact.sectionLabel}
          title={dictionary.contact.sectionTitle}
          subtitle={dictionary.contact.sectionSubtitle}
        />

        <div className="space-y-10">
          <p className="text-description text-lg md:text-xl font-light">
            {dictionary.contact.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-hero-muted">
                  {dictionary.contact.fields.name}
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="w-full bg-white/40 dark:bg-input-bg border border-background/10 dark:border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-status transition-colors placeholder:text-description"
                  placeholder={dictionary.contact.fields.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-hero-muted">
                  {dictionary.contact.fields.email}
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full bg-white/40 dark:bg-input-bg border border-background/10 dark:border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-status transition-colors placeholder:text-description"
                  placeholder={dictionary.contact.fields.emailPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-hero-muted">
                {dictionary.contact.fields.message}
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full bg-white/40 dark:bg-input-bg border border-background/10 dark:border-foreground/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:border-status transition-colors resize-none placeholder:text-description"
                placeholder={dictionary.contact.fields.messagePlaceholder}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full md:w-auto px-10 py-4 bg-background dark:bg-foreground dark:text-background text-foreground font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 text-sm uppercase tracking-widest">
                {isPending ? dictionary.contact.submitting : dictionary.contact.submit}
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
