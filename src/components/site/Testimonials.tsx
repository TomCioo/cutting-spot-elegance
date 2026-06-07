import { Star } from "lucide-react";

const reviews = [
  { name: "Michał K.", text: "Najlepszy barber w Opolu. Profesjonalizm, klimat i efekt na najwyższym poziomie. Wracam regularnie." },
  { name: "Tomasz W.", text: "Royal Shave to doświadczenie, którego nie zapomnę. Czujesz, że dbają o każdy detal." },
  { name: "Kacper M.", text: "Świetna atmosfera, dobra kawa i precyzyjne strzyżenie. Polecam każdemu, kto szuka premium." },
  { name: "Jakub S.", text: "Konsultacja przed strzyżeniem zmieniła moje podejście. Wreszcie fryzura, która do mnie pasuje." },
  { name: "Adam P.", text: "Wnętrze jak z magazynu, obsługa pierwsza klasa. Cena adekwatna do jakości." },
  { name: "Łukasz D.", text: "Modelowanie brody robione perfekcyjnie. Już nie pójdę nigdzie indziej." },
];

export default function Testimonials() {
  return (
    <section id="opinie" className="py-24 lg:py-36">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="font-mono-spaced text-xs text-gold">— Opinie</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
            Słowa naszych <span className="italic text-gradient-gold">klientów</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-card border border-border p-8 rounded-sm hover-lift hover:border-gold/40"
            >
              <div className="flex gap-0.5 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed font-display text-lg italic">
                „{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-xs font-mono-spaced text-muted-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}