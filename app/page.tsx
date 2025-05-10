import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import WorkExperience from "@/components/Experience";
import FeaturedProjects from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main>
      <Hero />
      {/* <WorkExperience /> */}
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}