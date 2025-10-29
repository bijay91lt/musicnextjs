import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/2">
     <HeroSection />
     <FeaturedCourses />
     <WhyChooseUs/>
     <TestimonialCards/>
    </main>
  );
}
