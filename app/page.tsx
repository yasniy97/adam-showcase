import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import ScrumEnhancements from "@/components/ScrumEnhancements";
import VideoGallery from "@/components/VideoGallery";
import CTA from "@/components/CTA";
import Investors from "@/components/Investors";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <ScrumEnhancements />
      <VideoGallery />
      <CTA />
      <Investors />
    </main>
  );
}

