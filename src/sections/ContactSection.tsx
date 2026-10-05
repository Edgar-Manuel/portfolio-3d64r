import { FadeIn } from "../components/FadeIn";
import { CONTACT_EMAIL, CONTACT_HREF, CV_HREF, GITHUB_HREF, PHONE_DISPLAY, WHATSAPP_HREF } from "../data/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center leading-none" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Hablemos
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#0C0C0C] font-light text-center max-w-xl mx-auto mt-8 text-lg opacity-70">
          Busco mi próximo equipo en backend Python e IA. Escríbeme por WhatsApp o correo y te respondo enseguida.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mt-12 max-w-3xl mx-auto">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-[#25D366] text-[#0C0C0C] font-semibold uppercase tracking-wider px-8 py-5 text-center transition-transform hover:scale-[1.03]"
          >
            WhatsApp
            <span className="block font-light normal-case tracking-normal text-sm">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={CONTACT_HREF}
            className="flex-1 rounded-full bg-[#0C0C0C] text-white font-semibold uppercase tracking-wider px-8 py-5 text-center transition-transform hover:scale-[1.03]"
          >
            Correo
            <span className="block font-light normal-case tracking-normal text-sm break-all">{CONTACT_EMAIL}</span>
          </a>
        </div>
        <div className="flex justify-center gap-8 mt-8 text-[#0C0C0C] uppercase tracking-wider text-sm">
          <a href={CV_HREF} download className="underline underline-offset-4 hover:opacity-60">
            Descargar CV
          </a>
          <a href={GITHUB_HREF} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60">
            GitHub
          </a>
        </div>
      </FadeIn>

      <p className="text-center text-[#0C0C0C] opacity-40 text-xs uppercase tracking-widest mt-20">
        © {new Date().getFullYear()} Edgar Manchón · 3D64R · Santander, España
      </p>
    </section>
  );
}
