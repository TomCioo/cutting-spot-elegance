import { Calendar, Clock, Sparkles } from "lucide-react";

export default function Booking() {
  return (
    <section id="rezerwacja" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="relative container mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono-spaced text-xs text-gold">— Rezerwacja</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight">
            Twoje miejsce <span className="italic text-gradient-gold">czeka</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Rezerwuj wygodnie online przez Booksy — wybierz usługę, datę i barbera.
            Potwierdzenie otrzymasz natychmiast.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2 justify-center">
              <Calendar size={16} className="text-gold" /> Dostępność 24/7
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Clock size={16} className="text-gold" /> Natychmiastowe potwierdzenie
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Sparkles size={16} className="text-gold" /> Wybór barbera
            </div>
          </div>

          <a
            href="https://booksy.com/pl-pl/265847_cutting-spot-barber_none_12930_opole"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-12 py-5 text-sm font-mono-spaced rounded-sm hover:shadow-[var(--shadow-gold)] transition-all"
          >
            Umów wizytę online
          </a>
        </div>
      </div>
    </section>
  );
}