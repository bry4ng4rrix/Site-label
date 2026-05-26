import Navbar            from "@/components/layout/Navbar";
import Footer            from "@/components/layout/Footer";
import Hero              from "@/components/home/Hero";
import Ticker            from "@/components/home/Ticker";
import ServicesGrid      from "@/components/home/ServicesGrid";
import CallCenterHighlight from "@/components/home/CallCenterHighlight";
import Process           from "@/components/home/Process";
import Testimonials      from "@/components/home/Testimonials";
import CtaSection        from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <ServicesGrid />
      <CallCenterHighlight />
      <Process />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
