import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT_EMAIL, CONTACT_HREF, CV_HREF, PHONE_DISPLAY, WHATSAPP_HREF } from "../data/content";

const ContactContext = createContext<{ open: () => void }>({ open: () => {} });

export const useContactModal = () => useContext(ContactContext);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contactar con Edgar"
              className="w-full max-w-md rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8"
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="hero-heading font-black uppercase text-3xl sm:text-4xl leading-none">Hablemos</h3>
                <button onClick={close} aria-label="Cerrar" className="text-[#D7E2EA] text-2xl leading-none hover:opacity-70">
                  ×
                </button>
              </div>
              <p className="text-[#D7E2EA] font-light mt-3 mb-6">Elige cómo prefieres contactarme.</p>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#25D366] text-[#0C0C0C] font-semibold uppercase tracking-wider px-6 py-4 text-center transition-transform hover:scale-[1.02]"
                >
                  WhatsApp · {PHONE_DISPLAY}
                </a>
                <a
                  href={CONTACT_HREF}
                  className="rounded-2xl border border-[#D7E2EA] text-[#D7E2EA] font-semibold tracking-wider px-6 py-4 text-center transition-transform hover:scale-[1.02] break-all"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={CV_HREF}
                  download
                  className="text-center text-[#D7E2EA] font-light underline underline-offset-4 pt-2 hover:opacity-70"
                >
                  Descargar CV (PDF)
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}
