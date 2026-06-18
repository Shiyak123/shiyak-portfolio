import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProfessionalSkills from "../components/Education";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="overflow-x-visible">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <ProfessionalSkills />
            <Certifications />
            <Contact />
            <Footer />
        </main>
    );
}