import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 lg:py-36">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="font-mono-spaced text-xs text-gold">— Kontakt</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
              Odwiedź nas w <span className="italic text-gradient-gold">Opolu</span>.
            </h2>

            <div className="mt-12 space-y-8">
              <div className="flex gap-5">
                <div className="w-11 h-11 flex items-center justify-center border border-gold/40 text-gold rounded-sm shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-mono-spaced text-xs text-muted-foreground mb-1">Adres</div>
                  <div className="font-display text-lg">Wrocławska 12</div>
                  <div className="text-muted-foreground">45-707 Opole</div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-11 h-11 flex items-center justify-center border border-gold/40 text-gold rounded-sm shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-mono-spaced text-xs text-muted-foreground mb-1">Telefon</div>
                  <a href="tel:+48798473461" className="font-display text-lg hover:text-gold transition-colors">
                    798 473 461
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-11 h-11 flex items-center justify-center border border-gold/40 text-gold rounded-sm shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="font-mono-spaced text-xs text-muted-foreground mb-1">Godziny otwarcia</div>
                  <div className="space-y-1 text-foreground">
                    <div className="flex justify-between gap-8">
                      <span>Poniedziałek — Piątek</span>
                      <span className="text-gold">9:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sobota</span>
                      <span className="text-gold">9:00 — 15:00</span>
                    </div>
                    <div className="flex justify-between gap-8 text-muted-foreground">
                      <span>Niedziela</span>
                      <span>Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-full min-h-[460px] rounded-sm overflow-hidden border border-border">
            <iframe
              title="Cutting Spot Barber — mapa"
              src="https://www.google.com/maps?q=Wroc%C5%82awska%2012%2C%2045-707%20Opole&output=embed"
              loading="lazy"
              className="w-full h-full grayscale contrast-110"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}