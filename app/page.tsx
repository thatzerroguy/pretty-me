import Hero from "@/components/Hero";
import CuratedCollections from "@/components/CuratedCollections";
import SpotlightSection from "@/components/SpotlightSection";
import LatestArrivals from "@/components/LatestArrivals";
import BrandStory from "@/components/BrandStory";

export default function Home() {
  return (
    <>
      <Hero />
      <CuratedCollections />
      <SpotlightSection />
      <LatestArrivals />
      <BrandStory />
    </>
  );
}
