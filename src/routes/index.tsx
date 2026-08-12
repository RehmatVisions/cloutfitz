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
import { Footer } from "@/components/site/Footer";

const title = "Vezelai Designs — Restaurant Branding & Menu Design Studio";
const description =
  "Vezelai Designs creates menus, logos, flyers, social posts, packaging and websites for restaurants in Dubai and worldwide.";

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
      <Testimonials />
      <Designers />
      <BookingForm />
      <Footer />
      <DesignChatbot />
    </main>
  );
}
