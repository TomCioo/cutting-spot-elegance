import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Czy muszę umówić wizytę wcześniej?",
    a: "Rekomendujemy rezerwację przez Booksy — terminy szybko się zapełniają. Przyjmujemy też klientów bez rezerwacji w miarę dostępności.",
  },
  {
    q: "Jak długo trwa wizyta?",
    a: "Strzyżenie zajmuje około 40 minut, pakiet Royal nawet 90 minut. Czas dostosowujemy do Twoich potrzeb — bez pośpiechu.",
  },
  {
    q: "Czy oferujecie strzyżenie dla dzieci?",
    a: "Tak, mamy dedykowaną usługę dla młodszych klientów do 12 lat w spokojnej, komfortowej atmosferze.",
  },
  {
    q: "Jakie metody płatności akceptujecie?",
    a: "Gotówka, BLIK i karty płatnicze — wybierasz, co jest dla Ciebie wygodne.",
  },
  {
    q: "Gdzie się znajdujecie?",
    a: "Wrocławska 12, 45-707 Opole. W centrum miasta, z łatwym dojazdem i parkingiem w okolicy.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-36 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
        <div className="text-center mb-16">
          <span className="font-mono-spaced text-xs text-gold">— FAQ</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
            Najczęstsze <span className="italic text-gradient-gold">pytania</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-sm px-6"
            >
              <AccordionTrigger className="font-display text-lg text-left hover:text-gold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}