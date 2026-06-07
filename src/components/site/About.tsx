import aboutImg from "@/assets/about.jpg";

const stats = [
  { value: "8+", label: "Lat doświadczenia" },
  { value: "12K", label: "Zadowolonych klientów" },
  { value: "4.9", label: "Ocena w Booksy" },
];

export default function About() {
  return (
    <section id="o-nas" className="py-24 lg:py-36">
      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="absolute -inset-6 border border-gold/30 rounded-sm hidden lg:block" />
          <img
            src={aboutImg}
            alt="Barber przy pracy w Cutting Spot"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative w-full h-[520px] lg:h-[640px] object-cover rounded-sm"
          />
        </div>
        <div>
          <span className="font-mono-spaced text-xs text-gold">— O nas</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
            Klasyczne rzemiosło, <span className="italic text-gradient-gold">nowoczesny</span> styl.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cutting Spot Barber to przestrzeń stworzona dla mężczyzn, którzy
            cenią detal. Łączymy tradycję barberingu z nowoczesnymi technikami,
            by zaoferować doświadczenie wykraczające poza zwykłą wizytę u
            fryzjera.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Każdy klient otrzymuje indywidualne podejście — od konsultacji,
            przez precyzyjne strzyżenie, po finalną stylizację. To rytuał,
            który zapamiętasz.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl lg:text-4xl text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}