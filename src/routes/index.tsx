import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Work } from "@/components/site/Work";
import { Testimonials } from "@/components/site/Testimonials";
import { Designers } from "@/components/site/Designers";
import { BookingForm } from "@/components/site/BookingForm";
import { DesignChatbot } from "@/components/site/DesignChatbot";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Footer } from "@/components/site/Footer";

const title = "CLOUTFITZ Apparels — Premium Apparel Design & Clothing Branding Studio";
const description =
  "CLOUTFITZ Apparels creates premium T-shirt, hoodie, and sweater designs, logos, branding and social posts for clothing brands worldwide. 20-30 designs monthly starting at 399 AED.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* <Nav /> */}
      <Hero />
      <Services />
      <Process />
      <Work />
      <Designers />
      <Testimonials />
      <BookingForm />
      <Footer />
      <DesignChatbot />
      <ScrollToTop />
    </main>
  );
}
