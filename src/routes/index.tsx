import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Booking from "@/components/site/Booking";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cutting Spot Barber — Premium Barber Shop Opole" },
      {
        name: "description",
        content:
          "Cutting Spot Barber w Opolu — premium barber shop. Strzyżenie, broda, pakiety. Wrocławska 12. Rezerwuj wizytę online przez Booksy.",
      },
      { property: "og:title", content: "Cutting Spot Barber — Premium Barber Shop Opole" },
      {
        property: "og:description",
        content: "Miejsce, gdzie styl spotyka precyzję. Premium barber shop w Opolu.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Cutting Spot Barber",
          image: "/og.jpg",
          telephone: "+48798473461",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Wrocławska 12",
            postalCode: "45-707",
            addressLocality: "Opole",
            addressCountry: "PL",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
          ],
          sameAs: [
            "https://www.instagram.com/cuttingspot.barber/",
            "https://www.facebook.com/people/Cutting-Spot/61567061978625/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
