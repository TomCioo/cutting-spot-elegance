import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl">
            Cutting<span className="text-gold">.</span>Spot
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Premium barber shop w Opolu. Miejsce, gdzie styl spotyka precyzję.
          </p>
        </div>
        <div>
          <div className="font-mono-spaced text-xs text-gold mb-4">Nawigacja</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#o-nas" className="hover:text-gold transition-colors">O nas</a></li>
            <li><a href="#oferta" className="hover:text-gold transition-colors">Oferta</a></li>
            <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
            <li><a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-spaced text-xs text-gold mb-4">Social</div>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/cuttingspot.barber/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center border border-border rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/people/Cutting-Spot/61567061978625/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 flex items-center justify-center border border-border rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Wrocławska 12, 45-707 Opole<br />
            <a href="tel:+48798473461" className="hover:text-gold">+48 798 473 461</a>
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Cutting Spot Barber. Wszelkie prawa zastrzeżone.</div>
          <div>Opole · Premium Barber Shop</div>
        </div>
      </div>
    </footer>
  );
}