import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, alt: "Fade haircut", h: "row-span-2" },
  { src: g2, alt: "Beard trim", h: "" },
  { src: g5, alt: "Wnętrze barbershop", h: "" },
  { src: g3, alt: "Narzędzia barbera", h: "" },
  { src: g4, alt: "Portret klienta", h: "row-span-2" },
  { src: g6, alt: "Hot towel shave", h: "" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-36 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono-spaced text-xs text-gold">— Galeria</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
              Detale, które <span className="italic text-gradient-gold">robią różnicę</span>.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/cuttingspot.barber/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono-spaced text-muted-foreground hover:text-gold transition-colors"
          >
            Zobacz więcej na Instagramie →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense auto-rows-[220px] md:auto-rows-[280px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm bg-card ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}