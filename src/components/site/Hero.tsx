import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Scissors } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wnętrze Cutting Spot Barber w Opolu"
          width={1920}
          height={1280}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 text-gold mb-8">
            <Scissors size={16} />
            <span className="font-mono-spaced text-xs">Premium Barber · Opole</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
            Cutting Spot
            <br />
            <span className="text-gradient-gold italic font-normal">Barber</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Miejsce, gdzie styl spotyka precyzję. Rzemiosło, charakter i ceremonia
            klasycznego barbera — w sercu Opola.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="https://booksy.com/pl-pl/265847_cutting-spot-barber_none_12930_opole"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 text-xs font-mono-spaced rounded-sm hover:shadow-[var(--shadow-gold)] transition-all"
            >
              Zarezerwuj wizytę
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 text-xs font-mono-spaced rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              Zobacz ofertę
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs font-mono-spaced opacity-70">
        ⌄ scroll
      </div>
    </section>
  );
}