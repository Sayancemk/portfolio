import AboutMe from "@/components/shared/AboutMe";
import HeroSection from "@/components/shared/HeroSection";
import Skills from "@/components/shared/Skills";
import Projects from "@/components/shared/Projects";

export default function Home() {

  return (
    <main className="w-full">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
