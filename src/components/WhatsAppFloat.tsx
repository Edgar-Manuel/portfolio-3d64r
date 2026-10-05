import { useEffect, useState } from "react";
import { WHATSAPP_HREF } from "../data/content";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}  h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0C0C0C] shadow-lg transition-transform hover:scale-110`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5Z" />
      </svg>
    </a>
  );
}
