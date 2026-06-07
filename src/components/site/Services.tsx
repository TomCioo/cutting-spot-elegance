const categories = [
  {
    name: "Strzyżenie",
    services: [
      { name: "Strzyżenie męskie", desc: "Klasyczne lub nowoczesne strzyżenie maszynką i nożyczkami.", price: "80 zł" },
      { name: "Strzyżenie dziecięce", desc: "Strzyżenie dla młodszych klientów do 12 lat.", price: "60 zł" },
      { name: "Buzz Cut", desc: "Krótkie, jednolite strzyżenie maszynką.", price: "60 zł" },
    ],
  },
  {
    name: "Broda",
    services: [
      { name: "Modelowanie brody", desc: "Konturowanie, trymowanie i pielęgnacja brody.", price: "60 zł" },
      { name: "Royal Shave", desc: "Tradycyjne golenie brzytwą z ciepłym ręcznikiem.", price: "80 zł" },
      { name: "Konturowanie brzytwą", desc: "Precyzyjne linie i wykończenie brzytwą.", price: "40 zł" },
    ],
  },
  {
    name: "Pakiety",
    services: [
      { name: "Strzyżenie + Broda", desc: "Kompleksowa metamorfoza — włosy i broda.", price: "130 zł" },
      { name: "Royal Package", desc: "Strzyżenie, broda, golenie brzytwą i kosmetyka.", price: "170 zł" },
      { name: "Father & Son", desc: "Wizyta dla taty i syna — wspólne doświadczenie.", price: "130 zł" },
    ],
  },
  {
    name: "Stylizacja",
    services: [
      { name: "Stylizacja włosów", desc: "Profesjonalne ułożenie z premium kosmetykami.", price: "30 zł" },
      { name: "Mycie + masaż głowy", desc: "Relaksujący rytuał przed strzyżeniem.", price: "20 zł" },
      { name: "Kuracja regeneracyjna", desc: "Pielęgnacja włosów i skóry głowy.", price: "50 zł" },
    ],
  },
];

export default function Services() {
  return (
    <section id="oferta" className="py-24 lg:py-36 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <span className="font-mono-spaced text-xs text-gold">— Oferta</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
            Pełna karta <span className="italic text-gradient-gold">usług</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Każda usługa to ceremonia. Wybierz to, czego potrzebujesz — lub powiedz,
            jak chcesz wyglądać, a my zaproponujemy rozwiązanie.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
                <h3 className="font-display text-2xl lg:text-3xl">{cat.name}</h3>
                <span className="font-mono-spaced text-xs text-muted-foreground">
                  {cat.services.length} usługi
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className="group relative bg-card border border-border p-7 rounded-sm hover-lift hover:border-gold/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-display text-xl text-foreground">
                        {s.name}
                      </h4>
                      <span className="text-gold font-mono-spaced text-sm whitespace-nowrap">
                        {s.price}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://booksy.com/pl-pl/265847_cutting-spot-barber_none_12930_opole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 text-xs font-mono-spaced rounded-sm hover:shadow-[var(--shadow-gold)] transition-all"
          >
            Umów wizytę online
          </a>
        </div>
      </div>
    </section>
  );
}